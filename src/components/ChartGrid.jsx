import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';
import "./ChartGrid.css";
import useStocksWithHistory from './useStocksWithHistory';

const ChartGrid = ({bearerToken}) => {
  const startDate = "20231001"; // Set the start date for the history search
  const { stocks, loading, error } = useStocksWithHistory(bearerToken, startDate);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render your stocks data or pass it to other components
  // For demonstration purposes, we'll just log it to the console
  console.log(stocks);

  return (
    <div className="grid-container">
      {stocks.map((stock) => (
        <Chart key={stock.StockID} {...stock} />
      ))}
    </div>
  );
};

ChartGrid.propTypes = {
  bearerToken: PropTypes.string.isRequired,
};

export default ChartGrid;
