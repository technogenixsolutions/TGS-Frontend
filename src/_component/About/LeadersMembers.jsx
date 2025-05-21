"use client"
import { useState } from "react";
import Image from "next/image";
const foundersAndLeaders = [
    {
        name: "Edward Kim",
        role: "CEO & Founder",
        image: "https://i.postimg.cc/cCyfdd2r/founder-1.webp",
        bgImage: "/about-us/profile-background.png",
        messageTitle: "A Message From Our Managing Director",
        message: `Acote is a leader in the IT and energy solutions sector in Bangladesh, providing innovative solutions that enhance the business value of our customers through cutting-edge technologies and professional manpower. 
    Our commitment to quality, integrity, and customer satisfaction sets us apart in the industry. 
    We aim to be a strategic partner for businesses seeking reliable and forward-thinking solutions.`,
        type: "message"
    },
    {
        name: "Mark Ilwhan Kim",
        role: "AI Technology Advisor",
        image: "https://i.postimg.cc/nLr4kRqc/founder-2.webp",
        bgImage: "/about-us/profile-background.png",
        messageTitle: "AI Technology Advisor",
        message: [
            "Expertise in Robotics/ Artificial Intelligence/ Machine Learning/ Computer Vision",
            "Over 25 years of experience as CTO at global tech giants",
            "Ph.D. in Electrical and Computer Engineering, University of Massachusetts",
            "Electrical and Computer Engineering, Seoul National University"
        ],
        type: "bullet-list"
    }
];

const teamMembers = [
    {
        name: "Hasan",
        image: "https://i.postimg.cc/rw8CdFm4/hasan-profile-1.webp",
        role: "Team Member"
    },
    {
        name: "Mamun Vai",
        image: "https://i.postimg.cc/xdZKFvPG/mamunvai.webp",
        role: "Team Member"
    },
    {
        name: "Nabil",
        image: "https://i.postimg.cc/mg837fz5/nabil-profile.webp",
        role: "Team Member"
    },
    {
        name: "Singapore Representative",
        image: "https://i.postimg.cc/yYCTHTCv/singapore-profile.webp",
        role: "Team Member"
    },
    {
        name: "Testimonial",
        image: "https://i.postimg.cc/05DpcJKm/testimony-2.webp",
        role: "Team Member"
    },
    {
        name: "Toha",
        image: "https://i.postimg.cc/jd64dJsK/toha-profile.webp",
        role: "Team Member"
    }
];





function LeadersMembers(props) {
    const [leadersMembersToggle, setLeadersMembersToggle] = useState(true);
    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mt-4 md:mt-7">
                <button
                    onClick={() => setLeadersMembersToggle(true)}
                    className={`${leadersMembersToggle ? "bg-[#82c8ee33] text-[#76BE42]" : "bg-[#1C2B40] text-gray-300"} px-8 py-3 rounded-md text-sm md:text-xl font-bold cursor-pointer hover:bg-[#82c8ee33]`}
                >
                    Founders &amp; Leaders
                </button>
                <button
                    onClick={() => setLeadersMembersToggle(false)}
                    className={`${!leadersMembersToggle ? "bg-[#82c8ee33] text-[#76BE42]" : "bg-[#1C2B40] text-gray-300"} px-8 py-3 rounded-md text-sm md:text-xl font-bold cursor-pointer hover:bg-[#82c8ee33]`}
                >
                    Team Members
                </button>





            </div>

            {/*leadersMembersToggle conditions use  */}
            <div className={`grid ${leadersMembersToggle ? "lg:grid-cols-2 gap-5 lg:gap-10" : "grid-cols-1 mg:grid-cols-2 lg:grid-cols-3  lg:gap-5"}`}>
                {
                    (leadersMembersToggle ? foundersAndLeaders : teamMembers)?.map((leader, index) => (
                        <div key={index} className={`bg-[#152231] rounded-2xl overflow-hidden p-4 md:p-6   gap-4 my-5`}>
                            {/* Profile Image Box */}
                            <div
                                className="w-full md:w-full h-[305px] mr-4 flex-shrink-0 relative bg-cover bg-no-repeat rounded-xl overflow-hidden"
                                style={{
                                    backgroundImage: "url('https://acotegroup.com/about-us/profile-background.png')"
                                }}
                            >
                                {/* Image must be inside a relative container */}
                                <div className="relative w-full h-full">
                                    <Image
                                        alt={leader?.name || "Leader"}
                                        src={leader?.image}
                                        fill
                                        className="rounded-md object-contain"
                                    />
                                </div>

                                {/* Name & Role overlay */}
                                <div
                                    className="absolute w-full h-[35%] bottom-0 opacity-90"
                                    style={{
                                        background:
                                            "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.89) 46.51%, rgb(0, 0, 0) 100%)"
                                    }}
                                >
                                    <div className="flex justify-end flex-col items-center w-full h-full p-3 text-white">
                                        <h1 className="font-medium text-lg text-[#D0D0D0]">{leader?.name}</h1>
                                        <h1 className="text-xs text-[#9D9D9D]">{leader?.role}</h1>
                                    </div>
                                </div>
                            </div>

                            {/* Message Box */}
                            {
                                leadersMembersToggle && (
                                    <div className="text-white mt-4">
                                        <h3 className="text-2xl md:text-[30px] font-semibold mb-4">
                                            {leader?.messageTitle}
                                        </h3>
                                        <p className="text-base text-justify md:text-left md:leading-[24.63px]">
                                            {leader?.message}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>




        </div>
    );
}

export default LeadersMembers;