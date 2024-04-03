import React from 'react';
import Footer from '../components/Footer';
import OfferingCard from "../components/Offering";
import HomeAndOutdoors from '../components/HomeAndOutdoors';
import Categoriescard from "../components/Categoriescard";
import RecommendedItems from "../components/Recommended-items.jsx";
import ExtraServices from "../components/ExtraServices.jsx";
import SuppliersRegion from "../components/SuppliersRegion.jsx";
import Subscribe from '../components/Subscribe.jsx';
import PrimaryNav from "../components/PrimaryNav.jsx";
import SecondaryNav from "../components/SecondaryNav.jsx";

export default function LandingPage(){
    return (
        <>
            <PrimaryNav />
            <SecondaryNav />
            <Categoriescard/>
            <OfferingCard/>
            <HomeAndOutdoors/>
            <RecommendedItems />
            <ExtraServices/>
            <SuppliersRegion/>
            <Subscribe/>
            <Footer/>
        </>
    )
}