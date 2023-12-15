import Chart from './Chart';
import { useLocation } from 'react-router-dom';

const ChartGrid = ({data, refetch}) => {
  const location = useLocation().pathname
  return (
    <div className="flex flex-wrap gap-1 items-center mt-4 mb-4">
      {data && data.length > 0 ? (
        data.map((stock) => <Chart key={stock.id} {...stock} type={location} refetch={refetch} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChartGrid;
