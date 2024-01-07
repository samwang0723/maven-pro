const Calendar = () => {
  return (
    <div className="max-w-[85rem] px-1 py-2 sm:px-6 lg:px-8 lg:py-8 mx-auto">
      <p className="mb-2 text-sm font-semibold text-blue-600">Calendar</p>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
        Calendar: Important dates for trading
      </h1>
      <p className="mt-2 mb-8 text-lg text-gray-800 dark:text-gray-400">
        All valid non-trading dates provided by local government.
      </p>
      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          1 Jan, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            中華民國開國紀念日
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          2 Jan, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            國曆新年開始交易日
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            國曆新年開始交易。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          5 Feb, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            農曆春節前最後交易日
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            農曆春節前最後交易。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          6-7 Feb, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            市場無交易，僅辦理結算交割作業
          </h3>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          8 Feb, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            農曆除夕前一日
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            2月8日（星期四）調整放假，於2月17日（星期六）補行上班，但不交易亦不交割。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          9 Feb, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            農曆除夕
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          10-14 Feb, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            農曆春節
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定於2月10日至2月12日放假3日。
            於2月13日（星期二）及2月14日（星期三）補假2日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          15 Feb, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            農曆春節後開始交易日
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            農曆春節後開始交易。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          28 Feb, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            和平紀念日
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          4 Apr, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            兒童節
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          5 Apr, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            民族掃墓節
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          1 May, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            勞動節
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          10 June, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            端午節
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          17 Sep, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            中秋節
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          10 Oct, 2024
        </h3>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-4">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            國慶日
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            依規定放假1日。
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
