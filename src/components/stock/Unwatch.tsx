import { useState } from 'react';
import { jarvisApi } from '../../features/apis/jarvisApi';

// Define a type for the component props
type UnwatchProps = {
  id: string; // Assuming id is a string, adjust the type if necessary
  // function
  onUnwatch: () => void;
};

const Unwatch: React.FC<UnwatchProps> = ({ id, onUnwatch }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [unwatchApi] = jarvisApi.useJarvisV1DeletePickedStocksMutation();

  const performUnwatch = async () => {
    try {
      const res = await unwatchApi({ stockId: id }).unwrap();

      if (res.success) {
        setIsDisabled(true);
        onUnwatch();
      }
    } catch (e) {
      console.log('unwatch error', e);
    }
  };

  return (
    <button
      type="button"
      className="flex flex-shrink-0 justify-center items-center gap-2 h-[1.8rem] w-[1.8rem] text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      disabled={isDisabled}
      onClick={performUnwatch}
      aria-label="Add to watch list"
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
        className="lucide lucide-x"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
};

export default Unwatch;
