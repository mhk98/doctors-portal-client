import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import DentalCare from './DentalCare';
import Footer from '../Shared/Footer';
import Infos from './Infos';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Infos></Infos>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;