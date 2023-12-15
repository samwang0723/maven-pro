import { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import RateBadge from './RateBadge';
import PriceBadge from './PriceBadge';
import ConcentrationBadge from './ConcentrationBadge';
import Watch from './Watch';
import Unwatch from './Unwatch';

const red = 'rgba(249, 40, 85, 1.0)';
const green = 'rgba(45, 192, 142, 1.0)';
const gridColor = '#1E1E1E';
const CHART_WIDTH = 64 * 4 - 10;
const CHART_HEIGHT = 180;

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
  type,
  refetch,
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
  return (
    <div className="border border-black p-1 bg-black rounded-lg w-64">

      <div className="flex justify-between items-center mb-1 mt-2">
      <div className="flex justify-end items-center ml-2">
          { (type === '/watchlist') && <Unwatch id={id} onUnwatch={refetch} /> }
          { (type !== '/watchlist') && <Watch id={id} watched={false} /> }
      </div>
        <div className="text-white font-bold text-sm text-md ml-1 mr-2 truncate">
          {stockName}
        </div>
        <div className="flex items-center mr-2">
          <RateBadge analysis={analysis} />
          <ConcentrationBadge analysis={analysis} />
        </div>
      </div>
      <div className="flex justify-end gap-1 text-xs mr-2 ml-2 mb-1">
        <PriceBadge close={close} diff={diff} diffPercent={diffPercent} />
      </div>
      <div ref={chartContainerRef} id={id} />
    </div>
  );
};

export default Chart;
