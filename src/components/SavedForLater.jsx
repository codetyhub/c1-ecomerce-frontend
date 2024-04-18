import ohj from '../assets/images/ohj.png';
import ard from '../assets/images/ard.png';
import iw from '../assets/images/iw.png';
import lok from '../assets/images/lok.png';
import { IoCartOutline } from "react-icons/io5"

const SavedForLater = () => {
  return (

    <div className="container mx-auto px-[50px]">
      <h2 className="font-bold py-4 text-xl">Saved for later</h2>
      <div className="flex gap-5 justify-center">
        <div className="bg-none rounded-lg  p-4 max-w-sm">
          <img src={ohj} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-bold mb-2">$99.50</h2>
          <p className="text-gray-700 mb-4">GoPro HERO6 4K Action Camera - Black</p>
          <button className="relative bg-white text-blue-500 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
            <IoCartOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500" size={28} />
            <span className="pl-8 font-medium text-lg">Move to cart</span>
          </button>
        </div>
        <div className="bg-none rounded-lg  p-4 max-w-sm">
          <img src={ard} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-bold mb-2">$99.50</h2>
          <p className="text-gray-700 mb-4">GoPro HERO6 4K Action Camera - Black</p>
          <button className="relative bg-white text-blue-500 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
            <IoCartOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500" size={28} />
            <span className="pl-8 font-medium text-lg">Move to cart</span>
          </button>
        </div>
        <div className="bg-none rounded-lg  p-4 max-w-sm">
          <img src={iw} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-bold mb-2">$99.50</h2>
          <p className="text-gray-700 mb-4">GoPro HERO6 4K Action Camera - Black</p>
          <button className="relative bg-white text-blue-500 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
            <IoCartOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500" size={28} />
            <span className="pl-8 font-medium text-lg">Move to cart</span>
          </button>
        </div>
        <div className="bg-none rounded-lg  p-4 max-w-sm">
          <img src={lok} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-bold mb-2">$99.50</h2>
          <p className="text-gray-700 mb-4">GoPro HERO6 4K Action Camera - Black</p>
          <button className="relative bg-white text-blue-500 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
            <IoCartOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500" size={28} />
            <span className="pl-8 font-medium text-lg">Move to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SavedForLater