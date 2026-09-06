import { Link } from "react-router-dom";
import { goToLogin } from "../config/appUrls";
import { useOrders } from "../hooks/useOrders";

const Orders = () => {
  const { data: allOrders, isPending, isError, error } = useOrders();

  if (isPending) {
    return <h2>Loading orders...</h2>;
  }

  if (isError) {
    return (
      <>
        <h2>{error.message}</h2>
        <button onClick={() => goToLogin()}>Go to Login</button>
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
