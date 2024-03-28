import React from 'react';
import img1 from "../assets/images/image1.svg";
import img2 from "../assets/images/image2.svg";
import img3 from "../assets/images/image3.svg";
import img4 from "../assets/images/image4.svg";
import img5 from "../assets/images/image5.svg";
import img6 from "../assets/images/image6.svg";
import img7 from "../assets/images/image7.svg";
import img8 from "../assets/images/image8.svg";
import img9 from "../assets/images/image9.svg";

const ConsumerElectronics = () => {
    return (
        <div className=''>
            <div className="flex container lg:flex-row sm:flex-col md:flex-col flex-col mx-auto p-10">
                <div className="lg:w-[500px] md:w-full sm:w-full  p-5 object-fill bg-cover bg-center" style={{backgroundImage: `url(${img9})`}}>
                    <h3 className="text-black font-bold text-[24px] w-[50%] mb-4">Home and outdoor</h3>
                    <button className="bg-white hover:bg-gray-400 transition text-black text-[20px] font-[500]  px-4 py-2 mt-[10px] rounded-md">
                        Source now
                    </button>
                </div>

                <div className="flex justify-around flex-wrap px-5 py-5 ">
                    {/* Single Box */}
                    <div className="flex justify-between p-[10px] mx-[5px] cursor-pointer">
                        <div className='text-[13px]'>
                            <p className="text-[16px]">Soft chairs</p>
                            <p className='text-gray-500'>From<br/>USD 19</p>
                        </div>
                        <div className="pt-[30px]">
                            <img src={img1} alt="Soft chairs"/>
                        </div>
                    </div>

                    <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                        <div className="text-[13px]">
                            <p className="text-[16px]">Soft & chairs</p>
                            <p className='text-gray-500'>From<br/>USD 19</p>
                        </div>
                        <div className="pt-[30px]">
                            <img src={img2} alt="Soft chairs"/>
                        </div>
                    </div>

                    <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                        <div className="text-[13px]">
                            <p className="text-[16px]">Kitchen dishes</p>
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
                            <p className="text-[16px]">Kitchen mixer</p>
                            <p className='text-gray-500'>From<br/>USD 19</p>
                        </div>
                        <div className="pt-[30px]">
                            <img src={img5} alt="Soft chairs"/>
                        </div>
                    </div>

                    <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                        <div className="text-[13px]">
                            <p className="text-[16px]">Blenders</p>
                            <p className='text-gray-500'>From<br/>USD 19</p>
                        </div>
                        <div className="pt-[30px]">
                            <img src={img6} alt="Soft chairs"/>
                        </div>
                    </div>

                    <div className="flex justify-between p-[10px] mx-[5px] cursor-pointer">
                        <div className="text-[13px]">
                            <p className="text-[16px]">Home appliance</p>
                            <p className='text-gray-500'>From<br/>USD 19</p>
                        </div>
                        <div className="pt-[30px]">
                            <img src={img7} alt="Soft chairs"/>
                        </div>
                    </div>

                    <div className="flex justify-between p-[10px]  mx-[5px]  cursor-pointer">
                        <div className="text-[13px]">
                            <p className="text-[16px]">Coffee maker</p>
                            <p className='text-gray-500'>From<br/>USD 19</p>
                        </div>
                        <div className="pt-[30px]">
                            <img src={img8} alt="Soft chairs"/>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ConsumerElectronics;
