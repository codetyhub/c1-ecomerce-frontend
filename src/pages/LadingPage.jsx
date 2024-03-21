import React from 'react';
import Footer from '../components/Footer';
import ExtraServices from "../components/ExtraServices.jsx";
import SuppliersRegion from "../components/SuppliersRegion.jsx";

export default function LandingPage() {
    return (
        <>
            <ExtraServices/>
            <SuppliersRegion/>
            <Footer/>
        </>
    )
}