import Dashboard from "./Dashboard";
import { api } from "./api";
import TopBar from "./TopBar";

import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { goToLogin } from "./appUrls";

export type CurrentUser = {
  id: string;
  username: string;
  email: string;
};

const Home = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await api.get("/api/auth/me");

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
      <ToastContainer />
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
