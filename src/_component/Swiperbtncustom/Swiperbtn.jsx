import { useSwiper } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function Swiperbtn() {
    const swiper = useSwiper();
    return (
        <div className="absolute z-50 bottom-15 right-5 flex gap-4">
            <button className=" border rounded-full text-gray-400 p-4" onClick={() => swiper.slidePrev()}><GoArrowLeft /></button>
            <button className=" border rounded-full text-gray-400 p-4" onClick={() => swiper.slideNext()}><GoArrowRight />
</button>
        </div>
    );
}

export default Swiperbtn;
