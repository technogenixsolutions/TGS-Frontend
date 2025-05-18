"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  {
    name: "South Korea",
    person: "Kim Kwang Sik (Kevin)",
    title: "IT Project Development and Advisor, Chief of Acote Korea",
    image: "https://i.postimg.cc/BQh2cf6k/TGSbangladesh.jpg",
    flag: "https://i.postimg.cc/mDHGV4Bw/images.jpg",
    position: { top: 0, right: 180 },
    dot: { top: 55, right: 195, color: "#11d9c8" },
  },
  {
    name: "Bangladesh",
    person: "Mahen Howlader",
    title: "Frontend Developer, Dhaka HQ",
    image: "https://i.postimg.cc/4xmVW2Hd/TGSsouthkorian.jpg",
    flag: "https://i.postimg.cc/mDHGV4Bw/images.jpg",
    position: { top: 0, right: 500 },
    dot: { top: -64, right: 600, color: "#76BE42" },
  },
  {
    name: "USA",
    person: "John Doe",
    title: "Project Lead, USA Branch",
    image: "https://i.postimg.cc/BQh2cf6k/TGSbangladesh.jpg",
    flag: "https://i.postimg.cc/mDHGV4Bw/images.jpg",
    position: { top: 50, right: 400 },
    dot: { top: 100, right: 496, color: "#117fd9" },
  },
  {
    name: "Singapore",
    person: "Jane Smith",
    title: "Marketing Director, Singapore",
    image: "https://i.postimg.cc/BQh2cf6k/TGSbangladesh.jpg",
    flag: "https://i.postimg.cc/mDHGV4Bw/images.jpg",
    position: { top: 40, right: 90 },
    dot: { top: 48, right: 105, color: "#eb7600" },
  },
  {
    name: "Japan",
    person: "Takashi Yamada",
    title: "CTO, Japan Office",
    image: "https://i.postimg.cc/BQh2cf6k/TGSbangladesh.jpg",
    flag: "https://i.postimg.cc/mDHGV4Bw/images.jpg",
    position: { top: 30, right: 150 },
    dot: { top: 120, right: 160, color: "#ff0080" },
  },
];

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % countries.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const activeCountry = countries[activeIndex];

  return (
    <section className="bg-[#111827] py-10 my-10">
      <div className="container mx-auto ">
        <div className="w-full max-w-sm mb-8 px-4 md:px-0 relative">
          <h3 className="text-[#20B149] text-base font-semibold tracking-[0.621px] leading-4 uppercase mb-1">
            our journey
          </h3>
          <h2 className="font-semibold text-3xl md:text-[40px] capitalize tracking-[-0.66px] leading-[32px] md:leading-[58px] text-white">
            Our Global Presence
          </h2>

          <div className="py-5 lg:py-0 lg:absolute w-full space-y-3 ">
            {countries.map((country, index) => (
              <div key={country.name} className="w-[92%]">
                <button
                  onClick={() => handleClick(index)}
                  className={`inline-flex items-center justify-start gap-2 w-full h-10 px-6 md:px-8 text-sm md:text-base font-bold ${activeIndex === index ? "text-white bg-[#76BE42]" : "text-[#76BE42] bg-[#82c8ee33]"
                    } rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76BE42] focus-visible:ring-offset-2`}
                >
                  <span
                    className="w-[10px] h-[10px] rounded-full shrink-0"
                    style={{ backgroundColor: country.dot.color }}
                  ></span>
                  {country.name} {country.name === "Bangladesh" ? "- Head Office" : country.name === "USA" || country.name === "Japan" ? "(2025)" : country.name === "Singapore" ? "(2024)" : ""}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ====== Desktop view (with map & dots) ====== */}
        <div className="relative  h-[339px] w-[894px]mx-auto hidden md:block">
          <Image
            alt="World map"
            src="https://i.postimg.cc/Kv8HvQLr/world-map.png"
            fill
            className="opacity-100 object-contain absolute object-right"
          />
          {/* Country Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCountry.name}
              className="absolute"
              style={activeCountry.position}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >


              <div className="w-[223px] h-[320px] rounded-2xl bg-[#1B1C1C] border shadow-2xl relative z-20">
                <div className="absolute h-full bottom-10 left-1/2 -translate-x-1/2 w-full rounded-2xl">
                  <Image
                    alt="card-image"
                    src={activeCountry.image}
                    fill
                    className="mx-auto object-cover rounded-lg"
                  />
                </div>
                <div className="absolute bottom-10 left-0 w-full h-1/2 z-20 bg-gradient-to-b from-transparent to-[#1B1C1C]"></div>
                <div className="w-full text-center absolute top-0 left-1/2 -translate-x-1/2 rounded-2xl">
                  <h2 className="text-white text-xl font-bold">
                    {activeCountry.person}
                  </h2>
                  <p className="text-white/80 text-xs max-w-[80%] mx-auto">
                    {activeCountry.title}
                  </p>
                </div>
                <div className="absolute w-full bottom-2.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      alt="country-flag"
                      src={activeCountry.flag}
                      width={16}
                      height={16}
                    />
                    <h2 className="text-white text-sm font-semibold">
                      {activeCountry.name}
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pulsing Dots */}
          {countries.map((country, index) => (
            <div
              key={country.name}
              className="absolute cursor-pointer"
              style={country.dot}
              onClick={() => handleClick(index)}
            >
              <div
                className="h-3 w-3 rounded-full animate-ping border border-white"
                style={{ backgroundColor: country.dot.color }}
              ></div>
              <div
                className="h-3 w-3 rounded-full absolute top-0 left-0"
                style={{ backgroundColor: country.dot.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* ====== Mobile View: Single Auto-Change Card ====== */}
        <div className="md:hidden px-4 mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCountry.name}
              className="mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="w-full max-w-[300px] mx-auto h-[340px] rounded-2xl bg-[#1B1C1C] border shadow-xl relative">
                <div className="absolute h-full bottom-10 left-1/2 -translate-x-1/2 w-full rounded-2xl">
                  <Image
                    alt="card-image"
                    src={activeCountry.image}
                    fill
                    className="mx-auto object-cover rounded-lg"
                  />
                </div>
                <div className="absolute bottom-10 left-0 w-full h-1/2 z-20 bg-gradient-to-b from-transparent to-[#1B1C1C]"></div>
                <div className="w-full text-center absolute top-0 left-1/2 -translate-x-1/2 rounded-2xl">
                  <h2 className="text-white text-xl font-bold">
                    {activeCountry.person}
                  </h2>
                  <p className="text-white/80 text-xs max-w-[80%] mx-auto">
                    {activeCountry.title}
                  </p>
                </div>
                <div className="absolute w-full bottom-2.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      alt="country-flag"
                      src={activeCountry.flag}
                      width={16}
                      height={16}
                    />
                    <h2 className="text-white text-sm font-semibold">
                      {activeCountry.name}
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
