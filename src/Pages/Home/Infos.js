import React from 'react';
import InforCard from './InforCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Infos = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 text-white'>
            <InforCard cardTitle='Opening Hours' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InforCard>
            <InforCard cardTitle='Our Location' bgClass='bg-accent' img={marker}></InforCard>
            <InforCard cardTitle='Contact Us' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InforCard>
        </div>
    );
};

export default Infos;