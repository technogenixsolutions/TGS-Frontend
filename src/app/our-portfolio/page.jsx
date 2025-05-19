
"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const categoriesData = [
    { label: "All" },
    { label: "Graphics Design" },
    { label: "Development" },
    { label: "UX/UI Design" },
    { label: "SaaS & Dashboard" },
    { label: "AI/ML" }
];


const portfolioProjects = [
    {
        title: "Empower your finance with alpine banking Dashboard Development",
        path: "/our-portfolio/project-1",
        imageUrl: "https://acotegroup.com/portfolio/acot-portfolio-1.png",
        category: "Finance Dashboard"
    },
    {
        title: "Heavenly Fashion Ecommerce Market place Web Developmentsite Development",
        path: "/our-portfolio/project-2",
        imageUrl: "https://acotegroup.com/portfolio/portfolio-2/project-01.webp",
        category: "E-commerce"
    },
    {
        title: "Sugar CRM is a robust solution & Customer Journey CRM Dashboard Development",
        path: "/our-portfolio/project-3",
        imageUrl: "https://acotegroup.com/portfolio/acot-portfolio-3.png",
        category: "CRM"
    },
    {
        title: "InsightHub - KPI & Project Management Dashboard Web Developmentsite Development",
        path: "/our-portfolio/project-4",
        imageUrl: "https://acotegroup.com/portfolio/acot-portfolio-4.png",
        category: "Project Management"
    },
    {
        title: "Finomic - Financial Dashboard Management  Development",
        path: "/our-portfolio/project-5",
        imageUrl: "https://acotegroup.com/portfolio/acot-portfolio-5.png",
        category: "Finance Dashboard"
    },
    {
        title: "DisputeFox App - Credit Score Dashboard Development",
        path: "/our-portfolio/project-6",
        imageUrl: "https://acotegroup.com/portfolio/acot-portfolio-6.png",
        category: "Credit Score"
    },
    {
        title: "Velobank - Digital Neo Bank Card Landing Page Web Developmentsite",
        path: "/our-portfolio/project-7",
        imageUrl: "https://acotegroup.com/portfolio/acot-portfolio-7.png",
        category: "Banking"
    },
    {
        title: "InterviewX: AI-Based Business Model Consulting Platform",
        path: "/our-portfolio/project-8",
        imageUrl: "https://acotegroup.com/portfolio/acot-portfolio-8.png",
        category: "AI Platform"
    },
    {
        title: "Xenity Health - Medical Dashboard Development",
        path: "/our-portfolio/project-9",
        imageUrl: "https://acotegroup.com/portfolio/acot-portfolio-9.png",
        category: "Healthcare"
    }
];



function page() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredProducts = activeCategory === "All" ? portfolioProjects : portfolioProjects?.filter(product => product?.category === activeCategory)
    return (
        <section className="max-w-screen-2xl mx-auto px-2 py-10">
            <div className="flex flex-col items-center justify-center w-full  space-y-3 md:space-y-5">
                <div className="bg-[#b9b9b91f] w-fit px-6 rounded-full py-1 text-xl">
                    <p>
                        Home / <span className="font-bold text-primary">Profile</span>
                    </p>
                </div>
                <h2 className="text-[#111827] font-bold text-4xl md:text-[50px] leading-[52px] md:leading-[67px]">
                    Our Profile
                </h2>
                <p className="text-[#6B7280] md:max-w-[444px] text-xl md:text-xl text-center">
                    Offering solutions &amp; services to address a spectrum of financial issues
                </p>
            </div>


            <div className="flex flex-wrap gap-3 md:gap-[18px] mt-8 md:mt-[50px] md:p-4 justify-center md:max-w-5xl mx-auto w-full h-full">
                {categoriesData.map((category) => (
                    <button
                        key={category.label}
                        onClick={() => setActiveCategory(category.label)}
                        className={`px-6  py-2 text-sm md:text-base font-medium rounded-full border transition-all ${activeCategory === category.label
                            ? "bg-black text-white"
                            : "bg-white text-black border-[#C4C4C4] hover:bg-gray-100"
                            }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
            {/* product design */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden shadow-lg">
                {filteredProducts?.map((val, index) => (
                    <Link key={index} href={val?.path} className="p-2">
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
            <div className="flex justify-center space-x-2.5 my-10">
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