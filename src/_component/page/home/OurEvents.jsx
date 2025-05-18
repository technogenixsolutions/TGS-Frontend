import Link from "next/link";

function OurEvents() {
    const events = [
        {
            date: "April 2, 2025",
            title: "IPA - GDCenter - Acote MOU Signing",
            imageAlt: "IPA - GDCenter - Acote MOU Signing",
            imageSrc: "https://acotegroup.com/events/event-17.jfif",
            description: "IPA, GDCenter, and Acote signed a Memorandum of Understanding (MOU) to strengthen collaboration, held at the Korea IT Business Promotion Association Training Center."
        },
        {
            date: "April 2, 2025",
            title: "IPA - GDCenter - Acote MOU Signing",
            imageAlt: "IPA - GDCenter - Acote MOU Signing",
            imageSrc: "https://acotegroup.com/events/event7.jpg",
            description: "IPA, GDCenter, and Acote signed a Memorandum of Understanding (MOU) to strengthen collaboration, held at the Korea IT Business Promotion Association Training Center."
        },
        {
            date: "March 23, 2025",
            title: "Iftar Party at Acote",
            imageAlt: "Iftar Party at Acote",
            imageSrc: "https://acotegroup.com/events/event16.jpg",
            description: "Our Iftar gathering was not just about breaking fast, but about strengthening the bonds that make our workplace feel like a second home."
        },
        {
            date: "March 14, 2025",
            title: "Acote - KOIPA Partnerships",
            imageAlt: "Acote - KOIPA Partnerships",
            imageSrc: "https://acotegroup.com/events/event15.png",
            description: "Acote Group had the privilege of hosting Mr. Choi Tai Rim, CEO of KOIPA, and Mr. Sunghoon Lee, Deputy Director of KOTRA Dhaka."
        },
        {
            date: "March 13, 2025",
            title: "Bridging Innovation & Leadership",
            imageAlt: "Bridging Innovation & Leadership",
            imageSrc: "https://acotegroup.com/events/event14.jpg",
            description: "It was an absolute pleasure to welcome Rafel Kabir, Chairman of BASIS (Bangladesh Association of Software & Information Services), to Acote Group!"
        },
        {
            date: "March 12, 2025",
            title: "Strengthening Global Partnerships!",
            imageAlt: "Strengthening Global Partnerships!",
            imageSrc: "https://acotegroup.com/events/event13.png",
            description: "We were honored to welcome Mammad Nasliov, CEO of Vertus Engineering Co., to Acote Group!"
        }
    ];
    
    return (
        <section className="mb-10">
            <div className="flex justify-between px-3 items-center ">
                <div className="space-y-1 md:space-y-0">
                    <h3 className="text-primary text-sm md:text-base font-semibold tracking-wide uppercase mb-1">
                        Media
                    </h3>
                    <h2 className="text-black font-bold text-2xl md:text-4xl leading-snug md:leading-[58px] tracking-tight">
                        Our Events
                    </h2>
                </div>

                {/* Button */}
                <Link href="/events">
                    <button className="inline-flex items-center justify-center gap-2 rounded-full font-medium border border-gray-300 bg-white hover:bg-gray-100 transition-all duration-200 text-sm md:text-base px-5 md:px-8 py-2 md:py-3 shadow-sm">
                        View All
                    </button>
                </Link>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full px-4">
                    {events.map(({ date, title, imageAlt, imageSrc, description }, idx) => (
                        <div key={idx} className="space-y-4">
                            <div className="w-full h-[271px] relative group overflow-hidden rounded-lg shadow-md">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    alt={imageAlt}
                                    src={imageSrc}
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-center justify-center text-white text-center text-sm md:text-base leading-snug">
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 text-base text-gray-500">
                                <p className="">{date}</p>
                                <hr className="border h-4 w-0" />
                                <p className="font-bold text-gray-900">{title.slice(0, 27)}..</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default OurEvents;