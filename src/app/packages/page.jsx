import Contactfrom from '@/_component/Contactfrom/Contactfrom';
import Link from 'next/link';
import React from 'react';
import {
    FaShoppingCart,
    FaFileAlt,
    FaExchangeAlt,
    FaRedo,
    FaUsers,
    FaListUl,
    FaAddressCard,
    FaUser,
    FaChartLine,
    FaCog,
    FaEnvelopeOpen,
    FaTruck,
    FaLowVision,
    FaNewspaper,
    FaSitemap,
    FaAssistiveListeningSystems,
    FaCubes,
    FaBook,
    FaCreditCard,
    FaCalculator,
    FaUserCircle,
    FaIdBadge,
    FaSortNumericDown,
    FaPhoneSquare, FaRssSquare, FaMapMarker
} from 'react-icons/fa';

const pricingPlans = [
    {
        name: "Premium",
        monthlyPrice: 299,
        yearlyPrice: 3300,
        isPopular: false,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: false },
            { text: "Number of Branches: 1", included: true },
            { text: "Number of Products: Unlimited", included: true },
            { text: "Number of Invoices: Unlimited", included: true },
            { text: "Number of User Account: 20", included: true },
            { text: "Number of Employees: 20", included: true }
        ],
        eCommerce: false,
        packageId: 1,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="rocket"
                className="lucide lucide-rocket"
            >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        )
    },
    {
        name: "Silver",
        monthlyPrice: 499,
        yearlyPrice: 5500,
        isPopular: true,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: false },
            { text: "Number of Branches: 2", included: true },
            { text: "Number of Products: Unlimited", included: true },
            { text: "Number of Invoices: Unlimited", included: true },
            { text: "Number of User Account: 30", included: true },
            { text: "Number of Employees: 30", included: true }
        ],
        eCommerce: false,
        packageId: 2,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="gem"
                className="lucide lucide-gem"
            >
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M11 3 8 9l4 13 4-13-3-6" />
                <path d="M2 9h20" />
            </svg>
        )
    },
    {
        name: "Gold",
        monthlyPrice: 999,
        yearlyPrice: 11000,
        isPopular: false,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: false },
            { text: "Number of Branches: 4", included: true },
            { text: "Number of Products: Unlimited", included: true },
            { text: "Number of Invoices: Unlimited", included: true },
            { text: "Number of User Account: 40", included: true },
            { text: "Number of Employees: 40", included: true }
        ],
        eCommerce: false,
        packageId: 3,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="award"
                className="lucide lucide-award"
            >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
        )
    },
    {
        name: "Platinum",
        monthlyPrice: 1499,
        yearlyPrice: 17000,
        isPopular: false,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: false },
            { text: "Number of Branches: 8", included: true },
            { text: "Number of Products: Unlimited", included: true },
            { text: "Number of Invoices: Unlimited", included: true },
            { text: "Number of User Account: 50", included: true },
            { text: "Number of Employees: 50", included: true }
        ],
        eCommerce: false,
        packageId: 5,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="crown"
                className="lucide lucide-crown"
            >
                <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                <path d="M5 21h14" />
            </svg>
        )
    },
    {
        name: "Industrial Package",
        monthlyPrice: 3000,
        yearlyPrice: 30000,
        isPopular: false,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: false },
            { text: "Number of Branches: 12", included: true },
            { text: "Number of Products: Unlimited", included: true },
            { text: "Number of Invoices: Unlimited", included: true },
            { text: "Number of User Account: Unlimited", included: true },
            { text: "Number of Employees: Unlimited", included: true }
        ],
        eCommerce: false,
        packageId: 8,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="factory"
                className="lucide lucide-factory"
            >
                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M17 7h-4" />
                <path d="M22 7h-4" />
                <path d="M10 3v3" />
                <path d="M6 7h.01" />
                <path d="M6 11h.01" />
                <path d="M6 15h.01" />
            </svg>
        )
    },
    {
        name: "Business Automation 1",
        monthlyPrice: 999,
        yearlyPrice: 10000,
        isPopular: false,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: true },
            { text: "Number of Branches: 1", included: true },
            { text: "Number of Products: Unlimited", included: true },
            { text: "Number of Invoices: Unlimited", included: true },
            { text: "Number of User Account: Unlimited", included: true },
            { text: "Number of Employees: Unlimited", included: true }
        ],
        eCommerce: true,
        packageId: 9,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="workflow"
                className="lucide lucide-workflow"
            >
                <rect width="8" height="8" x="3" y="3" rx="2" />
                <rect width="8" height="8" x="13" y="13" rx="2" />
                <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                <path d="M11 7h4a2 2 0 0 1 2 2v4" />
            </svg>
        )
    },
    {
        name: "Business Automation 2",
        monthlyPrice: 1499,
        yearlyPrice: 14400,
        isPopular: false,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: true },
            { text: "Number of Branches: 2", included: true },
            { text: "Number of Products: Unlimited", included: true },
            { text: "Number of Invoices: Unlimited", included: true },
            { text: "Number of User Account: Unlimited", included: true },
            { text: "Number of Employees: Unlimited", included: true }
        ],
        eCommerce: true,
        packageId: 11,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="cog"
                className="lucide lucide-cog"
            >
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M12 2v2" />
                <path d="M12 22v-2" />
                <path d="m17 20.66-1-1.73" />
                <path d="M11 10.27 7 3.34" />
                <path d="m20.66 17-1.73-1" />
                <path d="m3.34 7 1.73 1" />
                <path d="M14 12h8" />
                <path d="M2 12h2" />
                <path d="m20.66 7-1.73 1" />
                <path d="m3.34 17 1.73-1" />
                <path d="m17 3.34-1 1.73" />
                <path d="m11 13.73-4 6.93" />
            </svg>
        )
    },
    {
        name: "Business Automation 3",
        monthlyPrice: 1999,
        yearlyPrice: 19200,
        isPopular: false,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: true },
            { text: "Number of Branches: 4", included: true },
            { text: "Number of Products: Unlimited", included: true },
            { text: "Number of Invoices: Unlimited", included: true },
            { text: "Number of User Account: Unlimited", included: true },
            { text: "Number of Employees: Unlimited", included: true }
        ],
        eCommerce: true,
        packageId: 12,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cpu"
            >
                <rect width="16" height="16" x="4" y="4" rx="2" />
                <rect width="6" height="6" x="9" y="9" rx="1" />
                <path d="M15 4v2" />
                <path d="M15 18v2" />
                <path d="M9 4v2" />
                <path d="M9 18v2" />
                <path d="M20 9h2" />
                <path d="M2 9h2" />
                <path d="M20 15h2" />
                <path d="M2 15h2" />
            </svg>

        )
    },
    {
        name: "Automation Startup",
        monthlyPrice: 499,
        yearlyPrice: 5000,
        isPopular: true,
        features: [
            { text: "Free Trial", included: true },
            { text: "Product and Categories", included: true },
            { text: "Sale and Purchase", included: true },
            { text: "Sale Return", included: true },
            { text: "Purchase Return", included: true },
            { text: "Expenses", included: true },
            { text: "Stock Transfer", included: true },
            { text: "Quotation", included: true },
            { text: "Product Delivery", included: true },
            { text: "Stock Count and Adjustment", included: true },
            { text: "Reports", included: true },
            { text: "HRM", included: true },
            { text: "Accounting", included: true },
            { text: "Ecommerce", included: true },
            { text: "Number of Branches: 1", included: true },
            { text: "Number of Products: 3000", included: true },
            { text: "Number of Invoices: 10000", included: true },
            { text: "Number of User Account: 10", included: true },
            { text: "Number of Employees: 10", included: true }
        ],
        eCommerce: true,
        packageId: 13,
        mainIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#90ce00"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="zap"
                className="lucide lucide-zap"
            >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
        )
    }
];

