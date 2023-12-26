const NumberDisplay = ({ value, percent = false, additional = null }) => {
  // Determine the Tailwind CSS class based on the number's value
  const compare = additional ? additional : value;
  const textColorClass =
    compare > 0 ? 'text-red-500' : compare < 0 ? 'text-green-600' : 'text-gray-800'; // darkgrey

  const text = percent ? `${value}%` : new Intl.NumberFormat('en-US').format(value);
  return <span className={`text-sm ${textColorClass}`}>{text}</span>;
};

export default NumberDisplay;
