const CloseDisplay = ({
  close,
  quoteChange,
}: {
  close: number;
  quoteChange: number;
}) => {
  // Determine the Tailwind CSS class based on the number's value
  const compare = quoteChange ? quoteChange : close;
  const textColorClass =
    compare > 0
      ? 'text-red-500'
      : compare < 0
      ? 'text-green-600'
      : 'text-gray-800'; // darkgrey
  const text = compare > 0 ? '▲' : compare < 0 ? '▼' : '';

  return (
    <div className="flex items-center gap-x-3">
      <span className={`text-sm ${textColorClass}`}>
        {close} {text}
      </span>
      <span className={`text-xs ${textColorClass}`}>{quoteChange}%</span>
    </div>
  );
};

export default CloseDisplay;
