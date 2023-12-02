import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { init, dispose, registerStyles } from 'klinecharts';
import './Chart.css';

const Chart = (props) => {
  useEffect(() => {
    const red = '#F92855';
    const green = '#2DC08E';

    const alphaRed = 'rgba(249, 40, 85, .7)';
    const alphaGreen = 'rgba(45, 192, 142, .7)';

    registerStyles('red_rise_green_fall', {
      candle: {
        bar: {
          upColor: red,
          downColor: green,
          upBorderColor: red,
          downBorderColor: green,
          upWickColor: red,
          downWickColor: green,
        },
        priceMark: {
          last: {
            upColor: red,
            downColor: green,
          },
        },
      },
      indicator: {
        ohlc: {
          upColor: alphaRed,
          downColor: alphaGreen,
        },
        bars: [
          {
            style: 'fill',
            borderStyle: 'solid',
            borderSize: 1,
            borderDashedValue: [2, 2],
            upColor: alphaRed,
            downColor: alphaGreen,
            noChangeColor: '#888888',
          },
        ],
        circles: [
          {
            style: 'fill',
            borderStyle: 'solid',
            borderSize: 1,
            borderDashedValue: [2, 2],
            upColor: alphaRed,
            downColor: alphaGreen,
            noChangeColor: '#888888',
          },
        ],
        tooltip: {
          // 'always' | 'follow_cross' | 'none'
          showRule: 'none',
        },
      },
    });

    const chart = init(props.id);

    // configure precision with different price.
    let precision = 2;
    const lastClose = props.data[0].close;
    if (lastClose >= 100 && lastClose < 500) {
      precision = 1;
    } else {
      precision = 0;
    }
    chart.setPriceVolumePrecision(precision, 0);

    chart.createIndicator(
      {
        name: 'VOL',
        calcParams: [],
      },
      false,
      {
        height: 30,
      }
    );
    chart.applyNewData(props.data);
    chart.setStyles('red_rise_green_fall');
    chart.setStyles({
      grid: {
        show: true,
        horizontal: {
          show: true,
          size: 0.5,
          color: '#2B2928',
          style: 'dashed',
          dashedValue: [2, 2],
        },
        vertical: {
          show: true,
          size: 0.5,
          color: '#2B2928',
          style: 'dashed',
          dashedValue: [2, 2],
        },
      },
      yAxis: {
        position: 'right',
        inside: true,
        axisLine: {
          show: true,
          color: '#2B2928',
          size: 0.5,
        },
        tickText: {
          size: 10,
        },
      },
      xAxis: {
        show: true,
        size: 'auto',
        axisLine: {
          show: true,
          color: '#2B2928',
          size: 0.5,
        },
        tickText: {
          size: 10,
        },
      },
      candle: {
        type: 'candle_up_stroke',
        tooltip: {
          showRule: 'none',
        },
        priceMark: {
          last: {
            text: {
              size: 10,
            },
          },
        },
      },
      separator: {
        size: 1,
        color: '#2B2928',
        fill: true,
        activeBackgroundColor: 'rgba(230, 230, 230, .15)',
      },
      crosshair: {
        show: false,
      },
    });

    chart.setZoomEnabled(false);
    chart.setScrollEnabled(false);
    chart.setBarSpace(8);
    chart.setOffsetRightDistance(42);

    return () => {
      dispose(props.id);
    };
  });

  return (
    <div className="stock-container">
      <div className="stock-name">{props.stockName}</div>
      <div className="stock-info">
        <div className="stock-price">{props.close}</div>
        <div className="stock-change">{props.diff}</div>
        <div className="stock-volume">{props.diffPercent}</div>
      </div>
      <div id={props.id} className="chart-container" />
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number.isRequired,
      open: PropTypes.number.isRequired,
      high: PropTypes.number.isRequired,
      low: PropTypes.number.isRequired,
      close: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  stockName: PropTypes.string.isRequired,
  close: PropTypes.number.isRequired,
  diff: PropTypes.string.isRequired,
  diffPercent: PropTypes.string.isRequired,
};

export default Chart;
