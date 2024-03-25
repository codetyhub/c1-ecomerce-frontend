import React from "react";

import container from '../assets/images/recommended-items/black-container.png'
import coat from '../assets/images/recommended-items/Blue-sout.png'
import tshirt from '../assets/images/recommended-items/blue-T-shirt.png'
import wallet from '../assets/images/recommended-items/blue-wallet.png'
import jacket from '../assets/images/recommended-items/Brown-jacket.jpeg'
import pot from '../assets/images/recommended-items/brown-pot.png'
import headset from '../assets/images/recommended-items/headset.png'
import jeans from '../assets/images/recommended-items/jeans-bag.png'
import short from '../assets/images/recommended-items/jeans-short.png'

const recommendedItems = () => {
    return (
        <div className="container mx-auto px-[50px]">
            <h2 className="font-bold py-7 text-xl">Recommended items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">


                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={coat} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>$12.50</p>
                            <p className='text-gray-400'>Brown winter coat medium size</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={short} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>$9.99</p>
                            <p className='text-gray-400'>Canon camera  black, 100x zoom</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={tshirt} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>United States</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={wallet} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>Russia</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={jacket} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>Italy</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={pot} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>Denmark</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={headset} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>France</p>
                            <p className='text-gray-400'> shopname.ae</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={jeans} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>Rwanda</p>
                            <p className='text-gray-400'> Kikuu.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={container} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>$10.30</p>
                            <p className='text-gray-400'>T-shirts with multiple colors, for men</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden  py-3">
                    <div className="flex flex-col gap-4 px-4 items-center">
                        <img src={coat} alt="" className='w-40'/>
                        <div className=''>
                            <p className='font-bold'>$12.50</p>
                            <p className='text-gray-400'>Brown winter coat medium size</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default recommendedItems