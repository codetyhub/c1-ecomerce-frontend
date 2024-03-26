import React from "react";
import arbs from '../assets/images/SuppliersRegion/Flag_of_the_United_Arab_Emirates.svg'
import australia from "../assets/images/SuppliersRegion/australia-svgrepo-com.svg"
import us from "../assets/images/SuppliersRegion/usa-svgrepo-com.svg"
import russia from "../assets/images/SuppliersRegion/russia-svgrepo-com.svg"
import italy from "../assets/images/SuppliersRegion/italy-svgrepo-com.svg"
import denmark from "../assets/images/SuppliersRegion/denmark-svgrepo-com.svg"
import france from "../assets/images/SuppliersRegion/france-svgrepo-com.svg"
import rwanda from "../assets/images/SuppliersRegion/flag-for-flag-rwanda-svgrepo-com.svg"
import china from "../assets/images/SuppliersRegion/china-svgrepo-com.svg"
import britain from '../assets/images/SuppliersRegion/united-kingdom-uk-svgrepo-com.svg'
// import 'react-flags-select/css/react-flags-select.css';
const SuppliersRegion = () => {
    return (
        <div className="container mx-auto px-[50px]">
            <h2 className="font-bold py-7 text-xl">Suppliers by region</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={arbs} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>Arabic Emirates</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={australia} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>Australia</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={us} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>United States</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={russia} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>Russia</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={italy} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>Italy</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={denmark} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>Denmark</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={france} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>France</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={rwanda} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>Rwanda</p>
                            <p className='text-gray-400'> Kikuu.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={us} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>United States</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex gap-4 justify-center items-center">
                        <img src={britain} alt="" className='w-12 h-8 object-cover'/>
                        <div className='flex flex-col justify-center'>
                            <p className='font-bold'>Great Britain</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuppliersRegion