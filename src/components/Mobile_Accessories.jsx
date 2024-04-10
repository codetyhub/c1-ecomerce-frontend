import image1 from "../assets/images/tech1.png";
import { IoIosStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import image2 from "../assets/images/image 22.png";
import image3 from "../assets/images/tech 3.png";
import image4 from "../assets/images/image 32.png";
import image5 from "../assets/images/6.png";
import image6 from "../assets/images/image 22.png";
import image7 from "../assets/images/image 7.png";
import image8 from "../assets/images/8.png";
import image9 from "../assets/images/tech1.png";
import { CgChevronLeft, CgLayoutGrid } from "react-icons/cg";
import { BiChevronLeft, BiChevronRight, BiMenu } from "react-icons/bi";

function Mobile_Accessories() {
  return (
    <div className="w-fit md:w-[90%] h-500 mx-auto mt-5 bg-[#F7FAFC] border  border-gray-300    rounded-lg p-3 ">
      <div className="w-full mt-4 md:flex flex-col justify-center hidden">
        <div class="bg-white px-4 text-black border border-gray-300 py-1 my-3 rounded-md w-full flex flex-row items-center justify-between">
          <span>
            12,911 items in <span class="font-bold">Mobile accessory</span>
          </span>

          <div class="flex flex-row ">
            <div class="flex flex-row items-center">
              <button class="mx-1 bg-white text-black font-bold text-xs h-5 w-5 py-0.5 px-2 mt-2 mb-2 rounded-md border border-gray-500"></button>
              <p class="ml-1">verified only</p>
            </div>

            <button class="mx-1 bg-white text-black semi-bold py-2 px-4 rounded-lg border border-gray-300">
              featured
            </button>
            <div className="flex border rounded-lg items-center">
              <CgLayoutGrid size={30} />
              <BiMenu size={30} />
            </div>
          </div>
        </div>
      </div>

      <div class="md:flex hidden flex-row items-center">
        <div>
          <button class="mx-1 bg-white py-1 text-gray-600 px-4 rounded-lg border border-blue-500">
            Samsung X
          </button>
          <button class="mx-1 bg-white py-1 text-gray-600 px-4 rounded-lg border border-blue-500">
            Apple X
          </button>
          <button class="mx-1 bg-white py-1 text-gray-600 px-4 rounded-lg border border-blue-500">
            Poco X
          </button>
          <button class="mx-1 bg-white py-1 text-gray-600 px-4 rounded-lg border border-blue-500">
            Metallic X
          </button>
          <button class="mx-1 bg-white py-1 text-gray-600 px-4 rounded-lg border border-blue-500">
            4 star X
          </button>
          <button class="mx-1 bg-white py-1 text-gray-600 px-4 rounded-lg border border-blue-500">
            3 star X
          </button>
        </div>
        <div class="text-blue-500 ml-2 font-semibold">Clear all filters</div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="bg-white rounded-md  text-black border  border-gray-150   w-[295px] h-[405px]  items-center justify-between mt-10 mb-10 ">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
                <span>
                  <span className="text-gray-500">$1128.00</span>
                  <div className="w-[65px] text-gray-400 h-[1px] bg-slate-400 mt-[-11px] ml-[63px]"></div>
                </span>
              </span>

              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart stroke="4" className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">7.5</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md  text-black border  border-gray-150  w-[295px] h-[405px]  items-center justify-between mt-10 mb-10 ">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image2} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
                <span>
                  <span className="text-gray-500">$1128.00</span>
                  <div className="w-[65px] text-gray-400 h-[1px] bg-slate-400 mt-[-11px] ml-[63px]"></div>
                </span>
              </span>

              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">5.9</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md  text-black border  border-gray-150  w-[295px] h-[405px]  items-center justify-between mt-10 mb-10 ">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image3} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
              </span>
              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">7.5</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>
      </div>

       <div className="flex flex-col md:flex-row gap-3 -mt-16">
        <div className="bg-white rounded-md text-black border border-gray-150 w-[295px] h-[405px] items-center justify-between mt-10 mb-10">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image4} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
                <span>
                  <span className="text-gray-500">$1128.00</span>
                  <div className="w-[65px] text-gray-400 h-[1px] bg-slate-700 mt-[-11px] ml-[63px]"></div>
                </span>
              </span>

              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">7.5</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md text-black border border-gray-150 w-[295px] h-[405px] items-center justify-between mt-10 mb-10">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image5} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
                <span>
                  <span className="text-gray-500">$1128.00</span>
                  <div className="w-[65px] text-gray-400 h-[1px] bg-slate-700 mt-[-11px] ml-[63px]"></div>
                </span>
              </span>

              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">7.5</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md  text-black border  border-gray-150   w-[295px] h-[405px]  items-center justify-between mt-10 mb-10 ">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image6} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
              </span>

              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">7.5</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 -mt-16">
        <div className="bg-white text-black border rounded-md border-gray-150 w-[295px] h-[405px] items-center justify-between mt-10 mb-10">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image7} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
                <span>
                  <span className="text-gray-500">$1128.00</span>
                  <div className="w-[65px] text-gray-400 h-[1px] bg-slate-700 mt-[-11px] ml-[63px]"></div>
                </span>
              </span>

              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">7.5</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md  text-black border border-gray-150 w-[295px] h-[405px] items-center justify-between mt-10 mb-10">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image8} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
                <span>
                  <span className="text-gray-500">$1128.00</span>
                  <div className="w-[65px] text-gray-400 h-[1px] bg-slate-700 mt-[-11px] ml-[63px]"></div>
                </span>
              </span>

              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">7.5</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md  text-black border  border-gray-150   w-[295px] h-[405px]  items-center justify-between mt-10 mb-10 ">
          <div className="border border-gray-50 p-5 mt-7 mb-5 mx-10 my-5">
            <div className="border border-gray-50">
              <img src={image9} alt="" />
            </div>
          </div>
          <div className="border border-gray-10 w-full"></div>
          <div className="p-5 border border-gray-50">
            <span className="flex flex-row justify-between">
              <span className="gap-2">
                <span className="text-black font-bold mr-3">$99.50</span>
              </span>

              <span className="border border-gray-300 p-2 rounded-md">
                <CiHeart className="text-[#0D6EFD] font-extrabold text-[30px]" />
              </span>
            </span>
            <span className="flex flex-row text-yellow-500 gap-1 text-center items-center">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar className="text-gray-500" />
              </span>{" "}
              <span className="text-yellow-500 ml-2">7.5</span>
            </span>
            <div className="mt-1 mb-2">
              <p>GoPro HERO6 4K Action</p>
              <p>Camera - Black</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 justify-center md:justify-end">
        <select
          name="Show 10"
          className="w-fit border border-gray-300 text-black px-4 rounded"
        >
          <option>Show 10</option>
        </select>

        <div className=" w-[15%] flex">
          <BiChevronLeft size={30} className=" border bg-white rounded-l-md" />
          <div className=" border border-gray-300 bg-gray-200 px-2 ">1</div>
          <div className="border bg-white px-2">2</div>
          <div className="border bg-white px-2">3</div>
          <BiChevronRight size={30} className=" border bg-white rounded-r-md" />
        </div>
      </div>
    </div>
  );
}
export default Mobile_Accessories;
