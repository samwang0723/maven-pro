const CategoryDisplay = ({ text }) => {
  // split .otc / .tse on tail
  const data = text.split('.');
  const category = data[0];
  const market = data[1] === 'tse' ? '上市' : '上櫃';
  return (
    <div className="flex items-center gap-x-1 pr-3">
      <span className="text-xs text-gray-800 dark:text-white w-16 whitespace-normal">{category}</span>
      <span className="text-xs text-gray-500">{market}</span>
    </div>
  );
};

export default CategoryDisplay;
