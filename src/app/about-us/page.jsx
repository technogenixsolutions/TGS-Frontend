import LeadersMembers from "@/_component/About/LeadersMembers";

function page() {
    const imageGrid = [
        {
            id: 1,
            src: "https://acotegroup.com/about-us/about-header1.webp",
            colSpan: "col-span-1",
            rowSpan: "row-span-2",
        },
        {
            id: 2,
            src: "https://acotegroup.com/about-us/about-header2.webp",
            colSpan: "col-span-2",
        },
        {
            id: 3,
            src: "https://acotegroup.com/about-us/about-header3.webp",
            colStart: "col-start-2",
            rowStart: "row-start-2",
        },
        {
            id: 4,
            src: "https://acotegroup.com/about-us/about-header4.webp",
            colStart: "col-start-3",
            rowStart: "row-start-2",
        },
    ];
    return (
        <section className="max-w-screen-2xl mx-auto my-10">
            {/* Leading IT Company in Bangladesh section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                {/* Left Side Text */}
                <div className="px-2 md:px-0 flex-1 w-full">
                    <div className="border w-fit border-[#21B24B] bg-[#F1FFF5] rounded-full px-4 py-1 font-bold">
                        <h4 className="text-primary text-sm">Leading IT Company in Bangladesh</h4>
                    </div>
                    <div className="md:max-w-[609px] space-y-4 md:space-y-6 mt-4 md:mt-7">
                        <h2 className="text-black font-bold text-xl sm:text-2xl md:text-4xl md:text-[44px] leading-relaxed md:leading-[50px]">
                            Shaping a sustainable future with cutting-edge Technology.
                        </h2>
                        <p className="text-gray-500 text-base md:text-[22px]">
                            We are a global IT 360°creative and digital design services company. We offer services in the multimedia and web technology industry.
                        </p>
                    </div>
                </div>

                {/* Right Side Image Grid */}
                <div className="flex-1 w-full">
                    <div className="grid grid-cols-3 grid-rows-2 gap-4">
                        {imageGrid.map(({ id, src, colSpan, rowSpan, colStart, rowStart }) => (
                            <div
                                key={id}
                                className={`relative w-full h-full rounded-[10px] overflow-hidden ${colSpan || ""
                                    } ${rowSpan || ""} ${colStart || ""} ${rowStart || ""}`}
                            >
                                <img
                                    alt="about us header"
                                    loading="lazy"
                                    className="object-cover h-full w-full"
                                    src={src}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* About Acote Group section */}
            <div className="flex  my-12 flex-col md:flex-row gap-6 md:gap-14 w-full items-center justify-between">

                {/* YouTube Video */}
                <div className="relative basis-2/5 h-[600px] lg:h-[450px] w-full rounded-[30px] overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/-xtlcQzurf0?si=PdkLi4SUOuRYWSLT"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Text Content */}
                <div className="flex-1 w-full">
                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-7">
                        <h3 className="text-primary font-semibold tracking-[0.621px] mb-1 capitalize text-xl">
                            About Acote Group
                        </h3>
                        <h2 className="text-black font-semibold text-3xl md:text-[40px] capitalize tracking-[-0.66px] md:leading-[58px] leading-relaxed md:max-w-[609px]">
                            Revolutionizing Businesses with Future-Ready Tech Solutions.
                        </h2>
                    </div>
                    <p className="text-gray-500 text-base md:text-[21px] text-left">
                        Acote Group offers innovative and comprehensive solutions across four core services:
                        Acote Solution, Digital Marketing, AI/ML Solutions, and BPO. From tailored software
                        and AI innovation to impactful marketing and exceptional business process outsourcing,
                        we empower businesses to thrive and stay ahead in a competitive world. Our commitment
                        to excellence ensures measurable results and long-term success for our clients.
                    </p>
                </div>
            </div>
            {/* Our Mission vision section  */}
            <div className="px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Mission Card */}
                    <div className="border border-gray-300 py-9 px-14">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-start gap-4 md:gap-7 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                                <path d="M21.9815 1.22884L26.4403 10.1892C26.7688 10.8383 27.3958 11.2892 28.1189 11.3894L38.1342 12.848C38.7191 12.9302 39.2499 13.2387 39.6084 13.7096C39.963 14.1744 40.1152 14.7635 40.0291 15.3426C39.959 15.8234 39.7326 16.2682 39.3861 16.6089L32.129 23.6437C31.5982 24.1346 31.3578 24.8619 31.486 25.5732L33.2727 35.4632C33.463 36.6574 32.6718 37.7834 31.486 38.0098C30.9973 38.088 30.4965 38.0058 30.0558 37.7814L21.1222 33.127C20.4592 32.7923 19.676 32.7923 19.013 33.127L10.0793 37.7814C8.98162 38.3645 7.62154 37.9678 7.01061 36.8858C6.78426 36.455 6.70414 35.9641 6.77825 35.4853L8.56498 25.5932C8.69318 24.8839 8.45081 24.1526 7.922 23.6617L0.664907 16.6309C-0.198412 15.7974 -0.224452 14.4249 0.606818 13.5613C0.624846 13.5433 0.644877 13.5232 0.664907 13.5032C1.00943 13.1526 1.46213 12.9302 1.95087 12.8721L11.9662 11.4114C12.6873 11.3092 13.3142 10.8624 13.6447 10.2092L17.9433 1.22884C18.3259 0.459441 19.1191 -0.0194313 19.9804 0.000605207H20.2488C20.996 0.0907695 21.647 0.553613 21.9815 1.22884Z" fill="#196164" />
                                <path d="M20.0103 32.8774C19.6224 32.8895 19.2445 32.9937 18.9046 33.1801L10.0146 37.824C8.92685 38.3431 7.62515 37.9402 7.01529 36.9C6.78934 36.4751 6.70736 35.9881 6.78334 35.5111L8.55893 25.64C8.67891 24.9225 8.43896 24.1929 7.91708 23.6878L0.656738 16.6588C-0.205066 15.815 -0.221062 14.4301 0.622745 13.5662C0.634742 13.5542 0.64474 13.5442 0.656738 13.5342C1.00066 13.1935 1.44456 12.969 1.92245 12.8988L11.9462 11.4237C12.672 11.3315 13.3019 10.8785 13.6218 10.2211L17.9788 1.12772C18.3927 0.394154 19.1865 -0.0427782 20.0263 0.00332011C20.0103 0.59859 20.0103 32.4726 20.0103 32.8774Z" fill="#21B34B" />
                            </svg>

                            <div className="space-y-4 text-center md:text-left">
                                <p className="text-xl md:text-2xl font-medium md:leading-[35px] w-full">Our Mission</p>
                                <p className="text-base md:text-xl md:leading-[36px] text-[#000000b3] w-full">
                                    Our mission is to reshape lives by offering financial expertise, faster growth,
                                    & securing futures through trusted partnerships & innovation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="border border-gray-300 py-9 px-14">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-start gap-4 md:gap-7 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                <path d="M0 27.4721C0 36.048 6.95203 42.9999 15.5278 42.9999C24.1037 42.9999 31.0556 36.048 31.0556 27.4721C31.0556 18.8962 24.1037 11.9443 15.5278 11.9443C6.95203 11.9443 0 18.8962 0 27.4721Z" fill="#21B34B" />
                                <path d="M15.0263 6.24188C14.7353 6.63132 15.0421 7.16667 15.5283 7.16667C26.7426 7.16667 35.8338 16.2578 35.8338 27.4722C35.8338 27.9584 36.3692 28.2651 36.7585 27.9741C40.5476 25.1428 43.0005 20.6216 43.0005 15.5278C43.0005 6.95203 36.0486 0 27.4727 0C22.3789 0 17.8576 2.45287 15.0263 6.24188Z" fill="#196164" />
                            </svg>

                            <div className="space-y-4 text-center md:text-left">
                                <p className="text-xl md:text-2xl font-medium md:leading-[35px] w-full">Vision</p>
                                <p className="text-base md:text-xl md:leading-[36px] text-[#000000b3] w-full">
                                    Our vision is to create a financially secure future for all, offering
                                    innovative solutions & expert guidance to navigate prosperity.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* our journey section */}
            <div className="my-20 text-left md:text-center px-4 md:px-0">
                <div className="space-y-3 md:space-y-0">
                    <h3 className="text-primary text-base font-semibold tracking-[0.621px] leading-4 uppercase mb-1">
                        our journey
                    </h3>
                    <h2 className="text-black font-semibold text-3xl md:text-[40px] capitalize tracking-[-0.66px] leading-[32px] md:leading-[58px]">
                        Our Milestones
                    </h2>
                </div>

                <div>
                    <div className="mt-0 md:mt-[60px] relative">
                        <div className="hidden md:block absolute w-[80%] left-1/2 -translate-x-1/2 -z-20 top-16">
                            <img alt="connecting-lines" src="https://acotegroup.com/about-us/connectingLines.png" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 md:mt-0">
                            {/* Milestone 2022 */}
                            <div className="col-span-1 flex flex-row md:flex-col gap-4 md:gap-0 items-center">
                                <div className="order-2 md:mt-24">
                                    <div className="w-24 md:w-[153px] h-24 md:h-[153px] rounded-full bg-[#1e3a5f] hover:bg-primary flex items-center justify-center text-white font-bold text-lg md:text-xl transition-colors duration-1000">
                                        2022
                                    </div>
                                </div>
                                <div className="order-2 mt-0 md:mt-4 text-left md:text-center text-base md:text-lg md:max-w-56 md:leading-[28px]">
                                    Company established in Dhaka, Bangladesh
                                </div>
                            </div>

                            {/* Milestone 2023 */}
                            <div className="col-span-1 flex flex-row md:flex-col gap-4 md:gap-0 items-center">
                                <div className="order-1">
                                    <div className="w-24 md:w-[153px] h-24 md:h-[153px] rounded-full bg-[#1e3a5f] hover:bg-primary flex items-center justify-center text-white font-bold text-lg md:text-xl transition-colors duration-1000">
                                        2023
                                    </div>
                                </div>
                                <div className="order-2 mt-0 md:mt-4 text-left md:text-center text-base md:text-lg md:max-w-56 md:leading-[28px]">
                                    Successfully laid the foundation of global expansion
                                </div>
                            </div>

                            {/* Milestone 2024 */}
                            <div className="col-span-1 flex flex-row md:flex-col gap-4 md:gap-0 items-center">
                                <div className="order-2 md:mt-24">
                                    <div className="w-24 md:w-[153px] h-24 md:h-[153px] rounded-full bg-[#1e3a5f] hover:bg-primary flex items-center justify-center text-white font-bold text-lg md:text-xl transition-colors duration-1000">
                                        2024
                                    </div>
                                </div>
                                <div className="order-2 mt-0 md:mt-4 text-left md:text-center text-base md:text-lg md:max-w-56 md:leading-[28px]">
                                    Opened new offices in Singapore and South Korea
                                </div>
                            </div>

                            {/* Milestone 2025 */}
                            <div className="col-span-1 flex flex-row md:flex-col gap-4 md:gap-0 items-center">
                                <div className="order-1">
                                    <div className="w-24 md:w-[153px] h-24 md:h-[153px] rounded-full bg-[#1e3a5f] hover:bg-primary flex items-center justify-center text-white font-bold text-lg md:text-xl transition-colors duration-1000">
                                        2025
                                    </div>
                                </div>
                                <div className="order-2 mt-0 md:mt-4 text-left md:text-center text-base md:text-lg md:max-w-56 md:leading-[28px]">
                                    Advanced to the greater goal of digital transformation
                                </div>
                            </div>

                            {/* Milestone 2026 */}
                            <div className="col-span-1 flex flex-row md:flex-col gap-4 md:gap-0 items-center">
                                <div className="order-2 md:mt-24">
                                    <div className="w-24 md:w-[153px] h-24 md:h-[153px] rounded-full bg-[#1e3a5f] hover:bg-primary flex items-center justify-center text-white font-bold text-lg md:text-xl transition-colors duration-1000">
                                        2026
                                    </div>
                                </div>
                                <div className="order-2 mt-0 md:mt-4 text-left md:text-center text-base md:text-lg md:max-w-56 md:leading-[28px]">
                                    Opening new offices in Europe and America, become a pioneer in leveraging state-of-the-art technology
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our team section*/}
            <div className="bg-footer w-full py-16 md:p-20">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="text-left md:text-center space-y-3 md:space-y-0">
                        <h3 className="text-primary text-base font-semibold tracking-[0.621px] leading-4 uppercase mb-1">
                            our team
                        </h3>
                        <h2 className="font-semibold text-3xl md:text-[40px] capitalize tracking-[-0.66px] leading-[32px] md:leading-[58px] text-white">
                            Meet Our Expert Team
                        </h2>
                    </div>
                    <LeadersMembers></LeadersMembers>
                </div>
            </div>
            {/* Our Clients section */}
            <div className="my-10 lg:my-20 text-center px-4 md:px-0">
                <h2 className="text-black font-semibold text-3xl md:text-[40px] capitalize tracking-[-0.66px] leading-[32px] md:leading-[58px]">
                    Our Clients
                </h2>
                <div className="w-full h-full mt-10">
                    <img
                        className="w-full h-full"
                        src="https://acotegroup.com/about-us/our-clients.png"
                        alt="our client image"
                    />
                </div>
            </div>


        </section>
    );
}

export default page;