import { useEffect, useState } from 'react';
import { jarvisApi } from '../apis/jarvisApi';
import { constructPayload } from './payload';

export const useDailyAnalysis = (qDate: string, startDate: string, endDate: string) => {
  const [dailyCloses, setDailyCloses] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectionApi] = jarvisApi.useJarvisV1ListSelectionsMutation();
  const [dailyCloseApi] = jarvisApi.useJarvisV1ListDailyCloseMutation();

  useEffect(() => {
    setLoading(true);
    setFetchError(null);
    setDailyCloses([]);

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
          setFetchError('No analysis data found, please select other date.');
          return;
        }
        fetchStocksWithHistory(data);
      } catch (e) {
        setFetchError('Unable to fetch daily analysis');
        setLoading(false);
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
                end: endDate,
              },
            },
          }).unwrap();
          return constructPayload(stock, dailyClose);
        });

        const results = await Promise.all(stocksWithHistoryPromises);
        setDailyCloses(results);
      } catch (e) {
        setFetchError('Unable to fetch daily analysis');
      } finally {
        setLoading(false);
      }
    };

    fetchSelections();
  }, [qDate, startDate, dailyCloseApi, selectionApi]);

  return { dailyCloses, loading, fetchError };
};
