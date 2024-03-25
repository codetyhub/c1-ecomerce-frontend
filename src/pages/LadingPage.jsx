import React from "react";
import OfferingCard from "../components/Offering";
import Categoriescard from "../components/Categoriescard";
import ExtraServices from "../components/ExtraServices.jsx";
import SuppliersRegion from "../components/SuppliersRegion.jsx";
import Supplier from "../components/Supplier.jsx";
import Footer from "../components/Footer.jsx";

export default function LandingPage() {
    return (
        <>
            <Categoriescard/>
            <OfferingCard/>
            <ExtraServices/>
            <Supplier/>
            <SuppliersRegion/>
            <Footer/>
        </>
    )
}