import React from 'react';
import useTitle from '../../../hooks/useTitle';
import LimitService from '../../Service/LimitService/LimitService';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Choise from '../Choise/Choise';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <LimitService></LimitService>
            <About></About>
            <Choise></Choise>
        </div>
    );
};

export default Home;