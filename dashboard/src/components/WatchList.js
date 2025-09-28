import React, { useState, useContext, useMemo } from 'react';

// Chart.js imports
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register chart elements

// Material UI imports
import { Tooltip, Grow } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

// Data & context
import { watchlist } from '../data/data';
import GeneralContext from "./GeneralContext";

ChartJS.register(ArcElement, ChartTooltip, Legend);
const WatchList = () => {
  // Labels for chart
  const labels = useMemo(() => watchlist.map(stock => stock.name), []);

  // Chart data memoized to prevent re-render issues
  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map(stock => stock.price), // numerical values
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }), [labels]);

  return (
    <div className='WatchList-container'>
      <div className='search-container'>
        <input
          type="text"
          id='search'
          name='search'
          placeholder='Search eg: INFY, BSE, NIFTY, FUT weekly, gold MCX'
          className='search'
        />
        <span className='counts'>{watchlist.length}/50</span>
      </div>

      <ul className='list'>
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
        <Doughnut data={data} />

    </div>
  );
};

export default WatchList;

// ---------------- WatchListItem Component ----------------
const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className='item'>
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className='itemInfo'>
          <span className='percent'>{stock.percent}</span>
          {stock.isDown
            ? <KeyboardArrowDown className='down' />
            : <KeyboardArrowUp className='up' />}
          <span className='price'>{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// ---------------- WatchListActions Component ----------------
const WatchListActions = ({ uid }) => {
  const { openBuyWindow, closeBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => openBuyWindow(uid)}>
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={() => closeBuyWindow()}>
            Sell
          </button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
