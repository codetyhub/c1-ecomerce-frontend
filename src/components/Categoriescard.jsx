import {useState} from "react";
import Image from "../assets/images/Banner-board.png";
import Avatar from "../assets/Avatar.svg";
function Categoriescard() {
    const categories = [
        "Automobiles",
        "Clothes and wear",
        "Home Interiors",
        "Computer and tech",
        "Tools, Equipments",
        "Sports and outdoor",
        "Animals and Pets",
        "Machinaries tools",
        "More Categories",
    ];
    const [active, setActive] = useState("Automobiles");
    return (
        <div
            className="w-[90%] mx-auto mt-5 bg-[#F7FAFC] border border-gray-300 rounded-lg p-3 flex lg:flex-row flex-col md:flex-col sm:flex-col gap-8">
            <div className="lg:w-[15%] md:w-full sm:w-full  mt-4">
                <ul className="mx-auto">
                    {categories.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <li
                            onClick={() => setActive(item)}
                            className={`${
                                active === item
                                    ? "bg-[#E3F0FF] font-[500] px-4 text-black py-1 rounded-md"
                                    : ""
                            } text-sm w-[90%] my-4`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:w-[60%] md:w-full sm:w-full relative">
                <div className="absolute left-20 top-20">
                    <p className="font-medium">Latest trending</p>
                    <p className="font-bold text-2xl">Electronic items</p>
                    <button className="bg-white px-3 py-1 rounded my-4">Learn More</button>
                </div>
                <img src={Image} alt="" className="w-[100%]"/>
            </div>
            <div className="lg:w-[20%] md:w-full sm:w-full">
                <div className="bg-[#E3F0FF] p-3 rounded-lg">
                    <div className="flex gap-3 justify-center mb-2 items-center">
                        <img src={Avatar} alt="avatar"/>
                        <div>
                            <p>Hi, user</p>
                            <p> let us get stated</p>
                        </div>
                    </div>
                    <div className="">
                        <button className="bg-blue-500 text-white py-1 my-3 rounded-md w-full">
                            Join Now
                        </button>
                        <button className="bg-white 500 text-blue py-1 mt-2 border rounded-md w-full">
                            Login
                        </button>
                    </div>
                </div>
                <div className="bg-[#F38332] p-3 my-3 rounded-lg text-white">
                    Get US $10 off <br/> with a new <br/> supplier
                </div>
                <div className="bg-[#55BDC3] p-3 my-3 rounded-lg text-white">
                    Send quotes with <br/> supplier <br/> preferences
                </div>
            </div>
        </div>
    );
}
export default Categoriescard;







