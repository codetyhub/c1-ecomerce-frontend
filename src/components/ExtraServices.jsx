// CardGallery.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

import airlines from "../assets/images/ExtraServices/airlines.png"
import industry from '../assets/images/ExtraServices/indu.png'
import inspection from '../assets/images/ExtraServices/inspection.png'
import product from '../assets/images/ExtraServices/products.png'
import {FaSearch} from 'react-icons/fa';
import {IoMdSend} from "react-icons/io";
import {MdInventory, MdOutlineSecurity} from "react-icons/md";

const CardGallery = () => {
    return (
        <div className='container mx-auto px-[50px]'>
            <h2 className="font-bold py-4 text-xl">Our extra services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img className="w-full lg:h-28 h-40 object-cover object-center z-50" src={industry}
                             alt="airline"/>
                        <div
                            className="flex right-5 bottom-[-30px] absolute items-center border-2 border-white bg-[#D1E7FF] w-14 h-14 rounded-[50%] justify-center">
                            <FaSearch className="cursor-pointer text-black hover:text-blue-700 text-xl"/>
                        </div>
                    </div>
                    <div className="p-7">
                        <p className="text-gray-600">Source from Industry Hubs</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img className="w-full lg:h-28 h-40 object-cover object-center z-50" src={product}
                             alt="airline"/>
                        <div
                            className="flex right-5 bottom-[-30px] absolute items-center border-2 border-white bg-[#D1E7FF] w-14 h-14 rounded-[50%] justify-center">
                            <MdInventory className="cursor-pointer text-black hover:text-blue-700 text-xl"/>
                        </div>
                    </div>
                    <div className="p-7">
                        <p className="text-gray-600">Customize Your Products</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img className="w-full lg:h-28 h-40 object-cover object-center z-50" src={airlines}
                             alt="airline"/>
                        <div
                            className="flex right-5 bottom-[-30px] absolute items-center border-2 border-white bg-[#D1E7FF] w-14 h-14 rounded-[50%] justify-center">
                            <IoMdSend className="cursor-pointer text-black hover:text-blue-700 text-xl"/>
                        </div>
                    </div>
                    <div className="p-7">
                        <p className="text-gray-600">Fast, reliable shipping by ocean or air</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img className="w-full lg:h-28 h-40 object-cover object-center z-50" src={inspection}
                             alt="airline"/>
                        <div
                            className="flex right-5 bottom-[-30px] absolute items-center border-2 border-white bg-[#D1E7FF] w-14 h-14 rounded-[50%] justify-center">
                            <MdOutlineSecurity className="cursor-pointer text-black hover:text-blue-700 text-xl"/>
                        </div>
                    </div>
                    <div className="p-7">
                        <p className="text-gray-600">Product monitoring and inspection</p>
                        <div className="absolute top-[27%]">
                            <button className="text-blue-500 hover:text-blue-700 focus:outline-none"
                                    onClick={() => viewImage('image3.jpg')}>
                                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M20 16V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3zM7 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H7V6zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7h13v7z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardGallery