import { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';

const red = 'rgba(249, 40, 85, 1.0)';
const green = 'rgba(45, 192, 142, 1.0)';
const gridColor = '#1E1E1E';
const CHART_WIDTH = 64 * 4 - 10;
const CHART_HEIGHT = 180;

function priceIndicator(close: number, diff: number, diffPercent: string) {
  if (diff > 0) {
    return (
      <>
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-red-100 text-red-800 rounded-md dark:bg-red-500/10 dark:text-red-500">
          <svg
            className="flex-shrink-0 w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>

          {close}
        </span>
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-red-100 text-red-800 rounded-md dark:bg-red-500/10 dark:text-red-500">
          +{diff}
        </span>

        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-red-100 text-red-800 rounded-md dark:bg-red-500/10 dark:text-red-500">
          +{diffPercent}
        </span>
      </>
    );
  } else if (diff < 0) {
    return (
      <>
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-teal-100 text-teal-800 rounded-md dark:bg-teal-500/10 dark:text-teal-500">
          <svg
            className="flex-shrink-0 w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
            <polyline points="16 17 22 17 22 11" />
          </svg>

          {close}
        </span>
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-teal-100 text-teal-800 rounded-md dark:bg-teal-500/10 dark:text-teal-500">
          {diff}
        </span>

        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-teal-100 text-teal-800 rounded-md dark:bg-teal-500/10 dark:text-teal-500">
          {diffPercent}
        </span>
      </>
    );
  }

  return (
    <>
      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-gray-100 text-gray-800 rounded-md dark:bg-slate-500/20 dark:text-slate-400">
        {close}
      </span>
      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-gray-100 text-gray-800 rounded-md dark:bg-slate-500/20 dark:text-slate-400">
        {diff}
      </span>

      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs text-sm font-bold bg-gray-100 text-gray-800 rounded-md dark:bg-slate-500/20 dark:text-slate-400">
        {diffPercent}
      </span>
    </>
  );
}

function concentrationBadge(analysis) {
  let text = '-';

  if (analysis.foreign > 0 && analysis.trust > 0) {
    text = '土洋';
  } else if (analysis.foreign > 0) {
    text = '外資';
  } else if (analysis.trust > 0) {
    text = '投信';
  }
  return (
    <span className="inline-flex items-center gap-x-1 py-1 px-2 ml-1 rounded-md text-xs text-sm font-small bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
      {text}
    </span>
  );
}

function rateBadge(analysis) {
  var result = (
    <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-gray-800 text-white dark:bg-white dark:text-gray-800">
      -
    </span>
  );
  var count = 0;
  count += analysis.concentration1 > 0 ? 1 : 0;
  count += analysis.concentration5 > 0 ? 1 : 0;
  count += analysis.concentration10 > 0 ? 1 : 0;
  count += analysis.concentration20 > 0 ? 1 : 0;
  count += analysis.concentration60 > 0 ? 1 : 0;

  if (count === 5) {
    result = (
      <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-teal-500 text-white">
        五燈
      </span>
    );
  } else if (count === 4) {
    result = (
      <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-yellow-500 text-dark">
        四星
      </span>
    );
  }

  count += analysis.foreign > 0 ? 1 : 0;
  count += analysis.trust > 0 ? 1 : 0;
  count += analysis.foreign10 > 0 ? 1 : 0;
  count += analysis.trust10 > 0 ? 1 : 0;

  if (count === 9) {
    result = (
      <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-red-500 text-white">
        滿貫
      </span>
    );
  }

  return result;
}

function parseStockData(stockData) {
  return stockData.map((item) => {
    // Return a new object with only the required fields
    return {
      timestamp: item.date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'),
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
      volume: Number(item.tradeShares),
      turnover: item.turnover,
    };
  });
}

// identify highest and lowest price from data loop
// and attach marker on series
function markHighLow(series, data) {
  let highest = data[0];
  let lowest = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].high > highest.high) {
      highest = data[i];
    }
    if (data[i].low < lowest.low) {
      lowest = data[i];
    }
  }
  const mData = [
    {
      time: highest.timestamp,
      position: 'aboveBar',
      color: 'lightgrey',
      shape: 'arrowDown',
      text: String(highest.high),
    },
    {
      time: lowest.timestamp,
      position: 'belowBar',
      color: 'lightgrey',
      shape: 'arrowUp',
      text: String(lowest.low),
    },
  ];
  mData.sort((a, b) => {
    if (a.time < b.time) {
      return -1;
    }
    return 0;
  });
  series.setMarkers(mData);
}