const sheraziPosFeatures = [
    {
        icon: FaShoppingCart,
        title: "Easy Sales",
        description: "Easy Sales and Sales Manage System with EMI and Warranty System."
    },
    {
        icon: FaFileAlt,
        title: "Quotation",
        description: "Make a proposal for any customers that you want to propose for product."
    },
    {
        icon: FaExchangeAlt,
        title: "Product Transfer",
        description: "Easy transfer monitoring system to transfer product branch to branch."
    },
    {
        icon: FaRedo,
        title: "Product Return",
        description: "Easy purchause return and product return system to return products."
    },
    {
        icon: FaUsers,
        title: "Payroll System",
        description: "Paid employees salary easily with a lifetime record list of paid salaries."
    },
    {
        icon: FaListUl,
        title: "Customers List",
        description: "Automated customers list will be created when you make sales by customers info."
    },
    {
        icon: FaAddressCard,
        title: "Suppliers List",
        description: "You can manage and purchause products by suppliers list & can see records."
    },
    {
        icon: FaUser,
        title: "Biller Account",
        description: "You will get separate biller name in your sale list to identify who bill which sale."
    },
    {
        icon: FaChartLine,
        title: "Business Reports",
        description: "You will get 22 Business Reports to see profit, lose and improvement informations."
    },
    {
        icon: FaCog,
        title: "Settings",
        description: "You can manage and change your business information & other things here."
    },
    {
        icon: FaEnvelopeOpen,
        title: "SMS Marketing",
        description: "With this SMS Marketing tool you can send Messages to your all customers."
    },
    {
        icon: FaTruck,
        title: "Integrated Courier",
        description: "You can integrate any modern courier system like Steadfast, Patahoo etc."
    },
    {
        icon: FaLowVision,
        title: "Fraud Checking",
        description: "You can check who is a Fraud online with this fraud-checking system."
    },
    {
        icon: FaNewspaper,
        title: "Ecommerce System",
        description: "Our E-commerce System has auto-update and courier sending features."
    },
    {
        icon: FaSitemap,
        title: "Multi Branch",
        description: "That can help you to maintain all the branch in one software."
    },
    {
        icon: FaAssistiveListeningSystems,
        title: "API Settings",
        description: "With this, you can add SMS API, Courier API, Fraud API & Domain, Mail etc."
    },
    {
        icon: FaCubes,
        title: "Stock & Inventory",
        description: "Single, combo and digital products with Services Manage System."
    },
    {
        icon: FaBook,
        title: "Purchase",
        description: "Create purchase order and automatically update your daily stocks."
    },
    {
        icon: FaCreditCard,
        title: "Accounts",
        description: "Manage accounts, account statement, balance sheet easily."
    },
    {
        icon: FaCalculator,
        title: "Expense",
        description: "Manage all your Branch expenses with group wise reporting."
    },
    {
        icon: FaUserCircle,
        title: "Employee Login",
        description: "Your employee can be assigned for targeted section with Separate ID."
    },
    {
        icon: FaIdBadge,
        title: "Attendance",
        description: "Employee Attendance System that can organize your present employee."
    },
    {
        icon: FaAddressCard,
        title: "Employee",
        description: "Manage your Employees with all the information, Manage Salary etc."
    },
    {
        icon: FaSortNumericDown,
        title: "Point System",
        description: "Gift Card Point System can help you to make regulars customer."
    }
];
const contactItems = [
    {
        icon: <FaPhoneSquare className="text-green-500 text-3xl" />,
        text: "+88 01739715893",
    },
    {
        icon: <FaPhoneSquare className="text-green-500 text-3xl" />,
        text: "+88 01739715893",
    },
    {
        icon: <FaRssSquare className="text-blue-500 text-3xl" />,
        text: "www.technogenixsolutions.com",
    },
    {
        icon: <FaMapMarker className="text-red-500 text-3xl" />,
        text: "Sector #11, Road #9, House #15, Uttara-Dhaka",
    },
];


