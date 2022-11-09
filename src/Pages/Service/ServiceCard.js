import React from "react";

const ServiceCard = ({ service }) => {
  const { name, price, image, rating, body } = service;
  return (
    <div className="col-lg-4 mb-3">
      <div className="limit-service-all-content shadow p-3 rounded">
        <div className="service-img">
          <img src={image} alt=""  className="img-fluid w-100" style={{ height: '20rem' }} />
        </div>
        <div className="service-details">
          <h3 className="text-primary">{name}</h3>
          <p>{body.slice(0, 100) + '.....'}</p>
          <h6> Price ${price}</h6>
          <h6>Rating{rating}</h6>

          <button className="btn btn-success mt-3">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
