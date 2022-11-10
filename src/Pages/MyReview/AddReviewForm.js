import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddReviewForm = () => {
  const { _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const photoURL = form.photoURL.value;
    const email = user?.email || "unregistered";
    const displayName = user?.displayName || "User Name";
    const message = form.message.value;

    const review = {
      displayName,
      photoURL,
      rating,
      email,
      service: _id,
      message,
    };

    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json"       
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="container">

      <div className="hero py-10 w-50 m-auto mt-5 shadow">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4">
            <h1 className="text-5xl font-bold text-center">Add New Review</h1>
            <form onSubmit={handleAddReview} className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">User Name:-</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                  defaultValue={user?.displayName}
                  readOnly
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">User Photo URL:-</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                  defaultValue={user?.photoURL}
                  readOnly
                  required
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Write a review:-</span>
                </label>
                <input
                  type="text"
                  name="message"
                  placeholder="Write a review"
                  className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                  required
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Rating:-</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                  required
                />
              </div>

              <div className="mt-6">
                <button className="btn btn-primary" type="submit">
                  Add Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewForm;
