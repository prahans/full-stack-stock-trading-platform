import Dashboard from "./Dashboard";
import { api } from "./api";
import TopBar from "./TopBar";

// import { useEffect, useState } from "react";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { goToLogin } from "./appUrls";

export type CurrentUser = {
  id: string;
  username: string;
  email: string;
};

const Home = () => {
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

      goToLogin();
    } catch {
      setError("Failed to log out. Please try again.");
    }
  };

  if (isCheckingAuth || !currentUser) {
    return <p className="p-4">Checking authentication...</p>;
  }

  if (error) {
    return (
      <>
        <h2>{error}</h2>
        <button onClick={() => goToLogin()}>Go to Login</button>
      </>
    );
  }

  return (
    <>
      <div
        className="home_page"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>
          Welcome <span>{currentUser?.username}</span>
        </h4>

        <button onClick={handleLogout}>LOGOUT</button>
      </div>

      <ToastContainer />
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
