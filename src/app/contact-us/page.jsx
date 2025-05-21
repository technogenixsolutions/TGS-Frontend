const ex = [
    {
        count: '8+',
        label: 'Tech Partners',
        img: 'https://acotegroup.com/contact-us/partner-icon.png',
    },
    {
        count: '4+',
        label: 'Years of Experience',
        img: 'https://acotegroup.com/contact-us/experience-icon.png',
    },
    {
        count: '20+',
        label: 'Countries Served',
        img: 'https://acotegroup.com/contact-us/countries-icon.png',
    },
    {
        count: '200+',
        label: 'Projects Completed',
        img: 'https://acotegroup.com/contact-us/projects-icon.png',
    },
    {
        count: '146+',
        label: 'Professionals',
        img: 'https://acotegroup.com/contact-us/professional-icon.png',
    },
]
function page() {
    return (
        <section className="mb-10">
            {/* hero  */}
            <div>
                <div className="relative w-full h-[400px] md:h-[627px] bg-[#0a1929] text-white mb-10 md:mb-[183px]">
                    <img
                        alt="Office background"
                        className="object-cover w-full h-full"
                        src="https://acotegroup.com/acote-banner.png"
                    />

                    <div className="absolute inset-0 z-10 px-4 md:px-0">
                        <div className="container mx-auto h-full md:relative py-[104px]">
                            {/* Heading + CTA */}
                            <div>
                                <h1 className="text-5xl md:text-[75px] font-bold tracking-wide">
                                    Let's work
                                    <div className="flex items-center gap-2">
                                        <div className="w-[61px] h-[8px] bg-primary"></div>
                                        <span>together.</span>
                                    </div>
                                </h1>

                                <div className="mt-10 md:mt-[60px]">
                                    <button className="bg-primary px-5 py-2 rounded-lg">
                                        Leave us a message
                                    </button>
                                </div>
                            </div>

                            {/* Stats Card dekstop device */}
                            <div className="hidden md:block md:absolute z-10 -bottom-28 left-0 right-0 bg-white rounded-[30px] mx-auto max-w-[90%] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.02),0px_-2px_45px_-5px_rgba(0,0,0,0.06)]">
                                <div className="grid grid-cols-1 md:grid-cols-5 py-9">
                                    {ex?.map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center justify-center">
                                            <div className="h-16 w-16 relative">
                                                <img
                                                    alt={item.label}
                                                    src={item.img}
                                                    className="absolute inset-0 h-full w-full object-contain"
                                                />
                                            </div>
                                            <div className="space-y-2 text-center mt-4 md:mt-6">
                                                <p className="text-primary font-bold text-[28.36px]">{item.count}</p>
                                                <p className="text-[#010101] text-base tracking-[-0.158px]">{item.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stats Card mobile device */}
                <div className="grid grid-cols-1  sm:grid-cols-2 gap-y-10  md:hidden">
                    {ex?.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center">
                            <div className="h-16 w-16 relative">
                                <img
                                    alt={item.label}
                                    src={item.img}
                                    className="absolute inset-0 h-full w-full object-contain"
                                />
                            </div>
                            <div className="space-y-2 text-center mt-4 md:mt-6">
                                <p className="text-primary font-bold text-[28.36px]">{item.count}</p>
                                <p className="text-[#010101] text-base tracking-[-0.158px]">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* from  */}
            <div className="container mx-auto flex flex-col-reverse md:flex-row gap-14 items-start my-10">
                {/* Contact Form */}
                <div className="flex-1 w-full bg-[#F2F2F7] p-6 md:p-9 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-3">How can we help you?</h2>
                    <p className="text-lg mb-8 text-gray-700">
                        Describe your request and tell us about your project idea
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-base mb-2 font-medium">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-base mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-base mb-2 font-medium">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-base mb-2 font-medium">
                                    Service Required <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        className="w-full p-3 border border-gray-300 rounded-lg pr-10 appearance-none"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select your Service
                                        </option>
                                        <option>Web Development</option>
                                        <option>Mobile App Development</option>
                                        <option>UI/UX Design</option>
                                        <option>Digital Marketing</option>
                                        <option>Consulting</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 9l6 6 6-6"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-base mb-2 font-medium">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-base mb-2 font-medium">Other Contact</label>
                                <input
                                    type="text"
                                    name="otherContact"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-base mb-2 font-medium">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            ></textarea>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="acceptTerms" className="mr-2" />
                            <label htmlFor="acceptTerms" className="text-sm">
                                I accept the{" "}
                                <a href="#" className="underline text-blue-600">
                                    Terms
                                </a>{" "}
                                &amp;{" "}
                                <a href="#" className="underline text-blue-600">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white rounded-full px-6 py-3 hover:bg-blue-700 transition"
                        >
                            Leave us a message
                        </button>
                    </form>
                </div>

                {/* Right Info Section */}
                <div className=" px-2 md:px-0 md:w-[500px] w-full space-y-10">
                    <div>
                        <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1E2228] mb-6">
                            What we'll do next?
                        </h2>
                        <div className="space-y-5">
                            {[
                                "We will contact you within 24 hours",
                                "We will clarify your expectations, business objectives, and project requirements",
                                "We will develop and accept a proposal",
                                "Following that, our partnership can begin",
                            ].map((text, index) => (
                                <div class="flex items-start">
                                    {/* <!-- Number circle --> */}
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full border border-[#21B24B] bg-green-100 text-green-500 flex items-center justify-center mr-4 text-sm font-semibold">
                                        {index + 1}
                                    </div>

                                    {/* <!-- Description text --> */}
                                    <p class="text-base text-gray-700 font-light leading-snug md:leading-[20.8px]">
                                        {text}
                                    </p>
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-gray-600 text-lg">Drop us a line</h3>
                            <p className="text-lg font-medium">sales@acotegroup.com</p>
                        </div>
                        <div>
                            <h3 className="text-gray-600 text-lg">Main Office</h3>
                            <p className="text-lg font-medium leading-snug">
                                6th Floor, DTX Business Center,<br />
                                Pragati Sarani Road, Dhaka 1229
                            </p>
                        </div>
                        <div>
                            <h3 className="text-gray-600 text-lg">Contacts</h3>
                            <p className="text-lg font-medium">+88 01758 388865</p>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
}

export default page;