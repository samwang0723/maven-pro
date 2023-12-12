import { useEffect, useState } from 'react';
import { jarvisApi } from '../apis/jarvisApi';
import { constructPayload } from './payload';

export const useDailyAnalysis = (qDate: string, startDate: string) => {
  const [dailyCloses, setDailyCloses] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectionApi] = jarvisApi.useJarvisV1ListSelectionsMutation();
  const [dailyCloseApi] = jarvisApi.useJarvisV1ListDailyCloseMutation();

  useEffect(() => {
    setLoading(true);
    const fetchSelections = async () => {
      try {
        const data = await selectionApi({
          v1ListSelectionRequest: {
            date: qDate,
            strict: false,
          },
        }).unwrap();

        if (!data.entries || data.entries.length === 0) {
          setLoading(false);
          setFetchError({ data: { message: 'No data found' } });
          return;
        }
        fetchStocksWithHistory(data);
      } catch (e) {
        setFetchError(e.message);
      }
    };

    const fetchStocksWithHistory = async (data) => {
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

    fetchSelections();
  }, [qDate, startDate, dailyCloseApi, selectionApi]);

  return { dailyCloses, loading, fetchError };
};
