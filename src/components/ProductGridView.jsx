import image1 from "../assets/images/tech1.png";
import {IoIosStar} from "react-icons/io";
import {CiHeart} from "react-icons/ci";
import image2 from "../assets/images/image 22.png";
import image3 from "../assets/images/tech 3.png";
import image4 from "../assets/images/image 32.png";
import image5 from "../assets/images/6.png";
import image6 from "../assets/images/image 22.png";
import image7 from "../assets/images/image 7.png";
import image8 from "../assets/images/8.png";
import image9 from "../assets/images/tech1.png";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

const ProductGridView = ({rating}) => {
    rating = 3
    const maxRating = 5; // Assuming 5 stars is the maximum rating
    const goldStars = Math.min(rating, maxRating);
    return (
        <>
            <div
                className="bg-white p-5 rounded-lg mt-4 flex-col md:flex-row flex w-full text-black border  border-gray-150 items-center justify-between ">
                <div className="border border-gray-50">
                    <img src={image2} alt=""/>
                </div>
                <div className='w-full'>
                    <div className="flex justify-between">
                        <p>GoPro HERO6 4K Action, Camera - Black</p>
                        <CiHeart stroke="4"
                                 className="text-[#0D6EFD] font-extrabold text-[30px] border  border-gray-400"/>
                    </div>
                    <p className='font-bold'>
                        <span>$999.99</span>
                        <span className='text-gray-400 ml-4'>$1267.0</span>
                    </p>
                    <p className="flex items-center">
                        {[...Array(goldStars)].map((_, index) => (
                            <IoIosStar key={index} style={{color: '#ffad55'}}/>
                        ))}
                        {[...Array(maxRating - goldStars)].map((_, index) => (
                            <IoIosStar key={goldStars + index} style={{color: '#ccc'}}/>
                        ))}
                        <span className='ml-2 font-bold'>7.5 - 154 orders </span>
                        <span className="text-green-500 ml-2">Free Shopping</span>

                    </p>
                    <p className='lg:w-3/4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor
                        incididunt ut
                        labore et dolore magna aliqua. </p>
                    <a href="/checkout" className='text-blue-600'>View details</a>


                </div>
            </div>
            <div
                className="bg-white p-5 rounded-lg mt-4 flex-col md:flex-row flex w-full text-black border  border-gray-150 items-center justify-between ">
                <div className="border border-gray-50">
                    <img src={image1} alt=""/>
                </div>
                <div className='w-full'>
                    <div className="flex justify-between">
                        <p>GoPro HERO6 4K Action, Camera - Black</p>
                        <CiHeart stroke="4"
                                 className="text-[#0D6EFD] font-extrabold text-[30px] border  border-gray-400"/>
                    </div>
                    <p className='font-bold'>
                        <span>$999.99</span>
                        <span className='text-gray-400 ml-4'>$1267.0</span>
                    </p>
                    <p className="flex items-center">
                        {[...Array(goldStars)].map((_, index) => (
                            <IoIosStar key={index} style={{color: '#ffad55'}}/>
                        ))}
                        {[...Array(maxRating - goldStars)].map((_, index) => (
                            <IoIosStar key={goldStars + index} style={{color: '#ccc'}}/>
                        ))}
                        <span className='ml-2 font-bold'>7.5 - 154 orders </span>
                        <span className="text-green-500 ml-2">Free Shopping</span>

                    </p>
                    <p className='lg:w-3/4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor
                        incididunt ut
                        labore et dolore magna aliqua. </p>
                    <a href="/checkout" className='text-blue-600 mt-2'>View details</a>


                </div>
            </div>
            <div
                className="bg-white p-5 rounded-lg mt-4 flex-col md:flex-row flex w-full text-black border  border-gray-150 items-center justify-between ">
                <div className="border border-gray-50">
                    <img src={image3} alt=""/>
                </div>
                <div className='w-full'>
                    <div className="flex justify-between">
                        <p>GoPro HERO6 4K Action, Camera - Black</p>
                        <CiHeart stroke="4"
                                 className="text-[#0D6EFD] font-extrabold text-[30px] border  border-gray-400"/>
                    </div>
                    <p className='font-bold'>
                        <span>$999.99</span>
                        <span className='text-gray-400 ml-4'>$1267.0</span>
                    </p>
                    <p className="flex items-center">
                        {[...Array(goldStars)].map((_, index) => (
                            <IoIosStar key={index} style={{color: '#ffad55'}}/>
                        ))}
                        {[...Array(maxRating - goldStars)].map((_, index) => (
                            <IoIosStar key={goldStars + index} style={{color: '#ccc'}}/>
                        ))}
                        <span className='ml-2 font-bold'>7.5 - 154 orders </span>
                        <span className="text-green-500 ml-2">Free Shopping</span>

                    </p>
                    <p className='lg:w-3/4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor
                        incididunt ut
                        labore et dolore magna aliqua. </p>
                    <a href="/checkout" className='text-blue-600 mt-2'>View details</a>
                </div>

            </div>
            <div
                className="bg-white p-5 rounded-lg mt-4 flex-col md:flex-row flex w-full text-black border  border-gray-150 items-center justify-between ">
                <div className="border border-gray-50">
                    <img src={image4} alt=""/>
                </div>
                <div className='w-full'>
                    <div className="flex justify-between">
                        <p>GoPro HERO6 4K Action, Camera - Black</p>
                        <CiHeart stroke="4"
                                 className="text-[#0D6EFD] font-extrabold text-[30px] border  border-gray-400"/>
                    </div>
                    <p className='font-bold'>
                        <span>$999.99</span>
                        <span className='text-gray-400 ml-4'>$1267.0</span>
                    </p>
                    <p className="flex items-center">
                        {[...Array(goldStars)].map((_, index) => (
                            <IoIosStar key={index} style={{color: '#ffad55'}}/>
                        ))}
                        {[...Array(maxRating - goldStars)].map((_, index) => (
                            <IoIosStar key={goldStars + index} style={{color: '#ccc'}}/>
                        ))}
                        <span className='ml-2 font-bold'>7.5 - 154 orders </span>
                        <span className="text-green-500 ml-2">Free Shopping</span>

                    </p>
                    <p className='lg:w-3/4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor
                        incididunt ut
                        labore et dolore magna aliqua. </p>
                    <a href="/checkout" className='text-blue-600 mt-2'>View details</a>
                </div>

            </div>
            <div className="flex gap-2 justify-center md:justify-end mt-4">
                <select
                    name="Show 10"
                    className="w-fit border border-gray-300 text-black px-2 rounded"
                >
                    <option>Show 10</option>
                </select>

                <div className=" w-[15%] flex">
                    <BiChevronLeft size={30} className=" border bg-white rounded-l-md"/>
                    <div className=" border border-gray-300 bg-gray-200 px-2 ">1</div>
                    <div className="border bg-white px-2">2</div>
                    <div className="border bg-white px-2">3</div>
                    <BiChevronRight size={30} className=" border bg-white rounded-r-md"/>
                </div>
            </div>

        </>
    )
}
export default ProductGridView