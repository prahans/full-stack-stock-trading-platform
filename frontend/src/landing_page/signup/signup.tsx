import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { api, dashboardUrl } from "../../api";

type SignupForm = {
  username: string;
  email: string;
  password: string;
};

const Signup = () => {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>();

  async function onSubmit(data: SignupForm) {
    setServerError("");

    try {
      await api.post("/api/auth/signup", data);
      window.location.assign(dashboardUrl);
    } catch (error) {
      if (axios.isAxiosError(error) && !error.response) {
        setServerError(
          "Unable to reach the sign-in service. Please try again shortly.",
        );
        return;
      }

      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : undefined;
      setServerError(
        typeof message === "string" && message.trim()
          ? message
          : "Unable to sign up. Please try again.",
      );
    }
  }

  return (
    <div className="container mt-4 mb-4 p-3">
      <div className="row p-5">
        <div className="col-3"></div>
        <div className="col-6 p-5">
          <h2 className="mb-3">Signup Account</h2>
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
              {errors.email && (
                <div className="text-danger">{errors.email.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Use at least 8 characters" },
                })}
              />
              {errors.password && (
                <div className="text-danger">{errors.password.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <div className="text-danger">{errors.username.message}</div>
              )}
            </div>
            {serverError && (
              <div className="alert alert-danger">{serverError}</div>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ marginRight: "1rem" }}
            >
              {isSubmitting ? "Creating account..." : "Signup"}
            </button>
            <span>
              Already have an account?{" "}
              {isSubmitting ? (
                <span style={{ opacity: 0.5, cursor: "not-allowed" }}>
                  Login
                </span>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </span>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Signup;
