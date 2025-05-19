
"use client"

import { useState } from "react";



   const categoriesData = [
        { label: "All" },
        { label: "Graphics Design" },
        { label: "Development" },
        { label: "UX/UI Design" },
        { label: "SaaS & Dashboard" },
        { label: "AI/ML" }
    ];
function page() {
    const [activeCategory, setActiveCategory] = useState("All");
    return (
        <section>
            <div class="flex flex-col items-center justify-center w-full mt-10 md:mt-20 space-y-3 md:space-y-5">
                <div class="bg-[#b9b9b91f] w-fit px-6 rounded-full py-1 text-xl">
                    <p>Home / <span class="font-bold text-primary">Profile</span></p>
                </div>
                <h2 class="text-[#111827] font-bold text-4xl md:text-[50px] leading-[52px] md:leading-[67px]">
                    Our Profile
                </h2>
                <p class="text-[#6B7280] md:max-w-[444px] text-xl md:text-xl text-center">
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

        </section>
    );
}

export default page;