import {BiGrid, BiMenu} from "react-icons/bi";
import {CgLayoutGrid} from "react-icons/cg";

export default function ProductsPage() {
    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-gray-100">
                <aside className="bg-gray-100 w-full md:w-64 flex-shrink-0">
                    <div className="p-4 ">
                        <h4 className="font-bold">Category</h4>
                    </div>
                    <nav>
                        <ul className="py-2 flex flex-col gap-4">
                            <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                                <a href="#" className="block">Mobile accessory</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                                <a href="#" className="block">Electronics</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                                <a href="#" className="block">Smartphones </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                                <a href="#" className="block">Modern tech</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700 text-blue-600 flex items-center gap-2">
                                <a href="#" className="block">See all</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 p-5 py-3 bg-gray-200 h-full">
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
                                <BiGrid size={26}/>
                                <BiMenu size={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg mt-4">


                    </div>

                </main>
            </div>
        </>
    )
}