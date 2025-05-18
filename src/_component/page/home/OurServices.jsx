"use client"

import { useState } from "react";

function OurServices() {
    const [activeIndex, setActiveIndex] = useState(2); // Mobile App default
    const services = [
        {
            id: 1,
            title: "AI & ML",
            description: "Leverage Artificial Intelligence and Machine Learning to build smarter solutions.",
            image: "/our-services/services-1.jpg", // Replace with actual image if available
        },
        {
            id: 2,
            title: "Custom Software",
            description: "Tailored software development to meet your business-specific needs.",
            image: "https://acotegroup.com/our-services/services-2.jpg", // Placeholder
        },
        {
            id: 3,
            title: "Mobile App",
            description: "Build high-performance mobile apps that enhance user experience, boost engagement, and drive business success.",
            image: "https://acotegroup.com/our-services/services-3.jpg",
        },
        {
            id: 4,
            title: "Web App",
            description: "Develop robust and scalable web applications with seamless UX.",
            image: "https://acotegroup.com/our-services/services-4.jpg", // Placeholder
        },
        {
            id: 5,
            title: "Design",
            description: "Creative UI/UX design that aligns perfectly with your brand.",
            image: "https://acotegroup.com/our-services/services-5.jpg", // Placeholder
        },
        {
            id: 6,
            title: "Cloud Migration",
            description: "Migrate your infrastructure to the cloud smoothly and securely.",
            image: "https://acotegroup.com/our-services/services-6.jpg", // Placeholder
        },
        {
            id: 7,
            title: "CRM Services",
            description: "Implement and optimize CRM systems for better customer engagement.",
            image: "https://acotegroup.com/our-services/services-7.jpg", // Placeholder
        },
        {
            id: 8,
            title: "QA & Testing",
            description: "Ensure product quality through rigorous testing and QA processes.",
            image: "https://acotegroup.com/our-services/services-8.jpg", // Placeholder
        },
        {
            id: 9,
            title: "Game Development",
            description: "Design and develop engaging games across multiple platforms.",
            image: "https://acotegroup.com/our-services/services-9.jpg", // Placeholder
        },
        {
            id: 10,
            title: "IoT Development Services",
            description: "Build intelligent IoT systems to connect and automate devices.",
            image: "https://acotegroup.com/our-services/services-10.jpg", // Placeholder
        },
        {
            id: 11,
            title: "Smart Factory Services",
            description: "Implement smart factory solutions with real-time data and automation.",
            image: "https://acotegroup.com/our-services/services-11.jpg", // Placeholder
        }
    ];
    return (
        <section className="my-12 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <div className="space-y-2">
                <h3 className="text-primary text-sm uppercase tracking-wide font-semibold">our services</h3>
                <h2 className="text-[#111827] text-4xl md:text-5xl font-bold leading-tight">
                    Global software, AI innovation & IT Consulting
                </h2>
            </div>
            <p className="text-muted-foreground mt-4 max-w-xl">
                Our dedicated and highly professional team strives to provide our global clients with full-stack solutions by multiple platforms, languages in a timely manner.
            </p>

            {/* Main Grid */}
            <div className="relative lg:flex gap-x-4">
                {/* Left Nav */}
                <div className="space-y-2 px-2 lg:px-0  lg:w-4/12">
                    {services.map((service, index) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative w-full text-left px-4 py-2 hover:bg-[#F5F5F5] hover:bg-muted rounded-lg transition-colors ${activeIndex === index ? "bg-muted bg-[#F5F5F5]" : ""
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}.</span>
                                <span className={`${activeIndex === index ? "text-emerald-500 font-medium" : ""}`}>{service.title}</span>
                            </div>
                            {activeIndex === index && (
                                <div className="w-1.5 rounded-full -left-0.5 z-10 bg-primary h-full absolute top-0" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Right Outlet */}
                <div className="relative overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.05)] rounded-2xl p-6 md:p-10  w-full">
                    <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 justify-between h-full w-full items-start">
                        {/* Text Block */}
                        <div className="flex-1 space-y-6">
                            <span className="inline-flex px-4 py-1.5 bg-primary/10 border border-primary/80 w-fit rounded-lg text-base font-semibold text-primary">
                                {services[activeIndex].title.toUpperCase()}
                            </span>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold max-w-sm">{services[activeIndex].title}</h3>
                                <p className="text-muted-foreground text-lg max-w-xs">{services[activeIndex].description}</p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-full bg-primary text-white hover:bg-primary/90 h-10 px-6 transition">
                                Learn More
                            </button>
                        </div>

                        {/* Image Block */}
                        <div className="flex-1 h-full relative">
                            <div className="h-full md:absolute -right-12">
                                <img src={services[activeIndex].image} alt={services[activeIndex].title} className="h-full" />
                            </div>
                        </div>
                    </div>

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-40"></div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;