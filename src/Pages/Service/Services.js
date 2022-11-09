import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  useTitle('Services')



  console.log(services);
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
      <div className="row">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
