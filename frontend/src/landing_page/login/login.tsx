import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { api, dashboardUrl } from "../../api";

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  async function onSubmit(data: LoginForm) {
    setServerError("");

    try {
      await api.post("/api/auth/login", data);
      window.location.assign(dashboardUrl);
    } catch (error) {
      if (axios.isAxiosError(error) && !error.response) {
        setServerError("Unable to reach the sign-in service. Please try again shortly.");
        return;
      }

      const message = axios.isAxiosError(error) ? error.response?.data?.message : undefined;
      setServerError(
        typeof message === "string" && message.trim()
          ? message
          : "Unable to log in. Please try again.",
      );
    }
  }

  return (
    <div className="container mt-4 mb-4 p-3">
      <div className="row p-5">
        <div className="col-3"></div>
        <div className="col-6 p-5">
          <h2 className="mb-3">Login Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <div className="text-danger">{errors.email.message}</div>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <div className="text-danger">{errors.password.message}</div>
              )}
            </div>
            {serverError && <div className="alert alert-danger">{serverError}</div>}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ marginRight: "1rem" }}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
            <span>
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Login;
