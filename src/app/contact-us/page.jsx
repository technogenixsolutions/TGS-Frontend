import Contactfrom from "@/_component/Contactfrom/Contactfrom";

const ex = [
    {
        count: '8+',
        label: 'Tech Partners',
        img: 'https://acotegroup.com/contact-us/partner-icon.png',
    },
    {
        count: '4+',
        label: 'Years of Experience',
        img: 'https://acotegroup.com/contact-us/experience-icon.png',
    },
    {
        count: '20+',
        label: 'Countries Served',
        img: 'https://acotegroup.com/contact-us/countries-icon.png',
    },
    {
        count: '200+',
        label: 'Projects Completed',
        img: 'https://acotegroup.com/contact-us/projects-icon.png',
    },
    {
        count: '146+',
        label: 'Professionals',
        img: 'https://acotegroup.com/contact-us/professional-icon.png',
    },
]

function page() {
    return (
        <section className="">
            {/* hero  */}
            <div>
                <div className="relative w-full h-[400px] md:h-[627px] bg-[#0a1929] text-white mb-10 md:mb-[183px]">
                    <img
                        alt="Office background"
                        className="object-cover w-full h-full"
                        src="https://acotegroup.com/acote-banner.png"
                    />

                    <div className="absolute inset-0 z-10 px-4 md:px-0">
                        <div className="container mx-auto h-full md:relative py-[104px]">
                            {/* Heading + CTA */}
                            <div>
                                <h1 className="text-5xl md:text-[75px] font-bold tracking-wide">
                                    Let's work
                                    <div className="flex items-center gap-2">
                                        <div className="w-[61px] h-[8px] bg-primary"></div>
                                        <span>together.</span>
                                    </div>
                                </h1>

                                <div className="mt-10 md:mt-[60px]">
                                    <button className="bg-primary px-5 py-2 rounded-lg">
                                        Leave us a message
                                    </button>
                                </div>
                            </div>

                            {/* Stats Card dekstop device */}
                            <div className="hidden md:block md:absolute z-10 -bottom-28 left-0 right-0 bg-white rounded-[30px] mx-auto max-w-[90%] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.02),0px_-2px_45px_-5px_rgba(0,0,0,0.06)]">
                                <div className="grid grid-cols-1 md:grid-cols-5 py-9">
                                    {ex?.map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center justify-center">
                                            <div className="h-16 w-16 relative">
                                                <img
                                                    alt={item.label}
                                                    src={item.img}
                                                    className="absolute inset-0 h-full w-full object-contain"
                                                />
                                            </div>
                                            <div className="space-y-2 text-center mt-4 md:mt-6">
                                                <p className="text-primary font-bold text-[28.36px]">{item.count}</p>
                                                <p className="text-[#010101] text-base tracking-[-0.158px]">{item.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stats Card mobile device */}
                <div className="grid grid-cols-1  sm:grid-cols-2 gap-y-10  md:hidden">
                    {ex?.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center">
                            <div className="h-16 w-16 relative">
                                <img
                                    alt={item.label}
                                    src={item.img}
                                    className="absolute inset-0 h-full w-full object-contain"
                                />
                            </div>
                            <div className="space-y-2 text-center mt-4 md:mt-6">
                                <p className="text-primary font-bold text-[28.36px]">{item.count}</p>
                                <p className="text-[#010101] text-base tracking-[-0.158px]">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* from  */}
                    <Contactfrom></Contactfrom>
            {/* google map */}
            <div className="overflow-hidden h-0 pb-[40%] relative">
                <iframe className="border-0 h-full w-full left-0 top-0  absolute" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3630653513956!2d90.38116467456504!3d23.876741078584427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5883c25e191%3A0x885d9ba6474db563!2sAnis%20home%20%40%20uttara!5e0!3m2!1sen!2sbd!4v1748093933404!5m2!1sen!2sbd" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}

export default page;