import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LimitServiceCard from "./LimitServiceCard";

const LimitService = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("https://doctor-server-seven.vercel.app/limitservices")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container">
      <div className="section-title text-center py-5">
                <h1>Services</h1>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. <br />3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
            </div>
      <div className="row">
        {services.map((service) => (
          <LimitServiceCard
            key={service._id}
            service={service}
          ></LimitServiceCard>
        ))}
      </div>
      <div className="button text-center mt-3">
      <Link className="btn btn-primary mx-auto" to="/services">
        View All Services
      </Link>

      </div>
    </div>
  );
};

export default LimitService;
