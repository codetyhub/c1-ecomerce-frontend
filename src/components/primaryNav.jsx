import React from 'react';
import { MdMessage } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import logocolored from '../assets/images/logocolored.svg';



const PrimaryNav = () => {
  return (
    <div className="flex justify-between px-3 lg:px-12 py-3  shadow-sm relative">
      {/* Logo container */}
      <div>
        <img src={logocolored}/>
      </div>
      {/* div containing the search , select and the search button */}
      <div className="flex w-fit hidden lg:flex ">
        {/* search  */}
        <div>
          <input
            type="search"
            placeholder="Search"
            className="py-2 px-3 outline-none w-80 h-10"
            style={{
              border: 'solid 2px rgb(60, 131, 255)',
              borderRadius: ' 12px 0 0 12px',
            }}
          />
        </div>
        {/* options to filter */}
        <div>
          <select
            name="categories"
            id="categories"
            className="py-2 w-72 border-blue h-10"
            style={{
              border: 'solid 2px rgb(60, 131, 255)',
            }}
          >
            <option  value="All category">All Category</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
          </select>
        </div>
        <div>
          <button className="text-white bg-blue-500 py-2.0 rounded-r-md px-3 text-semi-bold h-10">
            Search
          </button>
        </div>
      </div>

      {/* the links and profiles */}
      <div className=" flex gap-4 hidden lg:flex">
        <div className="justify-center">
          <div className="flex justify-center">
            {' '}
            <MdAccountBox className=" text-gray-500 bg-white" size={20}/>
          </div>
          <h1 className="text-gray-400">Profile</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <MdMessage className=" text-gray-500 bg-white" size={20}/>
          </div>

          <h1 className="text-gray-400">Message</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <FaHeart className=" text-gray-500 bg-white" size={20}/>
          </div>

          <h1 className="text-gray-400">Orders</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <IoMdCart className=" text-gray-500 bg-white" size={20} />
          </div>

          <h1 className="text-gray-400">My Cart</h1>
         </div>
      </div>
      </div>
  );
          };

export default PrimaryNav;