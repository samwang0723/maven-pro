import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';
import "./ChartGrid.css";
import pickedStocks from './pickedStocks';

const ChartGrid = ({bearerToken}) => {
  const startDate = "20231001"; // Set the start date for the history search
  const { stocks, loading, error } = pickedStocks(bearerToken, startDate);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
