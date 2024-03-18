import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBtn } from '../../features/menu/menuSlice';
const PrimaryNav = () => {
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  console.log('The toggle state is ', toggle);
  return (
    <div className="flex justify-between px-3 lg:px-12 py-3  shadow-sm relative">
      {/* Logo container */}
      <div>
        <img src="../public/logo-colored.svg" />
      </div>
      {/* div containing the search , select and the search button */}
      <div className="flex w-fit hidden lg:flex ">
        {/* search  */}
        <div>
          <input
            type="search"
            placeholder="Search"
            className="py-2 px-3 outline-none w-72 h-12"
            style={{
              border: 'solid 2px rgb(60, 131, 255)',
              borderRadius: ' 12px 0 0 12px',
            }}
          />
        </div>
        {/* options to filter */}
        <div>
          <select
            name="categories"
            id="categories"
            className="py-2 w-72 border-blue h-12"
            style={{
              border: 'solid 2px rgb(60, 131, 255)',
            }}
          >
            <option value="All categorty">All Category</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
            <option value="">Lorem</option>
          </select>
        </div>
        <div>
          <button className="text-white bg-blue-500 py-2.5 rounded-r-md px-3 text-semi-bold h-12">
            Search
          </button>
        </div>
      </div>

      {/* the links and profiles */}
      <div className=" flex gap-4 hidden lg:flex">
        <div className="justify-center">
          <div className="flex justify-center">
            {' '}
            <img src="../public/profile.svg" alt="" />
          </div>
          <h1 className="text-gray-400">Profile</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img src="../public/message.svg" alt="" />
          </div>

          <h1 className="text-gray-400">Message</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img src="../public/message.svg" alt="" />
          </div>

          <h1 className="text-gray-400">Orders</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img src="../public/cart.svg" alt="" />
          </div>

          <h1 className="text-gray-400">My Cart</h1>
        </div>
      </div>

      <div className="flex  items-center lg:hidden">
        <img
          src="../public/menu.svg"
          alt=""
          onClick={() => dispatch(toggleBtn())}
        />
      </div>

      {/*sidebar*/}
      {toggle && (
        <div
          className="absolute z-20 top-0 left-0 h-screen"
          style={{ width: '80%' }}
        >
          <div className="bg-white px-3 py-2 gap-2 items-center">
            <div className="">
              <img src="../public/signin.svg" alt="" />
            </div>
            <div className="font-semibold">Signin | Register</div>
          </div>
          <div className="flex px-3 py-3 gap-2 items-center">
            <div>
              <img src="../public/home.svg" alt="" />
            </div>
            <div className="font-semibold">Home</div>
          </div>
          <div className="flex px-3 py-3 gap-2 items-center">
            <div>
              <img src="../public/list.svg" alt="" />
            </div>
            <div className="font-semibold">Categories</div>
          </div>
          <div className="flex px-3 py-3 gap-2 items-center">
            <div>
              <img src="../public/orders.svg" alt="" />
            </div>
            <div className="font-semibold">Favourites</div>
          </div>
          <div className="flex px-3 py-3 gap-2 items-center">
            <div>
              <img src="../public/Vector.svg" alt="" />
            </div>
            <div className="font-semibold">My orders</div>
          </div>
          <hr />

          <div>
            <div className="flex px-3 py-3 gap-2 items-center">
              <div>
                <img src="../public/language.svg" alt="" />
              </div>
              <div className="font-semibold">English | USD</div>
            </div>
            <div className="flex px-3 py-3 gap-2 items-center">
              <div>
                <img src="../public/headset_mic.svg" alt="" />
              </div>
              <div className="font-semibold">Contact us</div>
            </div>
            <div className="flex px-3 py-3 gap-2 items-center">
              <div>
                <img src="../public/Vector.svg" alt="" />
              </div>
              <div className="font-semibold">About</div>
            </div>
          </div>
          <hr />

          <div className="px-12 py-5">
            <div className="mt-1 font-semibold">User agreement</div>
            <div className="mt-1 font-semibold">Partnership</div>
            <div className="mt-1 font-semibold">Privacy policy</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrimaryNav;
