import { useState } from 'react';
import { jarvisApi } from '../../features/apis/jarvisApi';

// Define a type for the component props
type WatchProps = {
  id: string; // Assuming id is a string, adjust the type if necessary
  watched: boolean;
};

const Watch: React.FC<WatchProps> = ({ id, watched }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(watched);
  const [watchApi] = jarvisApi.useJarvisV1InsertPickedStocksMutation();

  const performWatch = async () => {
    try {
      const res = await watchApi({
        v1InsertPickedStocksRequest: {
          stockIDs: [id],
        },
      }).unwrap();

      if (res.success) {
        setIsDisabled(true);
      }
    } catch (e) {
      console.log('watch error', e);
    }
  };

  return (
    <button
      type="button"
      className="flex flex-shrink-0 justify-center items-center gap-2 h-[1.8rem] w-[1.8rem] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      disabled={isDisabled}
      onClick={performWatch}
      aria-label="Add to watch list"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-eye"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
  );
};

export default Watch;
