import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrimaryNav from './PrimaryNav';
import SecondaryNav from "./SecondaryNav"
const MensTshirts = () => {
  const shirts = useSelector((state) => state.tshirts);
  const [clickedId, setClickedId] = useState();
  const [defaultShirt, setDefaultShirt] = useState(null);

  const handleClick = async (id) => {
    const con = shirts.find((singlee) => singlee.id === id);
    setClickedId(con ? con.name : '');
  };
  useEffect(() => {
    setDefaultShirt(shirts[0].name);
  }, []);

  return (
<div>
  <PrimaryNav/>
  <SecondaryNav/>

<div className=" mx-3 p-4 mt-12 border  border-gray-500 flex grid grid-cols-1 md:grid-cols-3 md:mx-12 ">
      {/* T-shirts view division */}
      <div className="md:flex flex-col">
        {/* div containing single image */}
        <div className="md:w-72 h-72 border border-gray-200">
          {
            <img
              src={clickedId ? clickedId : defaultShirt}
              className="w-full h-full"
            />
          }
        </div>
        <div className="flex grid grid-cols-6 mt-5 w-72 h-fit">
          {shirts.map((single) => (
            <div key={single.id}>
              <img
                src={single.name}
                alt="image not found"
                onClick={() => handleClick(single.id)}
                className="cursor-pointer p-1"
              />
            </div>
          ))}
        </div>
      </div>
      {/* end of tshirts view division */}
      {/* descriptions div  */}
      <div className="h-fit">
        {/* instock */}
        <h1 className="text-green-500 gap-2 text-xl flex ">
          <img src="../public/true.svg" alt="image not found " />
          <span>In Stock</span>
        </h1>
        <h1 className="font-semibold text-xl my-3">
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </h1>
        <div className="flex gap-2 my-3">
          <div className="flex gap-2">
            <img src="../rating.svg" alt="image not found" />
            <span className="text-orange-500 font-semibold">9.3</span>
          </div>
          <div className="flex gap-2 h-fit items-center">
            <img src="../Dot.svg" alt="image not found" />
            <img src="../message.svg" alt="image not found" />
            <span className=" font-semibold text-gray-500">32 Reviews</span>
          </div>
          <div className="flex gap-2">
            <img src="../Dot.svg" alt="image not found" />
            <img src="../shopping_basket.svg" alt="image not found" />
            <span className="font-semibold text-gray-500">154 sold</span>
          </div>
        </div>

        <div className="flex gap-10 bg-customColor p-2">
          <div className="flex h-fit items-center">
            <div className="h-fit items-center">
              <div className="text-red-500 font-semibold text-xl">$ 98.00</div>
              <div className="text-gray-500">50-100 pcs</div>
            </div>
            <span className="w-0.5 h-10 bg-gray-400 mx-5"></span>
          </div>
          <div className="flex h-fit items-center">
            <div className="h-fit items-center">
              <div className="text-black font-semibold text-xl">$ 90.00</div>
              <div className="text-gray-500">50-100 pcs</div>
            </div>
            <span className="w-0.5 h-10 bg-gray-400 mx-5"></span>
          </div>
          <div className="flex h-fit items-center">
            <div className="h-fit items-center">
              <div className="text-red-500 font-semibold text-xl">$ 78.00</div>
              <div className="text-gray-500">700+ pcs</div>
            </div>
            <span className="w-0.5 h-10 bg-gray-400 mx-5"></span>
          </div>
        </div>

        <div className="flex w-full mt-5">
          <div className=" w-1/2 font-semibold text-slate-400 my-3">Price</div>
          <div className=" w-1/2 text-slate-950 my-1">Negotiable</div>
        </div>
        <hr />

        <div className="mt-5">
          <div className="flex w-full">
            <div className=" w-1/2 text-slate-400 my-1">Type</div>
            <div className=" w-1/2 text-slate-950 my-1">Classic shoes</div>
          </div>
          <div className="flex w-full">
            <div className=" w-1/2 text-slate-400 my-1">Material</div>
            <div className=" w-1/2 text-slate-950 my-1">Plastic material</div>
          </div>
          <div className="flex w-full">
            <div className=" w-1/2 text-slate-400 my-1">Design</div>
            <div className=" w-1/2 text-slate-950 my-1">Modern nice</div>
          </div>
        </div>
        <hr />

        <div className="mt-5">
          <div className="flex w-full">
            <div className=" w-1/2 text-slate-400 my-1">Customization</div>
            <div className=" w-1/2 text-slate-950 my-1">
              Customized logo and design custom packages
            </div>
          </div>
          <div className="flex w-full">
            <div className=" w-1/2 text-slate-400 my-1">Protection</div>
            <div className=" w-1/2 text-slate-950 my-1">Refund Ppolicy</div>
          </div>
          <div className="flex w-full">
            <div className=" w-1/2 text-slate-400 my-1">Warranty</div>
            <div className=" w-1/2 text-slate-950 my-1">
              2 years full Warranty
            </div>
          </div>
        </div>
        <hr className='my-5'/>
      </div>
      {/* end of description division */}

      {/* suppliers info div */}
      <div className='md:px-10'>
        <div className="border border-gray-500 p-5">
          <div className="flex gap-10 ">
            <img src="../supp.svg" alt="image not found" />
            <h1>
              <span>Supplier</span>
              <br />
              <span>Guanjoi Trading LLC</span>
            </h1>
          </div>
          <hr className="mt-3" />
          <div className="mt-5">
            <div className="flex gap-10">
              <img src="../flag.svg" alt="image not found" />
              <h1 className="text-slate-400 font-medium">Germany ,Berlin</h1>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-10">
              <img src="../Vector.svg" alt="image not found" />
              <h1 className="text-slate-400 font-medium">Verified users</h1>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-10">
              <img src="../shopping_basket.svg" alt="image not found" />
              <h1 className="text-slate-400 font-medium">Worldwide Shipping</h1>
            </div>
          </div>
          <button className="bg-blue-500 text-white w-full p-3 font-medium rounded-md mt-10 ">
            Send Inquiry
          </button>
          <button className="bg-transparent  w-full p-3 font-bold rounded-md mt-5 text-blue-500 border border-gray-400">
            Seller's Profile
          </button>
        </div>

        <div className="flex justify-center my-8">
          <h1 className="text-blue-500 font-bold flex gap-3 text-center">
            {' '}
            <img src="../like.svg" alt="image not found" />
            <span>Save for later</span>
          </h1>
        </div>
      </div>
      {/* end of suppliers info div */}
    </div>
</div>
  );
};

export default MensTshirts;
