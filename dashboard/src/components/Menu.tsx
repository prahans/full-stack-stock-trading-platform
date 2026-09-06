import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { goToLogin } from "../config/appUrls";
import { useLogout } from "../hooks/useLogout";
import { useCurrentUser } from "../hooks/useCurrentUser";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const {
    data: currentUser,
    isPending: isCheckingAuth,
    isError,
    error,
  } = useCurrentUser();

  const {
    mutate: logout,
    isPending: isLoggingOut,
    isError: isLogoutError,
  } = useLogout();

  if (isCheckingAuth) {
    return <p className="p-4">Checking authentication...</p>;
  }

  if (isError && axios.isAxiosError(error) && error.response?.status === 401) {
    goToLogin(true);

    return <p className="p-4">Redirecting to login...</p>;
  }

  if (isError) {
    return (
      <h2 role="alert">
        Unable to check your session. Please try again shortly.
      </h2>
    );
  }

  if (!currentUser) {
    return <p className="p-4">Redirecting to login...</p>;
  }

  const handleMenuClick = (index: number) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      {isLogoutError && (
        <p role="alert">Failed to log out. Please try again.</p>
      )}
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
          onClick={() => logout()}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
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
