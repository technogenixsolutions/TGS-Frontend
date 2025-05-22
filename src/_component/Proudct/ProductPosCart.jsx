import MonthlyYearly from "./MonthlyYearly";

function ProductPosCart() {
    return (

        <section className=" mb-20">
            <div>
                <div className="text-center mb-12 pt-8">
                    <h2 className="text-3xl sm:text-[25px] font-bold text-black mb-4 sm:mb-3">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your need. All plans include free 2 images generated. <br className="hidden sm:block" />
                        No credit card required on Free trial.
                    </p>
                </div>

            </div>
            <div className="flex flex-col md:flex-row  gap-5 lg:gap-x-10 items-center md:justify-center">
                <div className="sm:p-4 p-6 rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative border-2 border-[#E2136E] bg-[#FEE9F3] text-white">
                    <div className="text-black">
                        <div className="flex sm:gap-3 gap-4 items-center mb-7 sm:mb-4">
                            <span className="p-3 sm:p-2 rounded-xl bg-white">
                                <img src="https://i.postimg.cc/ZnXqK4JB/paypal-icon.png" alt="Plan icon" className="w-6 h-6 sm:w-5 sm:h-5" />
                            </span>
                            <div>
                                <h3 className="sm:text-xl text-2xl font-semibold text-[#E1146E]">International</h3>
                                <p className="sm:text-xs text-sm pt-1 text-gray-600">For bKash/Nagad Payment</p>
                            </div>
                        </div>

                        <div className="sm:mt-3 mt-5">
                            <span className="sm:text-2xl text-3xl lg:text-4xl font-medium text-black">$150</span>
                            <span className="sm:text-xs text-sm ml-1 text-gray-600">/ onetime</span>
                        </div>

                        <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                            <li className="flex items-start">
                                <span className="mr-2 text-green-500">✔</span>
                                <span className="text-base sm:text-sm font-normal leading-7 text-gray-700">10 Images Generation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-green-500">✔</span>
                                <span className="text-base sm:text-sm font-normal leading-7 text-gray-700">High-quality Downloads</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-green-500">✔</span>
                                <span className="text-base sm:text-sm font-normal leading-7 text-gray-700">All Free Tier Features</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-green-500">✔</span>
                                <span className="text-base sm:text-sm font-normal leading-7 text-gray-700">Priority Support Via Email</span>
                            </li>
                        </ul>
                    </div>

                    <button className="mt-6 sm:mt-8 font-semibold py-2.5 sm:py-2 rounded-lg transition-all duration-200 w-full bg-[#E1146E] text-white">
                        Get Started Now
                    </button>
                </div>
                <div className="sm:p-4 p-6 rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative border-2 border-[rgb(74,226,19)] bg-[#ecfee9] text-white">
                    <div className="text-black">
                        <div className="flex sm:gap-3 gap-4 items-center mb-7 sm:mb-4">
                            <span className="p-3 sm:p-2 rounded-xl bg-white">
                                <img src="https://i.postimg.cc/YCbJ18m8/BKash-Logo-wine.png" alt="Plan icon" className="w-6 h-6 sm:w-5 sm:h-5" />
                            </span>
                            <div>
                                <h3 className="sm:text-xl text-2xl font-semibold text-[rgb(74,226,19)]">Bangladeh</h3>
                                <p className="sm:text-xs text-sm pt-1 text-gray-600">For bKash/Nagad Payment</p>
                            </div>
                        </div>

                        <div className="sm:mt-3 mt-5">
                            <span className="sm:text-2xl text-3xl lg:text-4xl font-medium text-black">৳150</span>
                            <span className="sm:text-xs text-sm ml-1 text-gray-600">/ onetime</span>
                        </div>

                        <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                            <li className="flex items-start">
                                <span className="mr-2 text-green-500">✔</span>
                                <span className="text-base sm:text-sm font-normal leading-7 text-gray-700">10 Images Generation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-green-500">✔</span>
                                <span className="text-base sm:text-sm font-normal leading-7 text-gray-700">High-quality Downloads</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-green-500">✔</span>
                                <span className="text-base sm:text-sm font-normal leading-7 text-gray-700">All Free Tier Features</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-green-500">✔</span>
                                <span className="text-base sm:text-sm font-normal leading-7 text-gray-700">Priority Support Via Email</span>
                            </li>
                        </ul>
                    </div>

                    <button className="mt-6 sm:mt-8 font-semibold py-2.5 sm:py-2 rounded-lg transition-all duration-200 w-full bg-[rgb(74,226,19)] text-white">
                        Get Started Now
                    </button>
                </div>



            </div>
            {/* MonthlyYearly cart create  */}
            <MonthlyYearly></MonthlyYearly>

        </section>
    );
}

export default ProductPosCart;