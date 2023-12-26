const CloseDisplay = ({
  close,
  quoteChange,
}: {
  close: number;
  quoteChange: number;
}) => {
  // Determine the Tailwind CSS class based on the number's value
  const textColorClass =
    quoteChange > 0
      ? 'text-red-500'
      : quoteChange < 0
      ? 'text-green-600'
      : 'text-gray-600'; // darkgrey
  const text = quoteChange > 0 ? '▲' : quoteChange < 0 ? '▼' : '';

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
