import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import SingleReview from "./SingleReview";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://doctor-server-seven.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this review"
    );
    if (proceed) {
      fetch(`https://doctor-server-seven.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className="container">
      <h1 className="py-4 text-primary text-center">
        {reviews.length
          ? `Total Review ${reviews.length}`
          : "No reviews were added"}
      </h1>

      <div className="row">
        {reviews.map((review) => (
          <SingleReview
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
