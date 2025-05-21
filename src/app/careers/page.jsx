import CareersSearchFilter from "@/_component/CareersSearchFilter/CareersSearchFilter";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";

function page() {
    return (
        <section className="my-10 container mx-auto">
            <div className="flex flex-col items-center justify-center w-full  space-y-3 md:space-y-5">
                <div className="bg-[#b9b9b91f] w-fit px-6 rounded-full py-1 text-xl">
                    <p>
                        Home / <span className="font-bold text-primary">Career</span>
                    </p>
                </div>
                <h2 className="text-black font-bold text-4xl md:text-[50px] leading-[52px] md:leading-[67px]">
                    Join Our Team
                </h2>
                <p className="text-gray-500 md:max-w-[444px] text-xl md:text-2xl text-center">
                    Be part of our innovative team creating cutting-edge technology solutions that transform businesses
                </p>
            </div>
            <div className="my-10 px-2 sm:px-0">
                <CareersSearchFilter></CareersSearchFilter>
            </div>
            <div>
                <div className="rounded-xl bg-gray-50/50 border p-4 md:p-6 transition-colors duration-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        {/* Job Info Section */}
                        <div className="space-y-2">
                            <h3 className="text-2xl text-primary font-semibold">
                                Senior Frontend Developer
                            </h3>

                            <div className="flex flex-wrap gap-x-4 text-sm text-secondary/60">
                                <span className="flex items-center gap-x-2">
                                    <CiLocationOn />
                                    Dhaka, Bangladesh
                                </span>
                                
                                <span className="flex items-center gap-x-2 ">
                                    <IoBagCheckOutline />
                                    Full-time
                                </span>

                                <span className="flex items-center gap-x-2">
                                    <IoMdTime />
                                    2 days ago
                                </span>
                            </div>

                            <p className="max-w-96 text-secondary text-base">
                                We are looking for an experienced Frontend Developer with React
                                expertise to join our team.
                            </p>
                        </div>

                        {/* Action Button */}
                        <div className="mt-4 md:mt-0">
                            <a href="/careers/1">
                                <button
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full 
              text-sm md:text-base font-medium ring-offset-background transition-colors 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
              focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
              text-primary-foreground h-6 md:h-10 px-6 md:px-8 py-6 bg-primary hover:bg-[#008c44]"
                                >
                                    Details
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default page;