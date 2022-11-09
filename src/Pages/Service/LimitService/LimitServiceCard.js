import React from 'react';

const LimitServiceCard = ({service}) => {
    
    const {name, price, image} = service;
    console.log(service);
    return (
        <div>
            <img src={image} alt="" />
            <h1> thid is {name}</h1>
            <h1> price {price}</h1>
            
        </div>
    );
};

export default LimitServiceCard;