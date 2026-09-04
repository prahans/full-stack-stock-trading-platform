import { useState, useContext } from "react";
import { watchlist } from "../data/data";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { DoughnoutChart } from "./DoughnoutChart";

type stockProps = {
  name: string;
  price: number;
  percent: string;
  isDown: boolean;
};

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnoutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }: { stock: stockProps }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);
  const handleMouseEnter = () => {
    setShowWatchListActions(true);
  };
  const handleMouseExit = () => {
    setShowWatchListActions(false);
  };

  return (
    <li
      onMouseDown={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseExit()}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>{" "}
          {stock.isDown ? (
            <i className="fa-solid fa-angle-down down"></i>
          ) : (
            <i className="fa-solid fa-angle-up up"></i>
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }: { uid: string }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
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
