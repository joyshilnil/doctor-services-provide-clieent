import React from 'react';

const ServiceCard = ({service}) => {
    
    const {name, price, image} = service;
    return (
        <div>
            <img src={image} alt="" />
            <h1> thid is {name}</h1>
            <h1> price {price}</h1>
            <button className='btn btn-ghost'>View Details</button>
        </div>
    );
};

export default ServiceCard;