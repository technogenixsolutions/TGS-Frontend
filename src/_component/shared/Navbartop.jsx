import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";

function Navbartop() {
  return (
    <section className="bg-primary font-normal text-white ">
      <div className="max-w-screen-2xl flex items-center py-4 justify-between lg:px-2 mx-auto">
        <div className="hidden lg:flex items-center gap-x-2">
          <IoLocationOutline />
          <p>6th floor, DTX Business Center, Pragati Sarani Road, Dhaka 1229</p>
        </div>
        <div className="flex gap-x-10">
          <div className="flex items-center gap-x-2">
            <IoMdCall />
            <span>01739715893</span>
          </div>
          <div className="flex items-center gap-x-2">
            <LuMessageSquareMore />
            <span>technogenixsolutions@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbartop;
