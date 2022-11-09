import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LimitServiceCard from "./LimitServiceCard";

const LimitService = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/limitservices")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      {services.map((service) => (
        <LimitServiceCard key={service._id} service={service}></LimitServiceCard>
      ))}
      <Link className='btn btn-primary' to='/services'>View All Services</Link>
    </div>
  );
};

export default LimitService;