function packages() {
    return (
        <section>
            <div className=' bg-[#070806] py-10 text-white'>
                {/* Pricing Plans */}
                <div className='container mx-auto mb-20'>
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


                    <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-1 md:px-20'>


                        {pricingPlans?.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-[#1a1a1a] text-white rounded-[15px] p-8 shadow-xl min-h-[600px] animate__animated animate__fadeInUp"
                                >
                                    <h3 className="text-3xl text-center font-semibold mb-4">{product?.name}</h3>

                                    {/* Icon with Glow Effect */}
                                    <div className="relative mx-auto my-4 h-[70px] w-[70px]">
                                        {/* Blurred Glow */}
                                        <div className="absolute inset-0 rounded-full blur-md bg-[conic-gradient(#515151,#669101,#90ce00)] animate-spin-slow z-0"></div>

                                        {/* Spinning Ring */}
                                        <div className="absolute inset-0 rounded-full bg-[conic-gradient(#515151,#669101,#90ce00)] z-10 custom-spinner"></div>



                                        {/* Icon Center */}
                                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                                            <div className="h-[60px] w-[60px] rounded-full bg-black flex items-center justify-center text-2xl">
                                                {product?.mainIcon || <span>🚫</span>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="text-center mt-4">
                                        <p className="text-2xl text-[#b0ff05] mb-1 [text-shadow:0_1px_8px_black]">
                                            Starting from
                                        </p>
                                        <h2 className="text-base font-normal text-gray-200">
                                            BDT  <span className=" text-2xl font-bold">/ 6900 BDT</span>
                                        </h2>
                                    </div>

                                    {/* Features List */}
                                    <ul className="mt-6 space-y-2 text-left text-base">
                                        {product?.features?.map((val, index) => (
                                            // console.log(val)

                                            <li key={index} className="flex items-center text-white">
                                                {
                                                    val?.included ? <svg
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
                                                    </svg> :
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            data-lucide="circle-check"
                                                            className="lucide text-[#b0ff05] mr-2 text-[16px]" ><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                                }

                                                <span className={`ml-2 ${val?.included === false && "line-through text-gray-400"}`}>{val?.text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Call to Action */}
                                    <div className="text-center mt-6">
                                        <Link
                                            href="https://projoss.com/contact/"
                                            className="inline-block bg-[#90ce00] text-black px-6 py-2 rounded font-semibold hover:bg-[#7bb600] transition duration-300"
                                        >
                                            Choose Now
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* Whether the business is small or big, what are you getting from us? */}
                <div className='container mx-auto lg:px-10 mt-20'>
                    <div>
                        <div className="flex flex-wrap px-2">
                            <div className="w-full md:w-1/2 md:mx-auto text-center mb-5 space-y-4">
                                <h2 className="text-3xl font-bold">Whether the business is small or big, what are you getting from us?</h2>
                                <p className="text-sm text-gray-400">
                                    Sherazi POS is the best accounting software in Bangladesh for all types of small-medium and large organizations, businesses or warehouses to make calculations easily and quickly.
                                </p>
                            </div>



                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-10 '>
                            {sheraziPosFeatures.map((feature, index) => (
                                <div key={index} className="bg-[#1A1A1A] border-2 border-[#363740]  p-5 rounded-lg text-center">
                                    <div className="flex justify-center">
                                        <feature.icon className="text-3xl text-[#8DE806]" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-1 mt-5 text-white">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* contact  */}
                <div className=" py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {contactItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1A1A1A] border-2 border-[#363740]  rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
                                >
                                    <div className="flex justify-center mb-4">{item.icon}</div>
                                    <h4 className="text-sm font-semibold text-white">{item.text}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Frequently Asked Questions */}

                <div className=" text-gray-10 my-10">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <div className="w-full md:w-1/2 md:mx-auto text-center mb-5 space-y-4">
                            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-sm text-gray-400">
                                Have questions? We have answered common ones below.
                            </p>
                        </div>
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">
                                    What hardware does it support?
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>
                                        Barcode Scanner, barcode label printer, Receipt or Thermal Printer (Printer with ESC/POS commands), digital weighing scale etc.
                                    </p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">
                                    Can I renew my subscription on my own
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>
                                        Yes you can
                                    </p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">
                                    Do I need to purchase hosting?
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>
                                        No, you don't need to purchase hosting or install anything anywhere. Just log into your designated admin panel from anywhere, anytime and you'll be to access all your software.
                                    </p>
                                </div>
                            </details>

                        </div>
                    </div>
                </div>


            </div>
            {/* contact from  */}
            <div className='bg-transparent my-20'>
                <Contactfrom></Contactfrom>
            </div>
        </section>
    );
}

export default packages;