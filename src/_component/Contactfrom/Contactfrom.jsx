function Contactfrom() {
    const info = [
    "We will contact you within 24 hours",
    "We will clarify your expectations, business objectives, and project requirements",
    "We will develop and accept a proposal",
    "Following that, our partnership can begin",
]
    return (
        <div>
                <div className="container mx-auto flex flex-col-reverse md:flex-row gap-14 items-start my-16">
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
                            {info?.map((text, index) => (
                                <div key={index} className="flex items-start">
                                    {/* Number circle */}
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#21B24B] bg-green-100 text-green-500 flex items-center justify-center mr-4 text-sm font-semibold">
                                        {index + 1}
                                    </div>

                                    {/* Description text */}
                                    <p className="text-base text-gray-700 font-light leading-snug md:leading-[20.8px]">
                                        {text}
                                    </p>
                                </div>


                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-gray-600 text-lg">Drop us a line</h3>
                            <p className="text-lg font-medium">technogenixsolutions@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="text-gray-600 text-lg">Main Office</h3>
                            <p className="text-lg font-medium leading-snug">
                                Sector #11, Road #9, House #15, Uttara-Dhaka
                            </p>
                        </div>
                        <div>
                            <h3 className="text-gray-600 text-lg">Contacts</h3>
                            <p className="text-lg font-medium">+88 01739715893</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactfrom;