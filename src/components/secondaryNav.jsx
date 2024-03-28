
import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import flag from '../assets/images/flag.svg'

const SecondaryNav = () => {
  return (
    <div className="flex justify-between px-12 py-3  shadow-sm hidden lg:flex">
      {/* first div */}
      <div className="flex gap-4 text-semibold">
        {/* menu icon */}
        <div >
         <IoMenuSharp size={20}/>
        </div>
        {/* All category*/}
        <div className="text-black font-semibold">All Category</div>
        {/* Hot offers */}
        <div className="text-black font-semibold">Hot Offers</div>
        {/* Gift Boxes */}
        <div className="text-black font-semibold">GiftBoxes</div>
        {/* Projects */}
        <div className="text-black font-semibold">Projects</div>
        {/* MenuItem */}
        <div className="text-black font-semibold">Menu Item</div>
        {/* Help*/}
        <div className="flex">
          <div className="text-black font-semibold">help</div>
          <div>
          <FaAngleDown/>
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="flex gap-6">
        {/* English usd */}
        <div className="flex">
          <h1 className="text-black font-semibold">English , USD</h1>

          <div>
           <FaAngleDown/>
          </div>
        </div>
        {/* ship to */}
        <div className="flex gap-1 ">
          <h1 className="text-black font-semibold">Ship to</h1>
          <img src={flag}/>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
