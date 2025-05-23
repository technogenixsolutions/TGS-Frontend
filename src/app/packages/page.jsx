import React from 'react';
const pricingPlans = [
    {
        name: "Premium",
        monthlyPrice: 299,
        yearlyPrice: 3300,
        isPopular: false,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Number of Branches: 1",
            "Number of Products: Unlimited",
            "Number of Invoices: Unlimited",
            "Number of User Account: 20",
            "Number of Employees: 20"
        ],
        eCommerce: false,
        packageId: 1
    },
    {
        name: "Silver",
        monthlyPrice: 499,
        yearlyPrice: 5500,
        isPopular: true,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Number of Branches: 2",
            "Number of Products: Unlimited",
            "Number of Invoices: Unlimited",
            "Number of User Account: 30",
            "Number of Employees: 30"
        ],
        eCommerce: false,
        packageId: 2
    },
    {
        name: "Gold",
        monthlyPrice: 999,
        yearlyPrice: 11000,
        isPopular: false,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Number of Branches: 4",
            "Number of Products: Unlimited",
            "Number of Invoices: Unlimited",
            "Number of User Account: 40",
            "Number of Employees: 40"
        ],
        eCommerce: false,
        packageId: 3
    },
    {
        name: "Platinum",
        monthlyPrice: 1499,
        yearlyPrice: 17000,
        isPopular: false,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Number of Branches: 8",
            "Number of Products: Unlimited",
            "Number of Invoices: Unlimited",
            "Number of User Account: 50",
            "Number of Employees: 50"
        ],
        eCommerce: false,
        packageId: 5
    },
    {
        name: "Industrial Package",
        monthlyPrice: 3000,
        yearlyPrice: 30000,
        isPopular: false,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Number of Branches: 12",
            "Number of Products: Unlimited",
            "Number of Invoices: Unlimited",
            "Number of User Account: Unlimited",
            "Number of Employees: Unlimited"
        ],
        eCommerce: false,
        packageId: 8
    },
    {
        name: "Business Automation 1",
        monthlyPrice: 999,
        yearlyPrice: 10000,
        isPopular: false,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Ecommerce",
            "Number of Branches: 1",
            "Number of Products: Unlimited",
            "Number of Invoices: Unlimited",
            "Number of User Account: Unlimited",
            "Number of Employees: Unlimited"
        ],
        eCommerce: true,
        packageId: 9
    },
    {
        name: "Business Automation 2",
        monthlyPrice: 1499,
        yearlyPrice: 14400,
        isPopular: false,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Ecommerce",
            "Number of Branches: 2",
            "Number of Products: Unlimited",
            "Number of Invoices: Unlimited",
            "Number of User Account: Unlimited",
            "Number of Employees: Unlimited"
        ],
        eCommerce: true,
        packageId: 11
    },
    {
        name: "Business Automation 3",
        monthlyPrice: 1999,
        yearlyPrice: 19200,
        isPopular: false,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Ecommerce",
            "Number of Branches: 4",
            "Number of Products: Unlimited",
            "Number of Invoices: Unlimited",
            "Number of User Account: Unlimited",
            "Number of Employees: Unlimited"
        ],
        eCommerce: true,
        packageId: 12
    },
    {
        name: "Automation Startup",
        monthlyPrice: 499,
        yearlyPrice: 5000,
        isPopular: true,
        features: [
            "Free Trial",
            "Product and Categories",
            "Sale and Purchase",
            "Sale Return",
            "Purchase Return",
            "Expenses",
            "Stock Transfer",
            "Quotation",
            "Product Delivery",
            "Stock Count and Adjustment",
            "Reports",
            "HRM",
            "Accounting",
            "Ecommerce",
            "Number of Branches: 1",
            "Number of Products: 3000",
            "Number of Invoices: 10000",
            "Number of User Account: 10",
            "Number of Employees: 10"
        ],
        eCommerce: true,
        packageId: 13
    }
];
function packages() {
    return (
        <section className=' bg-[#070806] py-10 text-white'>
            <div className='container mx-auto'>
                <div className="space-y-3 text-center mb-3 ">
                    <h2 className="text-3xl font-bold">Our <span className='text-[rgb(176,255,5)]'>Pricing</span> Plans</h2>
                    <p>
                        আপনার যথাযথ এককালীন রেজিষ্ট্রেশন ফি দিয়ে আপনার Lifetime License টি নিশ্চিত করুন, যাতে আপনার একাউন্ট এবং একাউন্ট এর তথ্য আজীবন সুরক্ষিত থাকে।
                    </p>
                    <div className='inline-flex  rounded-lg bg-white mt-10'>
                        <button className='text-base font-medium px-12 py-3 cursor-pointer rounded-lg text-[#404EED] border-gray-200 hover:border-gray-200 border'>Monthly</button>
                        {/* <hr className="w-[1px] h-8 bg-gray-700 "></hr> */}
                        <button className='text-base text-gray-800 font-medium cursor-pointer px-12 py-3 rounded-lg border-gray-200 hover:border-gray-200 border'>Yearly 20%</button>
                    </div>
                </div>


                <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-20'>


                    {pricingPlans?.map((product, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-[#1a1a1a] text-white rounded-[15px] p-8 shadow-xl min-h-[600px] animate__animated animate__fadeInUp"
                            >
                                <h3 className="text-3xl font-semibold mb-4">Basic</h3>

                                {/* Icon with Glow Effect */}
                                <div className="relative mx-auto my-4 h-[70px] w-[70px]">
                                    {/* Blurred Glow */}
                                    <div className="absolute inset-0 rounded-full blur-md bg-[conic-gradient(#515151,#669101,#90ce00)] animate-spin-slow z-0"></div>

                                    {/* Spinning Ring */}
                                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(#515151,#669101,#90ce00)] animate-spin-slow z-10"></div>

                                    {/* Icon Center */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                                        <div className="h-[60px] w-[60px] rounded-full bg-black flex items-center justify-center text-2xl">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-[#b0ff05]"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="text-center mt-4">
                                    <p className="text-2xl text-[#b0ff05] mb-1 [text-shadow:0_1px_8px_black]">
                                        Starting from
                                    </p>
                                    <h2 className="text-4xl font-bold">
                                        $69 <span className="text-base font-normal">/ 6900 BDT</span>
                                    </h2>
                                    <p className="text-gray-300 mt-3 text-base">
                                        Ideal for small businesses, portfolios, and freelancers on a budget.
                                    </p>
                                </div>

                                {/* Features List */}
                                <ul className="mt-6 space-y-2 text-left text-base">
                                    {product?.features?.map((val, index) => (
                                        <li key={index} className="flex items-center text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                data-lucide="circle-check"
                                                className="lucide text-[#b0ff05] mr-2 text-[16px]"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                            <span className="ml-2">{val}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Call to Action */}
                                <div className="text-center mt-6">
                                    <a
                                        href="https://projoss.com/contact/"
                                        className="inline-block bg-[#90ce00] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#7bb600] transition duration-300"
                                    >
                                        Choose Now
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default packages;