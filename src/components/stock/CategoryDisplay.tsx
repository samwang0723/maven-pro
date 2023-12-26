const CategoryDisplay = ({ text }) => {
  // split .otc / .tse on tail
  const data = text.split('.');
  const category = data[0];
  const market = data[1] === 'tse' ? '上市' : '上櫃';
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-sm text-gray-800 dark:text-white">{category}</span>
      <span className="text-xs text-gray-500">{market}</span>
    </div>
  );
};

export default CategoryDisplay;
