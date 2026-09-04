import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

// import { useEffect, useState } from "react";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const verifyUser = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:3002/verify", {
  //         withCredentials: true,
  //       });

  //       if (data.success) {
  //         setUsername(data.user.username);
  //       } else {
  //         navigate("/login");
  //       }
  //     } catch (err) {
  //       navigate("/login");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   verifyUser();
  // }, []);

  // const logout = async () => {
  //   try {
  //     await axios.post(
  //       "http://localhost:3002/logout",
  //       {},
  //       {
  //         withCredentials: true,
  //       },
  //     );

  //     window.location.href = "http://localhost:5173/login";
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{/*username*/}</span>
        </h4>

        <button>LOGOUT</button>
      </div>

      <ToastContainer />
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
