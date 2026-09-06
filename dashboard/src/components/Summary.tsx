import { goToLogin } from "../config/appUrls";
import { useCurrentUser } from "../hooks/useCurrentUser";
import axios from "axios";

const Summary = () => {
  const { data: currentUser, isPending, isError, error } = useCurrentUser();

  if (isError && axios.isAxiosError(error) && error.response?.status === 401) {
    goToLogin(true);

    return <p className="p-4">Redirecting to login...</p>;
  }

  if (isPending || !currentUser) {
    return <p className="p-4">Checking authentication...</p>;
  }

  return (
    <>
      <div className="username">
        <h6>Hi, {currentUser?.username}</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
