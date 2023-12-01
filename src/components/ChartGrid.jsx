import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';
import "./ChartGrid.css";

const ChartGrid = ({stocks}) => {
  return (
    <div className="grid-container">
      {stocks.map((stock) => (
        <Chart key={stock.id} {...stock} />
      ))}
    </div>
  );
};

ChartGrid.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChartGrid;
