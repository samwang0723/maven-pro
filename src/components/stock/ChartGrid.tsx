import Chart from './Chart';
import { usePickedStocks } from '../../features/aggregators/pickedStocks';
import Alert from '../general/Alert';

function getDateTwoMonthsAgo() {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 2);

  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);

  return `${year}${month}${day}`;
}

const ChartGrid = () => {
  const startDate = getDateTwoMonthsAgo(); // Set the start date for the history search
  const { dailyCloses, loading, fetchError } = usePickedStocks(startDate);

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex mt-4">
        <Alert color="red" show={true} onDismiss={() => {}}>
          <span className="font-semibold">Error:</span> {fetchError.data.message}
        </Alert>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-1 items-center mt-4 mb-4">
      {dailyCloses && dailyCloses.length > 0 ? (
        dailyCloses.map((stock) => <Chart key={stock.id} {...stock} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChartGrid;
