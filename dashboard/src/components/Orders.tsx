import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type orders = {
  name: string;
  qty: number;
  price: number;
  mode: string;
};

const Orders = () => {
  const [allOrders, setAllOrders] = useState<orders[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      {!allOrders.length && (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      )}

      {allOrders.length && (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>

              {allOrders.map((stock, index) => {
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price}</td>
                    <td>{stock.mode}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Orders;
