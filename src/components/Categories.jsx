import React from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const Categories = () => 
{
    return(
        <div className="w-[18%] h-[40%] mt-5 ml-6 rounded-lg p-3 border border-black-500 bg-white">
        <div className="flex items-center"><span className="text-black font-semibold mr-12 ">Category</span>
        <RiArrowDropUpLine className="text-gray-500 opacity-60"/>
        </div>
         <div className="flex flex-col gap-2">
            <div className="text-black opacity-50">Mobile Accessories</div>
            <div className="text-black opacity-50">Electronics</div>
            <div className="text-black opacity-50">Smartphones</div>
            <div className="text-black opacity-50">Modern Tech</div>
        </div>
        <div class="text-blue-500">See All</div>
        <hr className="w-full border-t border-black border-opacity-30"></hr>
        <div className="flex items-center">
        <span className="text-black font-semibold mr-12">Brands</span>
        <RiArrowDropUpLine className="text-gray-500 opacity-60" />
        </div>
        <div className="flex flex-col items-left">
        <div class="flex items-center">
            <div>
        <input checked id="disabled-checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="disabled-checked-checkbox" class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"></label>
    </div>
        <span className="ml-2 text-base text-black">Samsung</span>
            </div>
            <div className="flex items-left">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent" checked />
        <span className="ml-2 text-base text-black">Apple</span>
            </div>
            <div className="flex items-left">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent"  />
        <span className="ml-2 text-base text-black">Huawei</span>
            </div>
        <div className="flex items-left">  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent" checked />
        <span className="ml-2 text-base text-black">Pocco</span></div>
       <div className="flex items-left">
       <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent"  />
        <span className="ml-2 text-base text-black">Lenovo</span>
       </div>
        <div class="text-blue-500">see all</div>
        <hr className="w-full border-t border-black border-opacity-30"></hr>
        <div className="flex items-center">
        <span className="text-black font-semibold mr-12">Feautures</span>
        <RiArrowDropUpLine className="text-gray-500 opacity-60" />
        </div>
       

        <div className="flex items-left">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent" checked />
        <span className="ml-2 text-base text-black">Metallic</span>
        </div>
        <div className="flex items-left">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent"  />
        <span className="ml-2 text-base text-black">Plastic cover</span>
        </div>
       <div className="flex items-left">
       <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent"  />
        <span className="ml-2 text-base text-black">8BG RAM</span>
       </div>
       <div className="flex items-left">
       <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent"  />
        <span className="ml-2 text-base text-black">Super power</span>
       </div>
        <div className="flex items-left">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 checked:bg-blue-500 checked:border-transparent"  />
        <span className="ml-2 text-base text-black">Large Memory</span>
        </div>
        
        <div class="text-blue-500">see all</div>
        <hr className="w-full border-t border-black border-opacity-30"></hr>
        <div className="flex items-center">
        <span className="text-black font-semibold mr-12">Price range</span>
        <RiArrowDropDownLine className="text-gray-500 opacity-60" />
        </div>
        
        <hr className="w-full border-t border-black border-opacity-30"></hr>
        <div className="flex items-center">
        <span className="text-black font-semibold mr-14">Condition</span>
        <RiArrowDropDownLine className="text-gray-500 opacity-60" />
        </div>
        <hr className="w-full border-t border-black border-opacity-30"></hr>
<div className="flex items-center"><span className="text-black font-semibold mr-12">Ratings</span>
        <RiArrowDropDownLine className="text-gray-500 opacity-60" /></div>
        <hr className="w-full border-t border-black border-opacity-30"></hr>
        <div className="flex items-center">
        <span className="text-black font-semibold mr-7">Manufacturer</span>
        <RiArrowDropDownLine className="text-gray-500 opacity-60" />
        </div>
      </div>
         </div>
    )
}
export default Categories;