import Dashboard from "./Dashboard";
import { api } from "./api";
import TopBar from "./TopBar";

// import { useEffect, useState } from "react";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type CurrentUser = {
  id: string;
  username: string;
  email: string;
};

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await api.get("/api/auth/me");

        setCurrentUser(response.data.user);
      } catch {
        setCurrentUser(null);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/api/auth/logout");

      navigate("/login");
    } catch {
      setError("Failed to log out. Please try again.");
    }
  };

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
      <div className="home_page">
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
