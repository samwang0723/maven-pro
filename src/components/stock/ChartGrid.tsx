import Chart from './Chart';

const ChartGrid = ({data}) => {
  return (
    <div className="flex flex-wrap gap-1 items-center mt-4 mb-4">
      {data && data.length > 0 ? (
        data.map((stock) => <Chart key={stock.id} {...stock} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChartGrid;
