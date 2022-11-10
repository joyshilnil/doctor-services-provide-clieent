import React from "react";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import "./SingleRevoew.css";

const SingleReview = ({ review, handleDelete }) => {
  const { _id, displayName, rating, photoURL, message } = review;
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/reviews/edit/${id}`);
  };

  useTitle("My Review");
  return (
    <div className="col-lg-4 shadow p-4 text-center rounded mb-3">
      <img src={photoURL} className="user-image" title="" alt="" />
      <p className="m-0">"{message}"</p>
      <h3 className="text-primary">{displayName}</h3>
      <small className="font-cond case-u lts-sm fs-80 fg-text-l">
        Rating: {rating}
      </small>
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-primary" onClick={() => handleEdit(_id)}>
          Edit
        </button>
        <button
          className="btn btn-danger text-white"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleReview;
