const ConcentrationBadge = ({ analysis }) => {
  let text = '-';

  if (analysis.foreign > 0 && analysis.trust > 0) {
    text = '土洋';
  } else if (analysis.foreign > 0) {
    text = '外資';
  } else if (analysis.trust > 0) {
    text = '投信';
  }
  return (
    <span className="inline-flex items-center gap-x-1 py-1 px-2 ml-1 rounded-md text-xs text-sm font-small bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
      {text}
    </span>
  );
};

export default ConcentrationBadge;
