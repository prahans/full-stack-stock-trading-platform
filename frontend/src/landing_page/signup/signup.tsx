import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: {
    username: string;
    email: string;
    password: string;
  }) {
    console.log(data);
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
                {...register("password", { required: "Password is required" })}
              />
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
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginRight: "1rem" }}
            >
              Submit
            </button>
            <span>
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Signup;
