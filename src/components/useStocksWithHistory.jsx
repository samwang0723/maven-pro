import { useState, useEffect } from 'react';

const useStocksWithHistory = (bearerToken, startDate) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        };
        const stockListResponse = await fetch(
          'https://daily.jarvis-stock.tw/v1/pickedstocks',
          { headers }
        );
        if (!stockListResponse.ok) {
          throw new Error(`HTTP error! status: ${stockListResponse.status}`);
        }
        const stockListData = await stockListResponse.json();
        const stocksWithHistoryPromises = stockListData.entries.map(
          async (stock) => {
            const historyPayload = {
              offset: 0,
              limit: 60,
              searchParams: {
                stockID: stock.stockID,
                start: startDate,
              },
            };
            const historyResponse = await fetch(
              `https://daily.jarvis-stock.tw/v1/dailycloses`,
              {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(historyPayload),
              }
            );
            const historyData = await historyResponse.json();
            return {
              id: stock.stockID,
              stockName: stock.stockID,
              close: stock.close,
              diff: stock.diff,
              diffPercent: stock.quoteChange + '%',
              data: historyData.entries,
            };
          }
        );
        const stocksWithHistory = await Promise.all(stocksWithHistoryPromises);
        setStocks(stocksWithHistory);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, [bearerToken, startDate]);

  return { stocks, loading, error };
};

export default useStocksWithHistory;
