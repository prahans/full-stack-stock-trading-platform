import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { frontendUrl, goToLogin } from "./appUrls";
import { api } from "./api";
import type { CurrentUser } from "./Home";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [error, setError] = useState("");
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

  const handleLogout = async () => {
    try {
      await api.post("/api/auth/logout");

      setCurrentUser(null);
      if (!goToLogin()) {
        window.location.reload();
      }
    } catch {
      setError("Failed to log out. Please try again.");
    }
  };

  if (isCheckingAuth) {
    return <p className="p-4">Checking authentication...</p>;
  }

  if (!currentUser) {
    return (
      <p className="p-4" role="status">
        {frontendUrl
          ? "Redirecting to login..."
          : "Sign-in is temporarily unavailable. Please try again later."}
      </p>
    );
  }
  const handleMenuClick = (index: number) => {
    setSelectedMenu(index);
  };

  if (error) {
    return (
      <>
        <h2>{error}</h2>
        {frontendUrl && <button onClick={() => goToLogin()}>Go to Login</button>}
      </>
    );
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <button
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            border: "2px solid #f0f0f0",
            marginLeft: "15px",
          }}
          onClick={handleLogout}
        >
          logout
        </button>
        <div className="profile">
          <div className="avatar">
            {currentUser?.username.slice(0, 2).toUpperCase() || "ZU"}
          </div>
          <p className="username">
            {currentUser?.username.toUpperCase() || "USERID"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
