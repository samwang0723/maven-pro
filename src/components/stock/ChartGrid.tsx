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
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (fetchError) {
    return <Alert message={fetchError.data.message} />;
  }

  return (
    <div className="flex flex-wrap gap-1 justify-center items-center mt-4 mb-4 ml-4 mr-4">
      {dailyCloses.map((stock) => (
        <Chart key={stock.stockID} {...stock} />
      ))}
    </div>
  );
};

export default ChartGrid;
