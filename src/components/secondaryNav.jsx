import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import flag from '../assets/images/flag.svg';

const SecondaryNav = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-12 py-3 shadow-sm">
      {/* Left side */}
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 text-semibold">
        {/* Menu icon */}
        <IoMenuSharp size={20} />
        {/* All category */}
        <div className="text-black font-semibold">All Category</div>
        {/* Hot offers */}
        <div className="text-black font-semibold">Hot Offers</div>
        {/* Gift Boxes */}
        <div className="text-black font-semibold">GiftBoxes</div>
        {/* Projects */}
        <div className="text-black font-semibold">Projects</div>
        {/* Menu Item */}
        <div className="text-black font-semibold">Menu Item</div>
        {/* Help */}
        <div className="flex items-center gap-1 text-black font-semibold">
          help
          <FaAngleDown />
        </div>
      </div>
      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* English & Currency */}
        <div className="flex items-center gap-1 text-black font-semibold">
          English , USD
          <FaAngleDown />
        </div>
        {/* Ship to */}
        <div className="flex items-center gap-1">
          <h1 className="text-black font-semibold">Ship to</h1>
          <img src={flag} alt="Flag" />
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
