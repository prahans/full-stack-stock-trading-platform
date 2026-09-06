import { goToLogin } from "../config/appUrls";
import { usePositions } from "../hooks/usePositions";

const Positions = () => {
  const { data: allPositions, isPending, isError, error } = usePositions();

  if (isPending) {
    return <h2>Loading positions...</h2>;
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
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "lose";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tbody key={index}>
                <tr>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
