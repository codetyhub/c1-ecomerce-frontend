import {useState} from "react";
import Mobile_Accessories from "../components/Mobile_Accessories";
import {BiMenu} from "react-icons/bi";
import {CgLayoutGrid} from "react-icons/cg";
import Categories from "../components/Categories.jsx";
import ProductGridView from "../components/ProductGridView.jsx";

export default function ProductsPage() {
    const [view, setProductView] = useState(false);
    const [icon, setViewIcon] = useState(false);
    const SetView = ()=>{
        setProductView(!view)
        setViewIcon(!icon)

    }

    return (
        <>
            <div className="container mx-auto px-[50px] flex flex-col md:flex-row h-auto">
                 <Categories />
                <main className="flex-1 lg:p-5 px-3 py-3 bg-gray-200">
                    <div className="bg-white p-5 rounded-lg flex justify-between items-center">

                        <p>12,911 items in Mobile accessory</p>
                        <div className="flex flex-row ">
                            <div className="flex flex-row items-center">
                                <button
                                    className="mx-1 bg-white text-black font-bold text-xs h-5 w-5 py-0.5 px-2 mt-2 mb-2 rounded-md border border-gray-500"></button>
                                <p className="ml-1">verified only</p>
                            </div>

                            <button
                                className="mx-1 bg-white text-black semi-bold py-2 px-4 rounded-lg border border-gray-300">
                                featured
                            </button>
                            <div className="flex border rounded-lg items-center">
                                {icon ? <BiMenu size={30} onClick={SetView}/>:<CgLayoutGrid size={30} onClick={SetView}/>}
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        {view ? <Mobile_Accessories/> : <ProductGridView/>}

                    </div>

                </main>
            </div>

        </>
    );
}