
import React from 'react';

const SecondaryNavigation = () => {
  return (
    <div className="flex justify-between px-12 py-3  shadow-sm hidden lg:flex">
      {/* first div */}
      <div className="flex gap-8 text-semibold">
        {/* menu icon */}
        <div>
          <img src="../public/menu.svg" alt="" />
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
            <img src="../public/expand_more.svg" />
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="flex gap-8">
        {/* English usd */}
        <div className="flex">
          <h1 className="text-black font-semibold">English , USD</h1>

          <div>
            <img src="../public/expand_more.svg" />
          </div>
        </div>
        {/* ship to */}
        <div className="flex gap-2 ">
          <h1 className="text-black font-semibold">Ship 2</h1>
          <img src="../public/flag.svg" alt="" />
          <img src="../public/expand_more.svg" />
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavigation;
