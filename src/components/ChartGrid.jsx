import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';
import "./ChartGrid.css";
import pickedStocks from '../api/pickedStocks';

function getDateTwoMonthsAgo() {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 2);

  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);

  return `${year}${month}${day}`;
}

const ChartGrid = ({bearerToken}) => {
  const startDate = getDateTwoMonthsAgo(); // Set the start date for the history search
  const { stocks, loading, error } = pickedStocks(bearerToken, startDate);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid-container">
      {stocks.map((stock) => (
        console.log(stock),
        <Chart key={stock.id} {...stock} />
      ))}
    </div>
  );
};

ChartGrid.propTypes = {
  bearerToken: PropTypes.string.isRequired,
};

export default ChartGrid;
