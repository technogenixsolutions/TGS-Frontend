import ProductPosCart from "@/_component/Proudct/ProductPosCart";
import { CiShoppingCart } from "react-icons/ci";

async function page({ params }) {
    const { slug } = await params
    console.log(slug)

    return (
        <div className="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 bg-white">
                {/* <!-- Image Section --> */}
                <div class="space-y-6">
                    <div class="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src="https://acotegroup.com/products/2/school-mgt-02.png"
                            alt="School Management Software"
                            class="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* <!-- Text Content Section --> */}
                <div class="space-y-6">
                    {/* <!-- Title and Description --> */}
                    <div class="space-y-4">
                        <h2 class="text-[#111827] font-bold text-4xl md:text-[50px] leading-[52px] md:leading-[67px]">
                            School Management Software
                        </h2>
                        <p class="text-[#6B7280] text-lg">
                            By Professionals School Management App Development Company for Mac, Linux, and DOS. Online Shipping Software for Mobile Usage. No reviews yet.
                        </p>
                    </div>

                    {/* <!-- Key Features --> */}
                    <div class="space-y-4">
                        <h3 class="text-lg font-medium text-gray-900">Key Features</h3>
                        <ul class="space-y-2">
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span>100% Working Functionality</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span>Multi-language Support</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span>Professional Development Team</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span>24/7 Online Chat Support</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span>100% Activation Online Globally</span>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Call to Action --> */}
                    <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <button class="bg-green-500 text-white px-8 py-3 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                            <CiShoppingCart size={25} />
                            <p className="ml-2">
                                Contact Sales
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            {/*========= Platform Screenshots */}
            <div class="container mx-auto space-y-8 px-4 py-10">
                {/* <!-- Section Heading --> */}
                <h2 class="text-black font-semibold text-3xl md:text-[40px] capitalize tracking-tight leading-[32px] md:leading-[58px] text-center">
                    Platform Screenshots
                </h2>

                {/* <!-- Screenshots Grid --> */}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Screenshot 1 --> */}
                    <div class="relative h-64 bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://acotegroup.com/products/2/school-mgt-01.png"
                            alt="Screenshot 1"
                            class="object-cover w-full h-full"
                        />
                    </div>

                    {/* <!-- Screenshot 2 --> */}
                    <div class="relative h-64 bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://acotegroup.com/products/2/school-mgt-02.png"
                            alt="Screenshot 2"
                            class="object-cover w-full h-full"
                        />
                    </div>

                    {/* <!-- Screenshot 3 --> */}
                    <div class="relative h-64 bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://acotegroup.com/products/2/school-mgt-03.png"
                            alt="Screenshot 3"
                            class="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
            {/*========= Technical Specifications */}
            <section class="bg-white py-16">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
                        Technical Specifications
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* <!-- Frontend Specs --> */}
                        <div class="bg-gray-100 p-8 rounded-2xl shadow-sm transition hover:shadow-md">
                            <h3 class="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                                Frontend
                            </h3>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <span class="text-green-600 mr-3 mt-1">
                                        ✅
                                    </span>
                                    <span>Responsive design with HTML5/CSS3</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 mr-3 mt-1">
                                        ✅
                                    </span>
                                    <span>Custom UI/UX using Bootstrap</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 mr-3 mt-1">
                                        ✅
                                    </span>
                                    <span>React or Angular integration (optional)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 mr-3 mt-1">
                                        ✅
                                    </span>
                                    <span>Multi-language interface support</span>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Backend Specs --> */}
                        <div class="bg-gray-100 p-8 rounded-2xl shadow-sm transition hover:shadow-md">
                            <h3 class="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                                Backend
                            </h3>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <span class="text-green-600 mr-3 mt-1">
                                        ✅
                                    </span>
                                    <span>Custom-built backend with Node.js or PHP</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 mr-3 mt-1">
                                        ✅
                                    </span>
                                    <span>MySQL or MongoDB database integration</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 mr-3 mt-1">
                                        ✅
                                    </span>
                                    <span>Role-based access and employee data encryption</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 mr-3 mt-1">
                                        ✅
                                    </span>
                                    <span>API for attendance & payroll integration</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* product cart  */}
            <ProductPosCart></ProductPosCart>

        </div>
    );
}

export default page;