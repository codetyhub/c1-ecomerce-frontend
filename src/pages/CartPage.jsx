import React from "react";
import MyCart from "../components/MyCart";
import SavedForLater from "../components/SavedForLater";
import PrimaryNav from "../components/PrimaryNav.jsx";
import SecondaryNav from "../components/SecondaryNav.jsx";
import Footer from '../components/Footer';

export default function CartPage() {
    return(
        <>
            <PrimaryNav />
            <SecondaryNav />
            <MyCart />
            <SavedForLater/>
            <Footer/>
        </>
    )
}