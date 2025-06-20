import React from 'react';
import Banner from '../Components/Banner';
import Services from '../Components/services/Services';
import ClientLogosMarquee from '../Components/ClientLogosMarquee';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <ClientLogosMarquee></ClientLogosMarquee>
        </div>
    );
};

export default Home;