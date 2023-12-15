import { useEffect, useState } from 'react';
import { jarvisApi } from '../apis/jarvisApi';
import { constructPayload } from './payload';

export const usePickedStocks = (startDate: string) => {
  const [dailyCloses, setDailyCloses] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data, error, refetch } = jarvisApi.useJarvisV1ListPickedStocksQuery(null, {refetchOnMountOrArgChange: true});
  const [dailyCloseApi] = jarvisApi.useJarvisV1ListDailyCloseMutation();

  useEffect(() => {
    if (!data || error) {
      setLoading(false);
      setFetchError(error);
      return;
    }

    const fetchStocksWithHistory = async () => {
      try {
        const stocksWithHistoryPromises = data.entries.map(async (stock) => {
          const dailyClose = await dailyCloseApi({
            v1ListDailyCloseRequest: {
              offset: 0,
              limit: 35,
              searchParams: {
                stockID: stock.stockID,
                start: startDate,
              },
            },
          }).unwrap();
          return constructPayload(stock, dailyClose);
        });

        const results = await Promise.all(stocksWithHistoryPromises);
        setDailyCloses(results);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStocksWithHistory();
  }, [data, error, startDate, dailyCloseApi]);


  return { dailyCloses, loading, fetchError, refetch };
};
