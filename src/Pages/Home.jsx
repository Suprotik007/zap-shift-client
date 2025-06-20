import React from 'react';
import Banner from '../Components/Banner';
import Services from '../Components/services/Services';
import ClientLogosMarquee from '../Components/ClientLogosMarquee';
import Benefits from '../Components/Benefits/Benefits';
import BeMerchant from '../Components/BeMerchant';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <ClientLogosMarquee></ClientLogosMarquee>
           <Benefits></Benefits>
           <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;