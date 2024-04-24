import PrimaryNav from "../components/PrimaryNav"
import SecondaryNav from "../components/SecondaryNav"
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return(
        <>
            <PrimaryNav/>
            <SecondaryNav/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainLayout