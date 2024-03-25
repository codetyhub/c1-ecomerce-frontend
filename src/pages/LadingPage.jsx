import React from "react";
import Footer from "../components/Footer";
import OfferingCard from "../components/Offering";
import Categoriescard from "../components/Categoriescard";

export default function LandingPage() {
  return (
    <>
      <Categoriescard />
      <OfferingCard />
      <Footer />
    </>
  );
}
