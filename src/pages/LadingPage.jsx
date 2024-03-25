import React from "react";
import Footer from "../components/Footer";
import OfferingCard from "../components/Offering";
import Categoriescard from "../components/Categoriescard";
import ExtraServices from "../components/ExtraServices.jsx";
import SuppliersRegion from "../components/SuppliersRegion.jsx";
export default function LandingPage(){
    return (
      <>
          <Categoriescard />
        <OfferingCard />
          <ExtraServices/>
            <SuppliersRegion/>
        <Footer />
       </>
    )
}