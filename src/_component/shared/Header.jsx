"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomButton from "../ButtonCustom/Button";
import Image from "next/image";
import Navbartop from "./Navbartop";

const Navbar = () => {
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
          <div id="mega-menu-full" className="items-center justify-between font-normal gap-x-6 hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex gap-8 items-center">
              {navLinks.map((val) => (
                val.title === "Services" ? (
                  <li key={val.title} className=" group cursor-pointer">
                    <Link
                      href={val.path}
                      className={`inline-flex items-center gap-2 font-bold transition-all duration-300 ${pathname === val.path ? 'text-primary' : 'text-black'
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
                    <ul className="absolute left-0 border hidden w-full rounded-md bg-white p-4 shadow-md 
  group-hover:block z-10
  transition-all duration-500 ease-in-out
  transform translate-y-20 group-hover:translate-y-0 
  opacity-0 group-hover:opacity-100">
                      <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                          <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                              <div className="font-semibold">Online Stores</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're already using.
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                              <div className="font-semibold">Segmentation</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're already using.
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                              <div className="font-semibold">Marketing CRM</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're already using.
                              </span>
                            </a>
                          </li>
                        </ul>

                        <ul>
                          <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                              <div className="font-semibold">Online Stores</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're already using.
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                              <div className="font-semibold">Segmentation</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're already using.
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                              <div className="font-semibold">Marketing CRM</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're already using.
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </ul>
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
        </div>

      </nav>
    </>
  );
};

export default Navbar;
