import Image from "next/image";
import React from "react";

export default function Footer() {
  return <footer className="bg-footer">
    <div className="max-w-screen-2xl mx-auto ">
      <div >
        <div className="py-11 w-full  px-4 md:px-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 ">

            {/* Company Info */}
            <div className="">
              <div className="space-y-3">
                <div className="relative w-40 h-10">
                  <Image
                    src="https://i.postimg.cc/qgr6YXX6/Techno-Genix.webp"
                    alt="Techno Genix Logo"
                    fill  // এটি height ও width কে parent div থেকে নেয়
                    className="object-contain"
                  />
                </div>
                <p className="text-base font-light  text-white md:max-w-80">
                  Welcome to Acote- your partner in innovation. We deliver smart AI and Big Data solutions,
                  secure software and web development, reliable cybersecurity, dependable BPO services,
                  and creative digital strategies. We’re here to power your digital transformation and business
                  growth from design to deployment.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="">
              <div className="">
                <h1 className="text-white text-2xl font-normal">Quick Links</h1>
              </div>
              <div>
                <ul className="text-[#91A3B1] space-y-4 mt-6">
                  <li className="hover:text-white"><a href="/services/ai-ml-solutions">AI/ML Solution</a></li>
                  <li className="hover:text-white"><a href="/services/web-development">Software Development</a></li>
                  <li className="hover:text-white"><a href="/services">BPO</a></li>
                  <li className="hover:text-white"><a href="/services/digital-marketing">Digital Marketing</a></li>
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className="">
              <div className="">
                <h1 className="text-white text-2xl font-normal">Resources</h1>
              </div>
              <div>
                <ul className="text-[#91A3B1] space-y-4 mt-6">
                  <li className="hover:text-white"><a href="/about-us">About</a></li>
                  <li className="hover:text-white"><a href="/our-products">Products</a></li>
                  <li className="hover:text-white"><a href="/careers">Careers</a></li>
                  <li className="hover:text-white"><a href="/events">Events</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <div className="">
                <h1 className="text-white text-2xl font-normal">Follow Us</h1>
              </div>
              <div className="mt-6 text-white text-base md:max-w-96">
                <ul className="space-y-4">
                  <li className="flex gap-4 items-center">
                    {/* Location Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 18" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.174438 7.59894C0.174438 3.5208 3.58233 0.224609 7.70453 0.224609C11.8383 0.224609 15.2462 3.5208 15.2462 7.59894C15.2462 9.65396 14.4989 11.5618 13.2687 13.1789C11.9117 14.9626 10.239 16.5168 8.35625 17.7366C7.92534 18.0186 7.53646 18.0398 7.06354 17.7366C5.17006 16.5168 3.4974 14.9626 2.15195 13.1789C0.920921 11.5618 0.174438 9.65396 0.174438 7.59894ZM5.22281 7.82832C5.22281 9.19449 6.33761 10.269 7.70453 10.269C9.07233 10.269 10.1979 9.19449 10.1979 7.82832C10.1979 6.47278 9.07233 5.34598 7.70453 5.34598C6.33761 5.34598 5.22281 6.47278 5.22281 7.82832Z" fill="#21B24B" />
                    </svg>
                    <p>
                      Sector #11, Road #9, House #15, Uttara-Dhaka
                      {/* Main HQ :<br />
                      DTX Business Center, 6th Floor, Plot no .1176 &amp; 1543 Pragati Sarani Road, Kuril, Dhaka 1229 */}
                    </p>
                  </li>

                  {/* Phone */}
                  <li className="flex gap-4 items-center">
                    {/* Add your phone SVG here */}
                    <p><a href="tel:+88 01739715893">+88 01739715893</a></p>
                  </li>

                  {/* Email */}
                  <li className="flex gap-4 items-center">
                    {/* Add your email SVG here */}
                    <p><a href="mailto:info@acotegroup.com">technogenixsolutions@gmail.com</a></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Footer Bottom Bar */}
      <hr className="text-gray-300 opacity-35" />
      <div className="text-center md:flex justify-between text-white py-5">
        <p>© Copyright 2025 Acote Group | All Rights Reserved.</p>
        <div className="md:flex gap-x-4 mt-3 md:mt-0">
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </div>

  </footer>;
}
