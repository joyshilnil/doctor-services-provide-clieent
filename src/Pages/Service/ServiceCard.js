import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, price, image, rating, body } = service;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-lg-4 mb-3">
      <div className="limit-service-all-content shadow p-3 rounded">
        <div className="service-img cursor-pointer" onClick={handleShow}>
          <img
            role="button"
            src={image}
            alt=""
            className="img-fluid w-100"
            style={{ height: "20rem" }}
          />
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={image} alt="" className="img-fluid w-100" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="service-details">
          <h3 className="text-primary">{name}</h3>
          <p>{body.slice(0, 100) + "....."}</p>
          <h6> Price ${price}</h6>
          <h6>Rating {rating}</h6>

          <Link to={`/services/${_id}`}>
            <button className="btn btn-success mt-3">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
