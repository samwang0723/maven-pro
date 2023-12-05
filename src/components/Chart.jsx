import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createChart } from 'lightweight-charts';
import Badge from 'react-bootstrap/Badge';
import './Chart.css';

const red = 'rgba(249, 40, 85, 1.0)';
const green = 'rgba(45, 192, 142, 1.0)';
const gridColor = '#1E1E1E';
const CHART_HEIGHT = 200;

function rateBadge(analysis) {
  var result = <Badge bg="secondary"> - </Badge>;
  var count = 0;
  count += analysis.concentration1 > 0 ? 1 : 0;
  count += analysis.concentration5 > 0 ? 1 : 0;
  count += analysis.concentration10 > 0 ? 1 : 0;
  count += analysis.concentration20 > 0 ? 1 : 0;
  count += analysis.concentration60 > 0 ? 1 : 0;

  if (count == 5) {
    result = (
      <Badge bg="warning" text="dark">
        五燈
      </Badge>
    );
  } else if (count == 4) {
    result = <Badge bg="success">四星</Badge>;
  }

  count += analysis.foreign > 0 ? 1 : 0;
  count += analysis.trust > 0 ? 1 : 0;
  count += analysis.foreign10 > 0 ? 1 : 0;
  count += analysis.trust10 > 0 ? 1 : 0;

  if (count == 9) {
    result = <Badge bg="danger">滿貫</Badge>;
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
  data.sort((a, b) => {
    if (a.timestamp < b.timestamp) {
      return -1;
    }
    return 0;
  });

  const chartContainerRef = useRef();

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
          background: { type: 'solid', color: 'black' },
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
          precision: precision,
          formatter: (price) => {
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

      const volumeData = data.map((item) => ({
        time: item.timestamp, // assuming the timestamp is in milliseconds
        value: item.volume,
      }));

      candleSeries.setData(candlestickData);
      volumeSeries.setData(volumeData);

      chart.timeScale().fitContent();

      return () => {
        chart.remove();
      };
    }
  }, [id, data]);

  // price color if diff contains +,use red,otherwise use green
  const priceColor = diff > 0 ? red : green;
  const badge = rateBadge(analysis);
  return (
    <div className="stock-container">
      <div className="stock-title">
        <div className="stock-name">{stockName}</div>
        <div className="stock-analysis">
          {badge}
          {analysis.foreign > 0 ? <Badge bg="primary">外資</Badge> : null}
          {analysis.trust > 0 ? <Badge bg="primary">投信</Badge> : null}
        </div>
      </div>
      <div className="stock-info">
        <div className="stock-price" style={{ color: priceColor }}>
          {close}
        </div>
        <div className="stock-change" style={{ color: priceColor }}>
          {diff}
        </div>
        <div className="stock-percent" style={{ color: priceColor }}>
          {diffPercent}
        </div>
      </div>
      <div ref={chartContainerRef} id={id} />
    </div>
  );
};

Chart.propTypes = {
  input: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      open: PropTypes.number.isRequired,
      high: PropTypes.number.isRequired,
      low: PropTypes.number.isRequired,
      close: PropTypes.number.isRequired,
      tradeShares: PropTypes.string.isRequired,
      turnover: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  stockName: PropTypes.string.isRequired,
  close: PropTypes.number.isRequired,
  diff: PropTypes.number.isRequired,
  diffPercent: PropTypes.string.isRequired,
  analysis: PropTypes.object.isRequired,
};

export default Chart;
