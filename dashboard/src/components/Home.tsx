import Dashboard from "./Dashboard";
import { api } from "../api/api";
import TopBar from "./TopBar";

import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { frontendUrl, goToLogin } from "./appUrls";

export type CurrentUser = {
  id: string;
  username: string;
  email: string;
};

const Home = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [authError, setAuthError] = useState("");
  const [authAttempt, setAuthAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const fetchCurrentUser = async () => {
      try {
        const response = await api.get("/api/auth/me");
        if (cancelled) return;

        setCurrentUser(response.data.user);
        toast.success(
          "Logged in successfully. Welcome back " +
            response.data.user.username +
            "!",
          {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: true,
            theme: "light",
          },
        );
      } catch (error) {
        if (cancelled) return;

        setCurrentUser(null);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          goToLogin(true);
        } else {
          setAuthError(
            "Unable to check your session. Please try again shortly.",
          );
        }
      } finally {
        if (!cancelled) setIsCheckingAuth(false);
      }
    };

    fetchCurrentUser();
    return () => {
      cancelled = true;
    };
  }, [authAttempt]);

  if (isCheckingAuth) {
    return <p className="p-4">Checking authentication...</p>;
  }

  if (authError) {
    return (
      <div className="p-4">
        <p role="alert">{authError}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setAuthError("");
            setIsCheckingAuth(true);
            setAuthAttempt((attempt) => attempt + 1);
          }}
        >
          Try again
        </button>
      </div>
    );
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

  return (
    <>
      <ToastContainer />
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
