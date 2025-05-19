"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function page() {
    const categoriesData = [
        { label: "All" },
        { label: "AI/ML" },
        { label: "Beauty" },
        { label: "Business" },
        { label: "Ecommerce" },
        { label: "IOT" },
        { label: "POS" }
    ];

    const products = [
        {
            id: 1,
            title: "AI Powered Skincare Solution",
            imageUrl: "https://acotegroup.com/products/1/skincare-01.png",
            link: "/our-products/product-1",
            category: "Beauty",
        },
        {
            id: 2,
            title: "School Management Software",
            imageUrl: "https://acotegroup.com/products/2/school-mgt-02.png",
            link: "/our-products/product-2",
            category: "Business",
        },
        {
            id: 3,
            title: "Human Resource Management System",
            imageUrl: "https://acotegroup.com/products/3/human-resource-thumbnail.webp",
            link: "/our-products/product-3",
            category: "Business",
        },
        {
            id: 4,
            title: "EU Automatic License Plate Recognition Parking System Software",
            imageUrl: "https://acotegroup.com/products/4/product-01.png",
            link: "/our-products/product-4",
            category: "IOT",
        },
        {
            id: 5,
            title: "Anti Jammer GPS Tracker with Fuel Sensor",
            imageUrl: "https://acotegroup.com/products/5/product-01.png",
            link: "/our-products/product-5",
            category: "IOT",
        },
        {
            id: 6,
            title: "AI Edge Computer with Face Recognition",
            imageUrl: "https://acotegroup.com/products/6/product-01.avif",
            link: "/our-products/product-6",
            category: "AI/ML",
        },
        {
            id: 7,
            title: "AI-Based Fire Detection System",
            imageUrl: "https://acotegroup.com/products/7/product-01.png",
            link: "/our-products/product-7",
            category: "AI/ML",
        },
        {
            id: 8,
            title: "Pricing Plans",
            imageUrl: "https://i.postimg.cc/vTFHPGBv/Monthly-Vs-Yearly.webp",
            link: "/our-products/product-8",
            category: "POS",
        },
        {
            id: 9,
            title: "AI-Powered Customer Support Suite",
            imageUrl: "https://acotegroup.com/products/9/product-04.jpg",
            link: "/our-products/product-9",
            category: "AI/ML",
        },
    ];
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredProducts = activeCategory === "All" ? products : products?.filter(product => product?.category === activeCategory)
    return (
        <section className="max-w-screen-2xl mx-auto px-2 py-10">
            <div className="flex flex-col items-center justify-center w-full space-y-3 md:space-y-5">
                <div className="bg-[#b9b9b91f] w-fit px-6 rounded-full py-1 text-xl">
                    <p>
                        Home / <span className="font-bold text-primary">Products</span>
                    </p>
                </div>
                <h2 className="text-[#111827] font-bold text-4xl md:text-[50px] leading-[52px] md:leading-[67px]">
                    Our Products
                </h2>
                <p className="text-[#6B7280] md:max-w-[444px] text-xl text-center">
                    Offering solutions &amp; services to address a spectrum of financial issues
                </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-[18px] mt-8 md:mt-[50px] md:p-4 justify-center md:max-w-5xl mx-auto w-full h-full">
                {categoriesData.map((category) => (
                    <button
                        key={category.label}
                        onClick={() => setActiveCategory(category.label)}
                        className={`px-6 py-2 text-sm md:text-base font-medium rounded-full border transition-all ${activeCategory === category.label
                                ? "bg-black text-white"
                                : "bg-white text-black border-[#C4C4C4] hover:bg-gray-100"
                            }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* product design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden shadow-lg">
                {filteredProducts?.map((val, index) => (
                    <Link key={index} href={val?.link} className="p-2">
                        <div className="relative w-full h-80 rounded-t-2xl">
                            <Image
                                src={val?.imageUrl}
                                className="rounded-t-2xl"
                                alt={val?.title}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                        <p className="mt-4 text-xl font-normal text-gray-900 px-4">{val?.title}</p>
                    </Link>
                ))}
            </div>

            {/* next/prev buttons */}
            <div className="flex justify-center space-x-2.5 mt-10">
                <button className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue-600 hover:bg-primary hover:text-white">
                    ⪻ Previous
                </button>
                <div className="flex gap-x-2">
                    <div className="bg-gray-800 hover:bg-gray-700 text-white px-6 rounded-sm cursor-pointer xl py-3">
                        1
                    </div>
                    <div className=" text-black  border hover:text-white hover:bg-gray-800 px-6 rounded-sm cursor-pointer xl py-3">
                        2
                    </div>
                </div>
                <button className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue-600 hover:bg-primary hover:text-white">
                    Next ⪼
                </button>
            </div>
        </section>

    );
}

export default page;