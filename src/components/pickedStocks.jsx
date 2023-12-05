import { useState, useEffect } from 'react';

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

const pickedStocks = (bearerToken, startDate) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        };
        const stockListResponse = await fetch(
          'https://daily.jarvis-stock.tw/v1/pickedstocks',
          {
            headers,
          }
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
            return constructPayload(stock, historyData);
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

export default pickedStocks;
