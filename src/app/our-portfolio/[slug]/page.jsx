import ProductPosCart from "@/_component/Proudct/ProductPosCart";
import { CiShoppingCart } from "react-icons/ci";

async function page({ params }) {
    const { slug } = await params
    console.log(slug)

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 bg-white">
                {/* Image Section */}
                <div className="space-y-6">
                    <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src="https://acotegroup.com/products/2/school-mgt-02.png"
                            alt="School Management Software"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="space-y-6">
                    {/* Title and Description */}
                    <div className="space-y-4">
                        <h2 className="text-[#111827] font-bold text-4xl md:text-[50px] leading-[52px] md:leading-[67px]">
                            School Management Software
                        </h2>
                        <p className="text-[#6B7280] text-lg">
                            By Professionals School Management App Development Company for Mac, Linux, and DOS. Online Shipping Software for Mobile Usage. No reviews yet.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
                        <ul className="space-y-2">
                            {[
                                "100% Working Functionality",
                                "Multi-language Support",
                                "Professional Development Team",
                                "24/7 Online Chat Support",
                                "100% Activation Online Globally",
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <svg
                                        className="h-5 w-5 text-green-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <button className="bg-green-500 text-white px-8 py-3 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                            <CiShoppingCart size={25} />
                            <p className="ml-2">Contact Sales</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* Platform Screenshots */}
            <div className="container mx-auto space-y-8 px-4 py-10">
                <h2 className="text-black font-semibold text-3xl md:text-[40px] capitalize tracking-tight leading-[32px] md:leading-[58px] text-center">
                    Platform Screenshots
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["01", "02", "03"].map((num) => (
                        <div
                            key={num}
                            className="relative h-64 bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={`https://acotegroup.com/products/2/school-mgt-${num}.png`}
                                alt={`Screenshot ${num}`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Specifications */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Technical Specifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Frontend Specs */}
                        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm transition hover:shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                                Frontend
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Responsive design with HTML5/CSS3",
                                    "Custom UI/UX using Bootstrap",
                                    "React or Angular integration (optional)",
                                    "Multi-language interface support",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg
                                            className="h-5 w-5 text-green-600 mr-2 mt-1"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Backend Specs */}
                        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm transition hover:shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                                Backend
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Custom-built backend with Node.js or PHP",
                                    "MySQL or MongoDB database integration",
                                    "Role-based access and employee data encryption",
                                    "API for attendance & payroll integration",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg
                                            className="h-5 w-5 text-green-600 mr-2 mt-1"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Cart */}
            <ProductPosCart />
        </div>
    );
}

export default page;