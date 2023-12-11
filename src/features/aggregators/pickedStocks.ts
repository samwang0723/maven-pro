import { useEffect, useState } from 'react';
import { jarvisApi } from '../apis/jarvisApi';

function constructPayload(stock, history) {
  return {
    id: stock.stockID,
    stockName: stock.stockID + ' ' + stock.name,
    close: stock.close,
    diff: stock.diff,
    diffPercent: stock.quoteChange + '%',
    input: history.entries,
    analysis: {
      concentration1: stock.concentration1,
      concentration5: stock.concentration5,
      concentration10: stock.concentration10,
      concentration20: stock.concentration20,
      concentration60: stock.concentration60,
      foreign: stock.foreign,
      trust: stock.trust,
      foreign10: stock.foreign10,
      trust10: stock.trust10,
    },
  };
}

export const usePickedStocks = (startDate: string) => {
  const [dailyCloses, setDailyCloses] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data, error } = jarvisApi.useJarvisV1ListPickedStocksQuery();
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
              limit: 25,
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

  return { dailyCloses, loading, fetchError };
};
