import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://doctor-server-seven.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      });
  }, []);

  useTitle("Services");

  // console.log(services);
  return (
    <div className="container">
      <div className="section-title text-center py-5">
        <h1>All Services</h1>
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. <br />3 wolf moon officia aute, non
          cupidatat skateboard dolor brunch.
        </p>
      </div>
      {loading ? (
        <>
          <Spinner animation="border" variant="primary" />
        </>
      ) : (
        <>
          <div className="row">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
