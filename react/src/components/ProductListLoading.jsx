import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductListLoading() {
    var settings = {
        slidesToShow: 6, // lg
        infinite: false,
        arrows: false,
        swipe: false,
        responsive: [
            {
                // md-lg
                breakpoint: 1279,
                settings: {
                    slidesToShow: 6,
                    // slidesToScroll: 1,
                },
            },
            {
                // md-lg
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5,
                    // slidesToScroll: 1,
                },
            },
            {
                // md-lg
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                },
            },
            {
                // sm-md
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 1,
                },
            },
            {
                // awal - xs
                breakpoint: 424,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="w-full mb-4 flex items-center justify-center mt-8">
                <div className="w-full max-w-[1350px] mx-2 md:mx-8 animate-pulse">
                    <div className="h-6 bg-slate-100 rounded w-1/4 mb-1"></div>
                    <span className="lg:h-1 h-0.5 bg-slate-100 w-full flex items-center mb-1"></span>
                    <div className="w-full flex items-end justify-end">
                        <div className="h-3 bg-slate-100 rounded w-1/6 mb-1"></div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center mt-8">
                <div className="relative py-4 w-[320px] xs:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto animate-pulse">
                    <Slider {...settings}>
                        <div className="px-2">
                            <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                <div className="w-full p-2">
                                    <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                    <div className="pt-2">
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                <div className="w-full p-2">
                                    <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                    <div className="pt-2">
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                <div className="w-full p-2">
                                    <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                    <div className="pt-2">
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                <div className="w-full p-2">
                                    <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                    <div className="pt-2">
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                <div className="w-full p-2">
                                    <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                    <div className="pt-2">
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                <div className="w-full p-2">
                                    <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                    <div className="pt-2">
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                        <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}
