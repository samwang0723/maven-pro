const PriceBadge = ({
  close,
  diff,
  diffPercent,
}: {
  close: number;
  diff: number;
  diffPercent: string;
}) => {
  if (diff > 0) {
    return (
      <>
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-red-100 text-red-800 rounded-md dark:bg-red-500/10 dark:text-red-500">
          <svg
            className="flex-shrink-0 w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>

          {close}
        </span>
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-red-100 text-red-800 rounded-md dark:bg-red-500/10 dark:text-red-500">
          +{diff}
        </span>

        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-red-100 text-red-800 rounded-md dark:bg-red-500/10 dark:text-red-500">
          +{diffPercent}
        </span>
      </>
    );
  } else if (diff < 0) {
    return (
      <>
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-teal-100 text-teal-800 rounded-md dark:bg-teal-500/10 dark:text-teal-500">
          <svg
            className="flex-shrink-0 w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
            <polyline points="16 17 22 17 22 11" />
          </svg>

          {close}
        </span>
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-teal-100 text-teal-800 rounded-md dark:bg-teal-500/10 dark:text-teal-500">
          {diff}
        </span>

        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-teal-100 text-teal-800 rounded-md dark:bg-teal-500/10 dark:text-teal-500">
          {diffPercent}
        </span>
      </>
    );
  }

  return (
    <>
      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-gray-100 text-gray-800 rounded-md dark:bg-slate-500/20 dark:text-slate-400">
        {close}
      </span>
      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-gray-100 text-gray-800 rounded-md dark:bg-slate-500/20 dark:text-slate-400">
        {diff}
      </span>

      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-gray-100 text-gray-800 rounded-md dark:bg-slate-500/20 dark:text-slate-400">
        {diffPercent}
      </span>
    </>
  );
};

export default PriceBadge;
