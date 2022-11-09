import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/services")
        .then((res) => res.json())
        .then((data) => setService(data));
    }, []);

    console.log(services);
    return (
        <div>
            <h1>This is services</h1>
            {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
        </div>
    );
};

export default Services;