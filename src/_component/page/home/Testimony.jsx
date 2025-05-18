'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Swiperbtn from '@/_component/Swiperbtncustom/Swiperbtn';
import Image from 'next/image';

function Testimony() {
    const testimonials = [
        {
            src: "https://i.postimg.cc/Tw8HQ6KT/testimony-1.webp",
            rating: 5,
            name: "Md. Arsad Parvez",
            company: "Managing Director, DGBangla",
            description:
                "Working with Acote Group has been a game-changer for DGBangla. Their expertise in website and portfolio development has provided us with a strong digital presence, making it easier to showcase our work and attract new clients. Their professionalism and attention to detail have exceeded our expectations.",
        },
        {
            src: "https://i.postimg.cc/sXpHNNW7/testimony-2.webp",
            rating: 4,
            name: "Joonyum Choi",
            company: "CEO, Tintolab",
            description:
                "Acote Group has been a valuable partner in our recent projects. Their innovative approach and professionalism have made every collaboration seamless and rewarding. Together, we’re pushing the boundaries of what’s possible, and I’m excited to see where our partnership takes us next.",
        },
        {
            src: "https://i.postimg.cc/yxsp4yh5/testimony-3.webp",
            rating: 5,
            name: "Name Placeholder",
            company: "Company Placeholder",
            description:
                "This is a placeholder for the third testimonial. Replace it with actual content when available.",
        },
    ];
    return (
        <section className="my-10">
            <div className="text-left md:text-center mb-12">
                <h3 className="text-primary text-base font-semibold uppercase mb-2">Testimony</h3>
                <h2 className="text-black font-semibold text-3xl md:text-[40px] leading-[58px]">
                    Trusted by 100+ Customers
                </h2>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[80vh] max-h-[800px]"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className=" flex gap-x-14 p-5 items-center">
                            {/* Image */}
                            <div className="flex justify-start">
                                <div className="w-full md:w-[260px] h-[260px] bg-gray-100 relative rounded-lg overflow-hidden">
                                    <Image
                                        width={260}
                                        height={260}
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        loading="lazy"
                                        className="object-cover grayscale w-full h-full absolute inset-0"
                                    />
                                </div>
                            </div>

                            {/* Testimonial Content */}
                            <div>
                                <blockquote className="text-lg md:text-[30px] md:leading-[44px] font-medium text-gray-800">
                                    {`''${testimonial.description}''`}
                                </blockquote>

                                {/* Rating & Name */}
                                <div className="mt-10 space-y-4">
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, idx) => (
                                            <svg
                                                key={idx}
                                                className="w-6 h-6 text-primary"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.172L12 18.896l-7.335 3.868 1.401-8.172L.132 9.21l8.2-1.192z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <div className="space-y-1">
                                        <p className="font-bold text-xl text-gray-800">{testimonial.name}</p>
                                        <p className="text-lg font-medium text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <Swiperbtn />
            </Swiper>
        </section>
    );
}

export default Testimony;
