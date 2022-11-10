import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        form.reset();
        handleUpdateUserProfile(name, photoURL);  
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };


  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch(error => console.error(error));
}

useTitle('Register')

  return (
    <div className="hero py-10 w-50 m-auto mt-5 shadow">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name:-</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Photo URL:-</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email:-</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered  w-100 p-2 mt-2 rounded mb-2"
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
                placeholder="password"
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                required
              />
            </div>
            <div className="mt-6">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center">
            Already Have a account{" "}
            <Link to="/login" className="text-danger">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
