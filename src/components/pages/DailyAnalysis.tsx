import ChartGrid from '../stock/ChartGrid';
import Alert from '../general/Alert';
import { useDailyAnalysis } from '../../features/aggregators/dailyAnalysis';
import Calendar from '../stock/Calendar';
import { useState } from 'react';
import { addOneDay, formatDate, getDateTwoMonthsAgo } from '../utils/date';

const DailyAnalysis = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(formatDate(today));
  const [startDate, setStartDate] = useState(getDateTwoMonthsAgo(today));
  const [endDate, setEndDate] = useState(addOneDay(today));

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    setStartDate(getDateTwoMonthsAgo(date));
    setEndDate(addOneDay(date));
  };

  const { dailyCloses, loading, fetchError } = useDailyAnalysis(
    selectedDate,
    startDate,
    endDate
  );

  return (
    <header>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <p className="mb-2 text-sm font-semibold text-blue-600">Selections</p>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Analysis: Picked the highest possibility from concentration, scale and
          pressure for you to Win
        </h1>
        <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
          Analysis from selected date's stock performance, including the
          concentration, pressure, whether it is already break through the
          pressure point or ready to break through.
        </p>
        <Calendar onDateChange={handleDateChange} />
        {loading && (
          <button
            type="button"
            className="flex justify-center items-center h-[2.875rem] w-[2.875rem] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mt-2"
          >
            <span
              className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </span>
          </button>
        )}
        {fetchError && (
          <div className="flex mt-4">
            <Alert show={true} onDismiss={() => {}}>
              <span className="font-semibold">Error:</span> {fetchError}
            </Alert>
          </div>
        )}
        {!loading && !fetchError && (
          <ChartGrid data={dailyCloses} refetch={() => {}} />
        )}

        <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <a
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-big-down-dash"
            >
              <path d="M15 5H9" />
              <path d="M15 9v3h4l-7 7-7-7h4V9h6z" />
            </svg>
            Download analysis report
          </a>
        </div>
      </div>
    </header>
  );
};

export default DailyAnalysis;
