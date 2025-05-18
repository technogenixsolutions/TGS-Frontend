"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import CustomButton from '@/_component/ButtonCustom/Button';
export default function Hero() {
  const services = [
    {
      heading: "Seamless Infrastructure Solutions",
      title: "AI Solutions",
      description: "Innovative AI-based technologies tailored to your business needs.",
      img: "https://i.postimg.cc/vZ2RkF4s/TGSai-bg.webp",
      button: "AI Solutions",
    },
    {
      heading: "Seamless Infrastructure Solutions",
      title: "Custom Software",
      description: "Tailor-made software applications for efficient business operations.",
      img: "https://i.postimg.cc/7LjFP31t/TGScustom-soft.webp",
      button: "Custom Software",
    },
    {
      heading: "Seamless Infrastructure Solutions",
      title: "DevOps Services",
      description: "Streamlined development and operations for faster delivery.",
      img: "https://i.postimg.cc/jSS0Mddc/TGSdevops.webp",
      button: "DevOps Services",
    },
    {
      heading: "Seamless Infrastructure Solutions",
      title: "Mobile App Development",
      description: "User-friendly mobile apps for both Android and iOS platforms.",
      img: "https://i.postimg.cc/CKZyVP8f/TGSMobile-app.webp",
      button: "Mobile App Development",
    },
  ];

  return <div >
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper h-[90vh] max-h-[800px]"

    >
      {
        services?.map((val, index) => {
          return <SwiperSlide key={index}>
            <div className="relative w-full h-full"> {/* or any fixed height */}
              <Image
                src={val?.img}
                alt="hero slide image"
                fill
                className="object-cover" // or "object-center", "object-contain" based on your need
              />
              <div className="absolute  z-10 p-8 bg-black/70 w-full h-full">
                <div className="flex flex-col justify-center space-y-2 h-full max-w-screen-2xl mx-auto px-16">
                  <div>
                    <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20 opacity-100 transform-none">
                      {val?.heading}
                    </span>
                  </div>
                  <h1 className="text-white text-5xl w-[600px]  font-bold">{val?.title}</h1>
                  <p className="text-gray-400 mt-2 w-96">{val?.description}</p>
                  <div>
                    <CustomButton children={val?.button}></CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        })
      }

    </Swiper>
  </div>
}
