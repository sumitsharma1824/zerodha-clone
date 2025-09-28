import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Princing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Princing/>
        <Education/>
        <OpenAccount/>
    
        </>
     );
}

export default HomePage;