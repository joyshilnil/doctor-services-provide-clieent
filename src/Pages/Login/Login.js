import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const Login = () => {
  const { login, providerLogin, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Thank you login.");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.error(error)
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useTitle('Login')
  return (
    <div className="hero py-10 w-50 m-auto mt-5 shadow">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control  mb-4">
              <label className="label">
                <span className="label-text">Email:-</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password:-</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                required
              />
            </div>
            <div className="mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to my website please
            <Link to="/register" className="text-danger">
              {" "}
              Sign Up
            </Link>
          </p>
          <p className="text-primary text-center m-0">OR</p>
          <h3 className="text-center text-danger mt-2 p-0">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-light border-0 text-primary fs-4 pt-2 ps-4 pe-4 pb-3"
            >
              <FaGoogle></FaGoogle>
            </button>
          </h3>
        </div>
        <p className="text-danger">{error}</p>
      </div>
    </div>
  );
};

export default Login;
