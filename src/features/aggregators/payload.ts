export function constructPayload(stock, history) {
  // append realtime data
  let records = history.entries;
  // Check if the array is extensible
  if (!Object.isExtensible(records)) {
    // Clone the array if it's not extensible
    records = [...records];
  }
  if (stock.date !== records[0].date) {
    records.unshift({
      date: stock.date,
      diffPercent: stock.quoteChange + '%',
      stockID: stock.stockID,
      tradeShares: stock.volume,
      open: stock.open,
      close: stock.close,
      high: stock.high,
      low: stock.low,
      diff: stock.diff,
    });
  }

  return {
    id: stock.stockID,
    stockName: stock.stockID + ' ' + stock.name,
    close: stock.close,
    diff: stock.diff,
    diffPercent: stock.quoteChange + '%',
    input: records,
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
