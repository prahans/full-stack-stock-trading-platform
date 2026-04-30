import { Route, Routes } from "react-router-dom";
// import { GeneralContextProvider } from "../context/GeneralContext";

import Apps from "./Apps.tsx";
import Funds from "./Funds.tsx";
import Holdings from "./Holdings.tsx";

import Orders from "./Orders.tsx";
import Positions from "./Positions.tsx";
import Summary from "./Summary.tsx";
import WatchList from "./WatchList.tsx";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}
      <WatchList />
      {/* </GeneralContextProvider> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
