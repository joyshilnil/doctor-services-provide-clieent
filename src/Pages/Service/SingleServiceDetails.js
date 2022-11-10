import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import AddReview from "../MyReview/AddReview";
import ShowReview from "../MyReview/ShowReview";

const SingleServiceDetails = () => {
  const { name, price, rating, image, body } = useLoaderData();
  useTitle("Service Details");
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 shadow p-4 rounded mb-3">
          <img src={image} className="img-fluid" alt="" />
          <h1 className="text-primary">Service Name:- {name}</h1>
          <div className="rating">
            <h5>Price:- ${price}</h5>
            <h5>Rating:- {rating}</h5>
          </div>
          <p>{body}</p>
        </div>
        <div className="col-lg-4">
          <ShowReview></ShowReview>
          <AddReview></AddReview>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceDetails;
