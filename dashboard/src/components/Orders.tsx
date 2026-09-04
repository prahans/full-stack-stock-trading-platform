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
    axios.get("http://localhost:3000/api/dashboard/allOrders").then((res) => {
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
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>

              {allOrders.map((stock, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td>{stock.mode}</td>
                    </tr>
                  </tbody>
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
