import React from 'react';
import Banner from '../Components/Banner';
import Services from '../Components/services/Services';
import ClientLogosMarquee from '../Components/ClientLogosMarquee';
import Benefits from '../Components/Benefits/Benefits';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <ClientLogosMarquee></ClientLogosMarquee>
           <Benefits></Benefits>
        </div>
    );
};

export default Home;