import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from './Dashboard';
import TopBar from "./TopBar";
import App from "./App";
import Funds from "./Funds";
import Holding from "./Holding";

import Order from "./Order";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/order" element={<Order />} />
          <Route path="/holding" element={<Holding />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
