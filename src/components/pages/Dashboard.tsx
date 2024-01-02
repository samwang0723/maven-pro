import AnalysisTable from '../stock/AnalysisTable';
import WatchlistTable from '../stock/WatchlistTable';
import StockCard from '../widget/StockCard';

const Dashboard = () => {
  return (
    <>
      <div className="px-1 py-2 sm:px-1 lg:px-3 lg:py-2 mx-auto">
        <div className="flex flex-wrap gap-2 items-center mb-4">
          <StockCard id={'TAIEX'} name={'加權指數'} />
          <StockCard id={'TPEx'} name={'櫃買指數'} />
          <StockCard id={'^DJI'} dataset={'USStockPrice'} name={'道瓊斯指數'} />
          <StockCard id={'^IXIC'} dataset={'USStockPrice'} name={'納斯達克綜合指數'} />
        </div> 
      </div>
      <AnalysisTable
        title={'Daily Analysis of outperforming Stocks'}
        subtitle={'Review the outperforming stocks and add into watchlist'}
      />
      <WatchlistTable
        title={'Watchlist Latest Price with Analysis'}
        subtitle={
          'Pay attention to the concentration changes and the candlestick shape'
        }
      />
    </>
  );
};

export default Dashboard;
