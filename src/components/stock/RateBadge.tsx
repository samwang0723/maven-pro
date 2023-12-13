const RateBadge = ({ analysis }) => {
  var result = (
    <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-gray-800 text-white dark:bg-white dark:text-gray-800">
      -
    </span>
  );
  var count = 0;
  count += analysis.concentration1 > 0 ? 1 : 0;
  count += analysis.concentration5 > 0 ? 1 : 0;
  count += analysis.concentration10 > 0 ? 1 : 0;
  count += analysis.concentration20 > 0 ? 1 : 0;
  count += analysis.concentration60 > 0 ? 1 : 0;

  if (count === 5) {
    result = (
      <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-teal-500 text-white">
        五燈
      </span>
    );
  } else if (count === 4) {
    result = (
      <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-yellow-500 text-dark">
        四星
      </span>
    );
  }

  count += analysis.foreign > 0 ? 1 : 0;
  count += analysis.trust > 0 ? 1 : 0;
  count += analysis.foreign10 > 0 ? 1 : 0;
  count += analysis.trust10 > 0 ? 1 : 0;

  if (count === 9) {
    result = (
      <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-red-500 text-white">
        滿貫
      </span>
    );
  }

  return result;
};

export default RateBadge;
