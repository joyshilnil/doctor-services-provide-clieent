import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AddReview = () => {
  const { _id } = useLoaderData();


  return (
    <div className="shadow p-2 rounded">
      <Link to={`/addreviewform/${_id}`}>
        <button className="btn btn-primary">Add Review</button>
      </Link>
    </div>
  );
};

export default AddReview;
