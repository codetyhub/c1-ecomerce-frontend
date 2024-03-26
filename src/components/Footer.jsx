import React from 'react';
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png"
import linkedin from "../assets/images/linkedin.png"
import instagram from "../assets/images/facebook.png"
import youtube from "../assets/images/facebook.png"
import appStore from "../assets/images/appStore.png"
import googlePlay from "../assets/images/googlePlay.png"
import logo from "../assets/images/logo.png"
import flag from "../assets/images/flag.jpg"




const Footer = () => {
  return (
    <footer className='relative'>
      <div className='container mx-auto px-[50px]'>
        <div className='grid grid-cols-12'>
            <div className='col-span-12'>
               <div className='py-[60px] px-0'>
                  <div className='grid md:grid-cols-12 grid-cols-1 gap-[20px]'>
                    <div className='lg:col-span-2 md:col-span-12'>
                      <span className='text-2xl text-blue-400 font-semibold flex justify-center lg:justify-start'><img src={logo}/></span>
                      <p className='mt-6 text-gray-500 text-justify'>Best information about the company goes here but now lorem ipsum is</p>
                      <ul className='list-none mt-6 text-center lg:text-justify'>
                         <li className='inline'>
                            <a href='' className='align-middle items-center text-center justify-center text-sm border font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex'><img src={facebook} /></a>
                         </li>
                         <li className='inline'>
                            <a href='' className='align-middle items-center text-center justify-center text-sm border font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex'><img src={twitter} /></a>
                         </li>
                         <li className='inline'>
                            <a href='' className='align-middle items-center text-center justify-center text-sm border font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex'><img src={linkedin} /></a>
                         </li>
                         <li className='inline'>
                            <a href='' className='align-middle items-center text-center justify-center text-sm border font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex'><img src={instagram} /></a>
                         </li>
                         <li className='inline'>
                            <a href='' className='align-middle items-center text-center justify-center text-sm border font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex'><img src={youtube} /></a>
                         </li>
                      </ul>
                    </div>

                    <div className='lg:col-span-2 md:col-span-4 text-center lg:text-justify'>
                      <h2 className='tracking-[1px] text-black font-bold'>About</h2>
                      <ul className='list-none mt-6'>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>About Us</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Find Store</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Categories</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Blogs</a>
                        </li>
                      </ul>
                    </div>

                    <div className='lg:col-span-2 md:col-span-4 text-center lg:text-justify'>
                      <h2 className='tracking-[1px] text-black font-bold'>Parternship</h2>
                      <ul className='list-none mt-6'>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>About Us</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Find Store</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Categories</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Blogs</a>
                        </li>
                      </ul>
                    </div>

                    <div className='lg:col-span-2 md:col-span-4 text-center lg:text-justify'>
                      <h2 className='tracking-[1px] text-black font-bold'>Information</h2>
                      <ul className='list-none mt-6'>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Help Center</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Money Refund</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Shipping</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Contact Us</a>
                        </li>
                      </ul>
                    </div>

                    <div className='lg:col-span-2 md:col-span-4 text-center lg:text-justify'>
                      <h2 className='tracking-[1px] text-black font-bold'>For Users</h2>
                      <ul className='list-none mt-6'>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Login</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Register</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>Setting</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'>My Orders</a>
                        </li>
                      </ul>
                    </div>

                    <div className='lg:col-span-2 md:col-span-4 text-center lg:text-justify'>
                      <h2 className='tracking-[1px] text-black font-bold'>Get app</h2>
                      <ul className='list-none mt-6'>
                        <li className='flex justify-center lg:justify-start'>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'><img src={appStore} /></a>
                        </li>
                        <li className='flex justify-center  mt-[5px] lg:justify-start'>
                            <a href='#' className='text-gray-500 hover:text-black transition-all duration-500 ease-in-out'><img src={googlePlay} /></a>
                        </li>
                       </ul>
                    </div>
                  </div>
               </div>
            </div>
        </div>

        <div className='flex justify-between mb-[30px]'>
           <p>© 2024 Ecommerce.</p>
           <select className='outline-none cursor-pointer'>
            <option><img src={flag}/>English</option>
            <option>French</option>
           </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