const Chart = ({
  id,
  input,
  stockName,
  close,
  diff,
  diffPercent,
  analysis,
}) => {
  const data = parseStockData(input);
  data.sort((a: { timestamp: number }, b: { timestamp: number }) => {
    if (a.timestamp < b.timestamp) {
      return -1;
    }
    return 0;
  });

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: CHART_HEIGHT,
        handleScroll: false,
        handleScale: false,
        layout: {
          fontSize: 11,
          textColor: 'white',
          background: { color: 'black' },
        },
        grid: {
          vertLines: {
            color: gridColor,
          },
          horzLines: {
            color: gridColor,
          },
        },
        leftPriceScale: {
          borderColor: gridColor,
          visible: true,
        },
        rightPriceScale: {
          visible: false,
        },
        timeScale: {
          borderColor: gridColor,
          rightOffset: 2,
          fixLeftEdge: true,
          ticksVisible: true,
        },
      });

      // configure precision with different price.
      let precision = 2;
      const lastClose = data[0].close;
      if (lastClose >= 100 && lastClose < 500) {
        precision = 1;
      } else if (lastClose >= 500) {
        precision = 0;
      }
      const candleSeries = chart.addCandlestickSeries({
        upColor: red,
        downColor: green,
        borderDownColor: green,
        borderUpColor: red,
        wickDownColor: green,
        wickUpColor: red,
        priceScaleId: 'left',
      });
      candleSeries.priceScale().applyOptions({
        scaleMargins: {
          // positioning the price scale for the area series
          top: 0.03,
          bottom: 0.22,
        },
      });
      candleSeries.applyOptions({
        priceFormat: {
          type: 'custom',
          formatter: (price: number) => {
            return price.toFixed(precision);
          },
        },
      });
      markHighLow(candleSeries, data);

      const volumeSeries = chart.addHistogramSeries({
        color: '#5D5D5D',
        priceFormat: {
          type: 'volume',
        },
        priceScaleId: '',
      });
      volumeSeries.priceScale().applyOptions({
        scaleMargins: {
          top: 0.8, // highest point of the series will be 70% away from the top
          bottom: 0,
        },
      });

      // Convert the data to the format required by Lightweight Charts
      const candlestickData = data.map((item) => ({
        time: item.timestamp, // assuming the timestamp is in milliseconds
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
      }));

      const volumeData = data.map((item: { timestamp: any; volume: any }) => ({
        time: item.timestamp, // assuming the timestamp is in milliseconds
        value: item.volume,
      }));

      candleSeries.setData(candlestickData);
      volumeSeries.setData(volumeData);

      chart.timeScale().fitContent();

      // This is a workaround to avoid canvas z-index break other div
      var screenshot = chart.takeScreenshot();
      screenshot.style.width = CHART_WIDTH + 'px';
      screenshot.style.height = CHART_HEIGHT + 'px';

      while (chartContainerRef.current.firstChild) {
        chartContainerRef.current.removeChild(
          chartContainerRef.current.firstChild
        );
      }
      chartContainerRef.current.appendChild(screenshot);

      return () => {
        chart.remove();
      };
    }
  }, [id, data]);

  // price color if diff contains +,use red,otherwise use green

  const badge = rateBadge(analysis);
  const cBadge = concentrationBadge(analysis);
  return (
    <div className="border border-black p-1 bg-black rounded-lg w-64">
      <div className="flex justify-between items-center mb-1 mt-2">
        <div className="text-white font-bold text-sm text-md mr-2 ml-2">
          {stockName}
        </div>
        <div className="flex items-center mr-2">
          {badge}
          {cBadge}
        </div>
      </div>
      <div className="flex justify-end gap-1 text-xs mr-2 ml-2 mb-1">
        {priceIndicator(close, diff, diffPercent)}
      </div>
      <div ref={chartContainerRef} id={id} />
    </div>
  );
};

export default Chart;
