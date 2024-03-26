import React from 'react'
import {FaEnvelope} from "react-icons/fa";

const Subscribe = () => {
    return (
        <div className="bg-gray-200 w-screen h-40 grid grid-cols-1">
            <div className="text-center h-6 text-2xl p-5 font-sans font-bold">
                Subscribe to our newsletter
            </div>
            <div className="text-center h-8 text-lg p-0 font-sans text-gray-500">
                Get daily news on upcoming offers from suppliers all over the world
            </div>
            <div className="flex items-center h-8p-1 justify-center space-x-2">
                <div className="relative">
                    <input type="text" placeholder="Email Address"
                           className="pl-8 pr-4 py-2 border border-gray-400 rounded-md outline-none focus:border-blue-500"/>
                    <FaEnvelope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={18}/>
                </div>
                <button
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-600">Subscribe
                </button>
            </div>
        </div>
    );
}

export default Subscribe