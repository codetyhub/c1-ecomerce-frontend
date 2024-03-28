import React from 'react';
import { MdMessage, MdAccountBox } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import logocolored from '../assets/images/logocolored.svg';

const PrimaryNav = () => {
  return (
    <div className="flex justify-between px-3 lg:px-12 py-3 shadow-sm relative">
      {/* Logo container */}
      <div>
        <img src={logocolored} alt="Logo" />
      </div>
      {/* Search, Filter, and Search Button */}
      <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
        {/* Search */}
        <div>
          <input
            type="search"
            placeholder="Search"
            className="py-2 px-3 outline-none w-full lg:w-80 h-10"
            style={{
              border: 'solid 2px rgb(60, 131, 255)',
              borderRadius: '12px',
            }}
          />
        </div>
        {/* Filter */}
        <div>
          <select
            name="categories"
            id="categories"
            className="py-2 w-full lg:w-72 border-blue h-10"
            style={{
              border: 'solid 2px rgb(60, 131, 255)',
            }}
          >
            <option value="All category">All Category</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
          </select>
        </div>
        {/* Search Button */}
        <div>
          <button className="text-white bg-blue-500 py-2 rounded-r-md px-3 text-semi-bold h-10">
            Search
          </button>
        </div>
      </div>
      {/* Links and Profiles */}
      <div className="flex gap-4 hidden lg:flex items-center">
        <div className="justify-center flex flex-col items-center">
          <MdAccountBox className="text-gray-500 bg-white" size={20}/>
          <h1 className="text-gray-400">Profile</h1>
        </div>
        <div className="justify-center flex flex-col items-center">
          <MdMessage className="text-gray-500 bg-white" size={20}/>
          <h1 className="text-gray-400">Message</h1>
        </div>
        <div className="justify-center flex flex-col items-center">
          <FaHeart className="text-gray-500 bg-white" size={20}/>
          <h1 className="text-gray-400">Orders</h1>
        </div>
        <div className="justify-center flex flex-col items-center">
          <IoMdCart className="text-gray-500 bg-white" size={20} />
          <h1 className="text-gray-400">My Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;
