import React from 'react';

const SingleShowReview = ({ review }) => {
    const { displayName, rating, photoURL, message } = review;
    return (
        <div className="shadow p-4 text-center rounded mb-3">
      <img src={photoURL} className="user-image" title="" alt="" />
      <p className="m-0">"{message}"</p>
      <h3 className="text-primary">{displayName}</h3>
      <small className="font-cond case-u lts-sm fs-80 fg-text-l">
        Rating: {rating}
      </small>
    </div>
    );
};

export default SingleShowReview;