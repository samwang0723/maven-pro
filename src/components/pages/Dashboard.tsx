import AnalysisTable from '../stock/AnalysisTable';
import Alert from '../general/Alert';
import { jarvisApi } from '../../features/apis/jarvisApi';
import Calendar from '../stock/Calendar';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/date';

const Dashboard = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(formatDate(today));
  const [selections, setSelections] = useState({});
  const { data, error } = jarvisApi.useJarvisV1ListPickedStocksQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const [selectionApi] = jarvisApi.useJarvisV1ListSelectionsMutation();

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  const fetchSelections = async () => {
    try {
      const selectionData = await selectionApi({
        v1ListSelectionRequest: {
          date: selectedDate,
          strict: false,
        },
      }).unwrap();

      if (!selectionData.entries || selectionData.entries.length === 0) {
        return;
      }

      setSelections(selectionData);
    } catch (e) {}
  };

  useEffect(() => {
    fetchSelections();
  }, [selectedDate]);

  return (
    <>
      {error && (
        <div className="flex mt-1">
          <Alert show={true} onDismiss={() => {}}>
            <span className="font-semibold">Error:</span> {error}
          </Alert>
        </div>
      )}
      <Calendar onDateChange={handleDateChange} />
      <AnalysisTable
        data={selections}
        title={'Daily Analysis of outperforming Stocks'}
        subtitle={'Review the outperforming stocks and add into watchlist'}
      />
      <AnalysisTable
        data={data}
        title={'Watchlist Latest Price with Analysis'}
        subtitle={
          'Pay attention to the concentration changes and the candlestick shape'
        }
      />
    </>
  );
};

export default Dashboard;
