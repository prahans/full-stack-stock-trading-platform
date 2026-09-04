import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

type orders = {
  name: string;
  qty: number;
  price: number;
  mode: string;
};

const Orders = () => {
  const [allOrders, setAllOrders] = useState<orders[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await axios.get(
          "http://localhost:3000/api/dashboard/allOrders",
        );

        setAllOrders(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || "Failed to load orders.");
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
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </>
    );
  }

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
