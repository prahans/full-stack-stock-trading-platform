import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import { frontendUrl, goToLogin } from "../config/appUrls";
import { useCurrentUser } from "../hooks/useCurrentUser";

const Home = () => {
  const { isPending: isCheckingAuth, isError, error } = useCurrentUser();

  useEffect(() => {
    if (
      isError &&
      axios.isAxiosError(error) &&
      error.response?.status === 401
    ) {
      goToLogin(true);
    }
  }, [isError, error]);

  if (isCheckingAuth) {
    return <p className="p-4">Checking authentication...</p>;
  }

  if (isError) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return (
        <p className="p-4" role="status">
          {frontendUrl
            ? "Redirecting to login..."
            : "Sign-in is temporarily unavailable. Please try again later."}
        </p>
      );
    }
  }
  return (
    <>
      <ToastContainer />
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
