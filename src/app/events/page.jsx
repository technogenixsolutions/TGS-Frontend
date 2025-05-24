"use client"
import { useState } from "react";

const eventsWithCategories = [
    {
        title: "MOU Signing & Korea Desk Launch",
        date: "April 2, 2025",
        image: "https://acotegroup.com/events/event-17.jpeg",
        description: "Acote Group & TST White House are joining forces to introduce a next-gen AR/VR Walkthrough Experience!",
        category: "Partnership",
    },
    {
        title: "IPA - GDCenter - Acote MOU Signing",
        date: "April 2, 2025",
        image: "https://acotegroup.com/events/event7.jpg",
        description: "IPA, GDCenter, and Acote signed a Memorandum of Understanding (MOU) to strengthen collaboration, held at the Korea IT Business Promotion Association Training Center.",
        category: "Partnership",
    },
    {
        title: "Iftar Party at Acote",
        date: "March 23, 2025",
        image: "https://acotegroup.com/events/event16.jpg",
        description: "Our Iftar gathering was not just about breaking fast, but about strengthening the bonds that make our workplace feel like a second home.",
        category: "Celebration",
    },
    {
        title: "Acote - KOIPA Partnerships",
        date: "March 14, 2025",
        image: "https://acotegroup.com/events/event15.png",
        description: "Acote Group had the privilege of hosting Mr. Choi Tai Rim, CEO of KOIPA, and Mr. Sunghoon Lee, Deputy Director of KOTRA Dhaka.",
        category: "Leadership Visit",
    },
    {
        title: "Bridging Innovation & Leadership",
        date: "March 13, 2025",
        image: "https://acotegroup.com/events/event14.jpg",
        description: "It was an absolute pleasure to welcome Rafel Kabir, Chairman of BASIS (Bangladesh Association of Software & Information Services), to Acote Group!",
        category: "Leadership Visit",
    },
    {
        title: "Strengthening Global Partnerships!",
        date: "March 12, 2025",
        image: "https://acotegroup.com/events/event13.png",
        description: "We were honored to welcome Mammad Nasliov, CEO of Vertus Engineering Co., to Acote Group!",
        category: "Events",
    },
    {
        title: "Congratulations to Abhi Kundu!",
        date: "March 12, 2025",
        image: "https://acotegroup.com/events/event12.png",
        description: "We are thrilled to announce the promotion of Abhi Kundu to Deputy Sr. Manager - Operations at Acote Group!",
        category: "Events",
    },
    {
        title: "Strengthening Korea-Bangladesh Ties",
        date: "March 06, 2025",
        image: "https://acotegroup.com/events/event11.png",
        description: "A privilege to host Mr. Ingi Ghim, Counselor, Korean Embassy, Bangladesh at Acote Group.",
        category: "Events",
    },
    {
        title: "Acote - TST Whitehouse Ltd",
        date: "February 27, 2025",
        image: "https://acotegroup.com/events/event10.png",
        description: "Acote Group & TST White House are joining forces to introduce a next-gen AR/VR Walkthrough Experience!",
        category: "Events",
    },
    {
        title: "Acote - KOTRA Partnerships",
        date: "February 27, 2025",
        image: "https://acotegroup.com/events/event9.png",
        description: "We were honored to welcome Mr. Hur Jin Hak, Country Head of KOTRA to Acote Group",
        category: "Leadership Visit",
    },
    {
        title: "Hanwha - Acote Partnership Ceremony",
        date: "February 19, 2025",
        image: "https://acotegroup.com/events/event8.png",
        description: "Hanwha Vision and Acote Group have officially joined forces to bring world-class video surveillance solutions to Bangladesh!",
        category: "Partnership",
    },
    {
        title: "New Year",
        date: "January 2, 2025",
        image: "https://acotegroup.com/events/event1.png",
        description: "Celebration of the New Year event.",
        category: "Fun activity",
    },
    {
        title: "Reward Program",
        date: "December 25, 2024",
        image: "https://acotegroup.com/events/event2.png",
        description: "A recognition event to appreciate outstanding employees for their contributions and achievements.",
        category: "Fun activity",
    },
    {
        title: "Tintolab",
        date: "November 21, 2024",
        image: "https://acotegroup.com/events/event3.png",
        description: "Welcomed Joonyum Choi, CEO of Tintolab, to discuss potential collaborations and future projects.",
        category: "Fun activity",
    },
    {
        title: "Grepp MoU",
        date: "May 30, 2024",
        image: "https://acotegroup.com/events/event4.png",
        description: "Signed of a Memorandum of Understanding (MoU) between Acote Group and Grepp to drive technological innovation.",
        category: "Conferences",
    },
    {
        title: "Collaborative future projects",
        date: "November 30, 2024",
        image: "https://acotegroup.com/events/event5.png",
        description: "Announcement of collaboration with BIDA and BEZA to promote digital and infrastructural development.",
        category: "Conferences",
    },
    {
        title: "UNDP Bangladesh",
        date: "October 30, 2024",
        image: "https://acotegroup.com/events/event6.png",
        description: "Event related to UNDP Bangladesh collaboration.",
        category: "Conferences",
    },
];
const categories = [
    { label: "All", value: "all" },
    { label: "Awards", value: "awards" },
    { label: "Events", value: "event-celebration" },
    { label: "Fun activity", value: "fun-activity" },
    { label: "Signing Ceremony", value: "mou-signing" },
    { label: "Conferences", value: "conference" }
];

