import React from 'react';
import Footer from '../components/Footer';
import ExtraServices from "../components/ExtraServices.jsx";
import SuppliersRegion from "../components/SuppliersRegion.jsx";
import OfferingCard from '../components/Offering';

export default function LandingPage(){
    return (
        <>
            <OfferingCard />
            <ExtraServices/>
            <SuppliersRegion/>
            <Footer/>
        </>
    )
}