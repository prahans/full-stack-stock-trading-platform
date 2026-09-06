import { useEffect, useState } from "react";
import { goToLogin } from "./appUrls";
import { api } from "../api/api";
import type { CurrentUser } from "./Home";

const Summary = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await api.get("/api/auth/me");

        setCurrentUser(response.data.user);
      } catch {
        setCurrentUser(null);
        goToLogin(true);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    fetchCurrentUser();
  }, []);

  if (isCheckingAuth || !currentUser) {
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
