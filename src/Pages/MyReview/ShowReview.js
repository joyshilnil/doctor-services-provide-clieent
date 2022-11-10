import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleShowReview from "./SingleShowReview";

const ShowReview = () => {
  const serviec = useLoaderData();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://doctor-server-seven.vercel.app/review?serviceId=${serviec?._id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [serviec?._id]);
  console.log(reviews);

  return (
    <div>
        <h1>Review {reviews.length}</h1>
        {reviews.map((review) => (
          <SingleShowReview
            key={review._id}
            review={review}
          ></SingleShowReview>
        ))}
    </div>
  );
};

export default ShowReview;
