export function constructPayload(stock, history) {
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