function page() {

    const [activeCategory, setActiveCategory] = useState("All");


    const filteredProducts = activeCategory === "All" ? eventsWithCategories : eventsWithCategories?.filter(product => product?.category === activeCategory)


    return (
        <div>
            <section className="mb-10 max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center justify-center w-full space-y-3 md:space-y-5">
                    <div className="bg-[#b9b9b91f] w-fit px-6 rounded-full py-1 text-xl">
                        <p>
                            Home / <span className="font-bold text-primary">Event</span>
                        </p>
                    </div>
                    <h2 className="text-[#111827] font-bold text-4xl md:text-[50px] leading-[52px] md:leading-[67px]">
                        Our Events
                    </h2>
                    <p className="text-[#6B7280] md:max-w-[444px] text-xl text-center">
                        Offering solutions & services to address a spectrum of financial issues
                    </p>
                </div>

                {/* category   */}
                <div className="flex flex-wrap gap-3 md:gap-[18px] mt-8 md:mt-[50px] md:p-4 justify-center md:max-w-5xl mx-auto w-full h-full">
                    {
                        categories?.map((category) => {
                            return <button
                                key={category.label}
                                onClick={() => setActiveCategory(category.label)}
                                className={`px-6  py-2 text-sm md:text-base font-medium rounded-full border transition-all ${activeCategory === category.label
                                    ? "bg-black text-white"
                                    : "bg-white text-black border-[#C4C4C4] hover:bg-gray-100"
                                    }`}
                            >
                                {category.label}
                            </button>
                        })
                    }
                </div>

                {/* filter product  */}
                <div className="my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full px-4">
                        {filteredProducts?.map(({ date, title, image, description }, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="w-full h-[271px] relative group overflow-hidden rounded-lg shadow-md">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        alt={idx}
                                        src={image}
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-center justify-center text-white text-center text-sm md:text-base leading-snug">
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-2 text-base text-gray-500">
                                    <p className="">{date}</p>
                                    <hr className="border h-4 w-0" />
                                    <p className="font-normal md:font-bold text-gray-900">{title.slice(0, 27)}..</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* next/prev buttons */}
                <div className="flex justify-center space-x-2.5 mt-8">
                    <button className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue-600 hover:bg-primary hover:text-white">
                        ⪻ Previous
                    </button>
                    <div className="flex gap-x-2">
                        <div className="bg-gray-800 hover:bg-gray-700 text-white px-6 rounded-sm cursor-pointer xl py-3">
                            1
                        </div>
                        <div className=" text-black  border hover:text-white hover:bg-gray-800 px-6 rounded-sm cursor-pointer xl py-3">
                            2
                        </div>
                    </div>
                    <button className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue-600 hover:bg-primary hover:text-white">
                        Next ⪼
                    </button>
                </div>
            </section>
        </div>
    );
}

export default page;