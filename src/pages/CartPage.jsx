import React from "react";
import MyCart from "../components/MyCart";
import Footer from "../components/Footer";
import PrimaryNav from "../components/PrimaryNav";

export default function CartPage() {
    return(
        <>  <PrimaryNav />
            <MyCart />
            <Footer />
        </>
    )
}