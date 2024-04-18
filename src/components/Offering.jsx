import last from "../assets/images/last.svg";
import coundown from "../assets/images/coundown.svg";
import Item from "../assets/images/Item.svg";
import wee from "../assets/images/wee.svg";
import re from "../assets/images/re.svg";
import tu from "../assets/images/tu.svg";

export default function OfferingCard() {
  return (
    <div className="container mx-auto px-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <div className="bg-white py-4 flex justify-center items-center">
            <img src={coundown} className="max-w-full max-h-full" alt="Countdown" />
          </div>
          <div className="bg-white p-4 flex justify-center items-center">
            <img src={re} className="max-w-full max-h-full" alt="Second Image" />
          </div>
          <div className="bg-white p-4 flex justify-center items-center">
            <img src={tu} className="max-w-full max-h-full" alt="Third Image" />
          </div>
          <div className="bg-white p-4 flex justify-center items-center">
            <img src={wee} className="max-w-full max-h-full" alt="Fourth Image" />
          </div>
          <div className="bg-white p-4 flex justify-center items-center">
            <img src={Item} className="max-w-full max-h-full" alt="Fifth Image" />
          </div>
          <div className="bg-white p-4 flex justify-center items-center">
            <img src={last} className="max-w-full max-h-full" alt="Last Image" />
          </div>
        </div>
    </div>
  );
}
