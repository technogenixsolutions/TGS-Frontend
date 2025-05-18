import Image from "next/image";
const partners = [
    {
        name: "Hanwha Vision",
        src: "https://acotegroup.com/partners/hanwha.png",
    },
    {
        name: "AWS",
        src: "https://acotegroup.com/partners/aws.png",
    },
    {
        name: "Microsoft",
        src: "https://acotegroup.com/partners/microsoft.png",
    },
    {
        name: "Meta",
        src: "https://acotegroup.com/partners/meta.png",
    },
];

function FeaturedPartners() {
    return (
        <section className="pb-10 max-w-screen-2xl mx-auto ">
            <h3 className="text-primary text-base font-semibold tracking-[0.621px] leading-4 uppercase mb-8 text-center">
                Featured Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                {partners.map((partner, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl z-0"></div>

                        {/* Card content */}
                        <div className="bg-white rounded-xl p-6 shadow-md relative z-10 h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1.5">
                            <div className="w-full h-16 flex items-center justify-center">
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    width={120}
                                    height={60}
                                    className="object-contain max-h-12"
                                />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default FeaturedPartners;