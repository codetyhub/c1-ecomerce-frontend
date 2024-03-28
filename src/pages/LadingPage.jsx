import React from "react";
import Footer from "../components/Footer";
import OfferingCard from "../components/Offering";
import HomeAndOutdoors from '../components/HomeAndOutdoors';
import Categoriescard from "../components/Categoriescard";
import ExtraServices from "../components/ExtraServices.jsx";
import SuppliersRegion from "../components/SuppliersRegion.jsx";
import Subscribe from '../components/subscribe';
import Supplier from '../components/Supplier.jsx'

export default function LandingPage(){
    return (
        <>
            <Categoriescard/>
            <OfferingCard/>
            <HomeAndOutdoors/>
            <Supplier />
            <ExtraServices/>
            <SuppliersRegion/>
            <Subscribe/>
            <Footer/>
        </>
    )
}