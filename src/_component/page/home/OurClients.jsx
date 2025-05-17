import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
// import MyComponent from "../components/MyComponent";
// import Marquee from "react-fast-marquee";

function OurClients() {
    const ourClients1 = [
        {
            "alt": "",
            "src": "https://acotegroup.com/samsung-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/lg-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/tinto-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/kakao-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/koica-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/talk-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/dgbangla-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/opoch-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/aimmo-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/deepsales-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/korean-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/irtech-logo.png"
        },
        {
            "alt": "",
            "src": "https://acotegroup.com/ifb-logo.png"
        }
    ]


    return (
        <section className="my-20 max-w-screen-2xl mx-auto">
            <div className="text-left md:text-center space-y-2 md:space-y-0">
                <h3 className="text-primary text-base font-semibold tracking-[0.621px] leading-4 uppercase mb-1">
                    partner's
                </h3>
                <h2 className="text-black font-semibold text-3xl md:text-[40px] capitalize tracking-[-0.66px] leading-[32px] md:leading-[58px]">
                    Our Clients
                </h2>
                <p className="text-[#6B7280] mx-auto md:max-w-[574px] text-sm">
                    Proudly partnered with 250+ clients from diverse industries including Banking &amp; Finance, Automotive, Retail, Health Care, Education, Media &amp; Entertainment.
                </p>
            </div>
            <div>
                <div className="my-10">
                    <Marquee pauseOnHover={true} speed={100}>
                        {ourClients1?.map((val, index) => (
                            <div key={index} className="relative w-40 h-20 mx-10 bg-gray-50 hover:bg-gray-200 rounded-lg">
                                <Image
                                    fill
                                    src={val?.src}
                                    alt={`client-${index}`}
                                    className="object-contain py-2 px-3 "
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div className="my-10">
                    <Marquee pauseOnHover={true} direction="right" speed={100}>
                        {ourClients1?.map((val, index) => (
                            <div key={index} className="relative w-40 h-20 mx-10 bg-gray-50 hover:bg-gray-200 rounded-lg">
                                <Image
                                    fill
                                    src={val?.src}
                                    alt={`client-${index}`}
                                    className="object-contain py-2 px-3 "
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>

        </section>
    );
}

export default OurClients;