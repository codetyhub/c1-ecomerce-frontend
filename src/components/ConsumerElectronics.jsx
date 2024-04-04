import React from 'react'
import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/img3.svg";
import img4 from "../assets/images/img4.svg";
import img5 from "../assets/images/img5.svg";
import img6 from "../assets/images/img6.svg";
import img7 from "../assets/images/img7.svg";
import img8 from "../assets/images/img8.svg";
import img9 from "../assets/images/img9.svg";


const ConsumerElectronics = () => {
  return (
    <div className='container mx-auto px-[50px]'>
    <div className="flex container lg:flex-row sm:flex-col md:flex-col flex-col mx-auto py-10">
        <div className="lg:w-[500px] md:w-full sm:w-full  p-5 object-fill bg-cover bg-center" style={{backgroundImage: `url(${img9})`}}>
            <h3 className="text-black font-bold text-[24px] w-[50%] mb-4">Consumer electronics and gadgets</h3>
            <button className="bg-white hover:bg-gray-400 transition text-black text-[15px] font-[500]  px-4 py-2 mt-[10px] rounded-md">
                Source Now
            </button>
        </div>

        <div className="flex justify-around flex-wrap px-5 py-5 ">
            {/* Single Box */}
            <div className="flex justify-between p-[10px] mx-[5px] cursor-pointer">
                <div className='text-[13px]'>
                    <p className="text-[16px]">Smart watches</p>
                    <p className='text-gray-500'>From<br/>USD 19</p>
                </div>
                <div className="pt-[30px]">
                    <img src={img1} alt="Soft chairs"/>
                </div>
            </div>

            <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                <div className="text-[13px]">
                    <p className="text-[16px]">Cameras</p>
                    <p className='text-gray-500'>From<br/>USD 19</p>
                </div>
                <div className="pt-[30px]">
                    <img src={img2} alt="Soft chairs"/>
                </div>
            </div>

            <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                <div className="text-[13px]">
                    <p className="text-[16px]">Headphones</p>
                    <p className='text-gray-500'>From<br/>USD 19</p>
                </div>
                <div className="pt-[30px]">
                    <img src={img3} alt="Soft chairs"/>
                </div>
            </div>

            <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                <div className="text-[13px]">
                    <p className="text-[16px]">Smart watches</p>
                    <p className='text-gray-500'>From<br/>USD 19</p>
                </div>
                <div className="pt-[30px]">
                    <img src={img4} alt="Soft chairs"/>
                </div>
            </div>

            <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                <div className="text-[13px]">
                    <p className="text-[16px]">Gaming set</p>
                    <p className='text-gray-500'>From<br/>USD 19</p>
                </div>
                <div className="pt-[30px]">
                    <img src={img5} alt="Soft chairs"/>
                </div>
            </div>

            <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                <div className="text-[13px]">
                    <p className="text-[16px]">Laptops & PC</p>
                    <p className='text-gray-500'>From<br/>USD 19</p>
                </div>
                <div className="pt-[30px]">
                    <img src={img6} alt="Soft chairs"/>
                </div>
            </div>

            <div className="flex justify-between p-[10px] mx-[5px] cursor-pointer">
                <div className="text-[13px]">
                    <p className="text-[16px]">Smartphones</p>
                    <p className='text-gray-500'>From<br/>USD 19</p>
                </div>
                <div className="pt-[30px]">
                    <img src={img7} alt="Soft chairs"/>
                </div>
            </div>

            <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                <div className="text-[13px]">
                    <p className="text-[16px]">Electric kattle</p>
                    <p className='text-gray-500'>From<br/>USD 19</p>
                </div>
                <div className="pt-[30px]">
                    <img src={img8} alt="Soft chairs"/>
                </div>
            </div>


        </div>
    </div>
</div>
  )
}

export default ConsumerElectronics