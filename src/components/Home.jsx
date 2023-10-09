import React from 'react';
import Banner from './Banner';
import Collection from './Collection';
import About from './About';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collection></Collection>
            <About></About>
            
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;