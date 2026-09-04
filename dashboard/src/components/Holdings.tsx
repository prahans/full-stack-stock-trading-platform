import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "./api";
import { goToLogin } from "./appUrls";
import { VerticalGraph, type VerticalGraphData } from "./VerticalGraph";

type holdings = {
  name: string;
  qty: number;
  avg: number;
  price: number;
  net: string;
  day: string;
  isLoss?: boolean;
};

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState<holdings[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await api.get("/api/dashboard/allHoldings");

        setAllHoldings(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || "Failed to load holdings.");
        } else {
          setError("Something went wrong.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <h2>Loading posts...</h2>;
  }

  if (error) {
    return (
      <>
        <h2>{error}</h2>
        <button onClick={() => goToLogin()}>Go to Login</button>
      </>
    );
  }

  const labels = allHoldings.map((subArray) => subArray["name"]);
  const data: VerticalGraphData = {
    labels,
    datasets: [
      {
        label: "Current value",
        data: allHoldings.map((stock) => stock.price * stock.qty),
        backgroundColor: allHoldings.map((stock) =>
          stock.price >= stock.avg
            ? "rgba(38, 166, 154, 0.3)"
            : "rgba(239, 83, 80, 0.3)",
        ),
        borderColor: allHoldings.map((stock) =>
          stock.price >= stock.avg ? "rgb(38, 166, 154)" : "rgb(239, 83, 80)",
        ),
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "lose";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tbody key={index}>
                <tr>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
