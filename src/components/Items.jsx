import React from "react";
import FirstPicture from '../assets/images/First picture.png';
import SecondPicture from "../assets/images/second picture.png";
import ThirdPicture from '../assets/images/Third picture.png';
import ForthPicture from '../assets/images/Forth picture.png';
import FifthPicture from '../assets/images/Fith picture.png';
import SixthPicture from '../assets/images/sixth picture.png';

function Items() {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="text-black text-md font-bold">Related Products</div>
      <div className="border border-gray-200 rounded p-4"> <div className="flex gap-2">

<div className="items-center">
  <img src={FirstPicture} alt="Image 1" className="w-20 h-20 rounded-lg" />
  <div>
    <div className="text-black text-small">Xiaomi Redmi 8</div>
    <div className="text-gray text-small">Original</div>
    <div className="text-gray text-small" style={{ opacity: 0.5}}>$32.00-$40.00</div>
  </div>
</div>
<div>
  <img src={SecondPicture} alt="Image 2" className="w-20 h-20 rounded-lg" />
  <div>
    <div className="text-black text-small">Xiaomi Redmi 8</div>
    <div className="text-gray text-small">Original</div>
    <div className="text-gray text-small" style={{ opacity: 0.5}}>$32.00-$40.00</div>
  </div>
</div>
<div>
  <img src={ThirdPicture} alt="Image 3" className="w-20 h-20 rounded-lg" />
  <div>
    <div className="text-black text-small">Xiaomi Redmi 8</div>
    <div className="text-gray text-small">Original</div>
    <div className="text-gray text-small" style={{ opacity: 0.5}}>$32.00-$40.00</div>
  </div>
</div>
<div>
  <img src={ForthPicture} alt="Image 4" className="w-20 h-20 rounded-lg" />
  <div>
    <div className="text-black text-small">Xiaomi Redmi 8</div>
    <div className="text-gray text-small">Original</div>
    <div className="text-gray text-small" style={{ opacity: 0.5}}>$32.00-$40.00</div>
  </div>
</div>
<div>
  <img src={FifthPicture} alt="Image 5" className="w-20 h-20 rounded-lg" />
  <div>
    <div className="text-black text-small">Xiaomi Redmi 8</div>
    <div className="text-gray text-small">Original</div>
    <div className="text-gray text-small" style={{ opacity: 0.5}}>$32.00-$40.00</div>
  </div>
</div>
<div>
  <img src={SixthPicture} alt="Image 6" className="w-20 h-20 rounded-lg" />
  <div>
    <div className="text-black text-small">Xiaomi Redmi 8</div>
    <div className="text-gray text-small opacity 0.5">Original</div>
    <div className="text-gray text-small" style={{ opacity: 0.5}}>$32.00-$40.00</div>
  </div>
</div>
</div></div>
<div className="bg-blue-500 border border-blue-500 mt-4 h-20 flex flex-row justify-between px-8" style={{borderRadius: '3px'}}>    
       <div className="flex flex-col"> <span className="text-white text-medium font-bold ">Super Discount on more than $100 USD</span>
        <span className="text-white text-extra-small">Have you ever finally just written Dummy info?</span></div>
        <div className="bg-yellow-500 border border-yellow-500 mt-2 flex flex-row" style={{ width: '75px', height: '30px', borderRadius: '3px', marginLeft: '80px' ,margitop: '5' }}>
        <div className="text-white text-bold text-small" style={{padding: '5px'}}>Shopnow</div>        
        </div>
      </div>
    </div>
  );
}

export default Items;
