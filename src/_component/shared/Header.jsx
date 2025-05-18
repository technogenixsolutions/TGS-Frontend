"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomButton from "../ButtonCustom/Button";
import Image from "next/image";
import Navbartop from "./Navbartop";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Products", path: "/our-products" },
    { title: "Portfolio", path: "/our-portfolio" },
    { title: "About", path: "/about-us" },
    { title: "Contact", path: "/contact-us" },
    { title: "Career", path: "/careers" },
    { title: "Events", path: "/events" }
  ];

  const services = [
    {
      category: "AI/ML Solution",
      items: [
        {
          name: "Machine Learning",
          description: "Driving smarter decisions through advanced predictive algorithms.",
          img: "https://i.postimg.cc/LsrwD6rJ/system.png",
        },
        {
          name: "NLP",
          description: "Valuable insights from the web efficiently & securely.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Predictive Analytics",
          description: "Integrating diverse data streams for holistic AI-powered experiences.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Computer Vision",
          description: "Empowering machines to see, understand, & analyze the world.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
      ],
    },
    {
      category: "Developments",
      items: [
        {
          name: "Mobile App Development",
          description: "Leading Mobile Application Development Services Provider",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Custom Software",
          description: "Software Development As A Service (SaaS) Corporation",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Web Development",
          description: "Building scalable, secure, & user-friendly web solutions.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "UI/UX Design",
          description: "Designing seamless, user-centric digital experiences.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
      ],
    },
    {
      category: "Cyber Security",
      items: [
        {
          name: "Network Security",
          description: "Protecting your network from unauthorized access and threats.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Endpoint Security",
          description: "Securing devices like computers and smartphones from cyber threats.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Cloud Security",
          description: "Ensuring the safety of your cloud-based systems and data.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Email Security",
          description: "Preventing phishing and other email-based threats.",
          img: "https://i.postimg.cc/LsrwD6rJ/system.png",
        },
      ],
    },
    {
      category: "BPO",
      items: [
        {
          name: "Technical Support",
          description: "Fast and reliable technical support for your needs",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Customer Support",
          description: "Transforming raw data into actionable insights.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "Back-office Support",
          description: "Crafting intuitive Back-office Support for enhanced user navigation.",
          img: "https://i.postimg.cc/cLq6Gs7S/picture.png",
        },
        {
          name: "HR Services",
          description: "HR Services for your business needs.",
          img: "https://i.postimg.cc/LsrwD6rJ/system.png",
        },
      ],
    },
  ];

  const pathname = usePathname();
  return (
    <>
      <Navbartop></Navbartop>
      <nav className="bg-white relative  ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="relative w-40 h-10">
            <Image
              src="https://i.postimg.cc/qgr6YXX6/Techno-Genix.webp"
              alt="Techno Genix Logo"
              fill  // এটি height ও width কে parent div থেকে নেয়
              className="object-contain"
            />
          </div>
          {/* dekstop Navigation Menu */}
          <div id="mega-menu-full" className="items-center justify-between font-normal gap-x-6  w-full hidden md:flex md:w-auto ">
            <ul className="flex  lg:gap-x-8 items-center">
              {navLinks.map((val) => (
                val.title === "Services" ? (
                  <li key={val.title} className=" group cursor-pointer">
                    <Link
                      href={val.path}
                      className={`inline-flex items-center gap-2  transition-all duration-300 ${pathname === val.path ? 'font-bold text-primary' : 'text-black'
                        }`}
                    >
                      {val.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down transition-transform duration-300 group-hover:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </Link>

                    {/* Dropdown menu for Services */}
                    <section
                      className="absolute left-1/2 w-full top-full transform -translate-x-1/2 translate-y-10 
  delay-100 rounded-lg max-w-screen-xl bg-white p-4 shadow-2xl shadow-black 
  z-10 transition-all ease-in opacity-0 group-hover:translate-y-0 
  group-hover:opacity-100 group-hover:block"
                    >
                      <div className="grid hidden max-w-screen-xl px-4 py-4 mx-auto text-gray-900  grid-cols-4 md:px-6">
                        {services.map(({ category, items }) => (
                          <div key={category} className="">
                            <h2 className="text-xl font-bold mb-3 underline">{category}</h2>
                            <ul className="">
                              {items.map(({ name, description, img }) => (
                                <div key={name} className="flex  hover:bg-gray-100 p-2 rounded-lg">
                                  <div className="relative w-12 h-12 mt-1.5">
                                    <Image
                                      src={img}
                                      alt="Each link Logo"
                                      fill  // এটি height ও width কে parent div থেকে নেয়
                                      className="object-contain"
                                    />
                                  </div>
                                  <li key={name}>
                                    <a
                                      href="#"
                                      className="block p-3  "
                                    >
                                      <div className="font-semibold">{name}</div>
                                      <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {description.slice(0, 50)}...
                                      </span>
                                    </a>
                                  </li>
                                </div>
                              ))}

                              <li className="font-medium hover:underline">All Services</li>

                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                  </li>
                ) : (
                  <li key={val.title}>
                    <Link
                      href={val.path}
                      className={`${pathname === val.path ? 'text-primary font-bold' : 'text-black'} transition-all`}
                    >
                      {val.title}
                    </Link>
                  </li>
                )
              ))}
            </ul>



            <CustomButton>Book an appointment</CustomButton>
          </div>
          {/* mobile Navigation Menu */}
          <div className="lg:hidden">
            {/* mobile menu icon  */}
            <button onClick={() => setToggle(!toggle)} className='lg:hidden'>
              <div
                className={`space-y-[7px]`}
              >
                <span className="h-[2.8px] w-6 block bg-black "></span>
                <span className={`${toggle ? "ml-0" : "ml-2"} h-[2.8px] w-6 block bg-black`}></span>
                <span className="h-[2.8px] w-6 block bg-black"></span>
              </div>
            </button>

            {/* mobile side bar  */}
            {/* Overlay */}
            {toggle && (
              <div
                className="fixed inset-0 bg-black opacity-75 backdrop-blur-sm z-40"
                onClick={() => setToggle(false)}
              />
            )}

            {/* Sidebar */}
            <div
              className={`fixed left-0 top-0 min-h-screen w-64 bg-white text-black transform ${toggle ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 z-50 shadow-lg`}
            >
              <ul className=" text-black pl-5 pt-8 space-y-4">
                {navLinks.map((val) => (
                  val.title === "Services" ? (
                    <li key={val.title} className=" group cursor-pointer">
                      <Link
                        href={val.path}
                        className={`inline-flex items-center gap-2  transition-all duration-300 ${pathname === val.path ? 'font-bold text-primary' : 'text-black'
                          }`}
                      >
                        {val.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevron-down transition-transform duration-300 group-hover:rotate-180"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </Link>

                      {/* Dropdown menu for Services */}
                      <section
                        className="absolute left-1/2 w-full top-full transform -translate-x-1/2 translate-y-10 
  delay-100 rounded-lg max-w-screen-xl bg-white p-4 shadow-2xl shadow-black 
  z-10 transition-all ease-in opacity-0 group-hover:translate-y-0 
  group-hover:opacity-100 group-hover:block"
                      >
                        <div className="grid max-w-screen-xl px-4 py-4 mx-auto text-gray-900  grid-cols-4 md:px-6">
                          {services.map(({ category, items }) => (
                            <div key={category} className="">
                              <h2 className="text-xl font-bold mb-3 underline">{category}</h2>
                              <ul className="">
                                {items.map(({ name, description, img }) => (
                                  <div key={name} className="flex  hover:bg-gray-100 p-2 rounded-lg">
                                    <div className="relative w-12 h-12 mt-1.5">
                                      <Image
                                        src={img}
                                        alt="Each link Logo"
                                        fill  // এটি height ও width কে parent div থেকে নেয়
                                        className="object-contain"
                                      />
                                    </div>
                                    <li key={name}>
                                      <a
                                        href="#"
                                        className="block p-3  "
                                      >
                                        <div className="font-semibold">{name}</div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                          {description.slice(0, 50)}...
                                        </span>
                                      </a>
                                    </li>
                                  </div>
                                ))}

                                <li className="font-medium hover:underline">All Services</li>

                              </ul>

                            </div>
                          ))}
                        </div>
                      </section>
                    </li>
                  ) : (
                    <li key={val.title}>
                      <Link
                        href={val.path}
                        className={`${pathname === val.path ? 'text-primary font-bold' : 'text-black'} transition-all`}
                      >
                        {val.title}
                      </Link>
                    </li>
                  )
                ))}
                <CustomButton>Book an appointment</CustomButton>

              </ul>
            </div>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
