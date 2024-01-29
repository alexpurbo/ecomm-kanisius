import React from "react";
import ProductTitle from "./ProductTitle";
import book1 from "../assets/img/books/Jejak Keselamatan Allah.jpg";
import book2 from "../assets/img/books/jesuit magis.jpg";
import book3 from "../assets/img/books/kontemplasi latihan rohani.jpg";
import book4 from "../assets/img/books/memuliakan manusia.jpg";
import book5 from "../assets/img/books/pemurnian jiwa.jpg";
import book6 from "../assets/img/books/sekar pergo ke dokter gigi.jpg";
import prodIcon1 from "../assets/img/prod-icon/product-icon1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductListWithIcon({ title, color }) {
    var settings = {
        slidesToShow: 6, // lg
        infinite: false,
        arrows: false,
        responsive: [
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
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                },
            },
            {
                // xs - sm
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
        <div className="mt-8">
            <ProductTitle title={title} />

            <div className="w-full flex items-center justify-center">
                <div className="relative py-4 w-[320px] xs:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto">
                    <div
                        className={`${color} absolute block top-0 left-0 h-full lg:w-1/4 md:w-[30%] sm:w-2/5 w-3/4 z-10 rounded-lg`}
                    >
                        <div className="w-2/3 flex items-center justify-center pl-4 pr-2 py-8 h-full">
                            <div className="flex flex-col">
                                <p className="font-bold text-xl text-white">
                                    {title}
                                </p>
                                <p className="font-semibold text-white">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10">
                        <Slider {...settings}>
                            <div className="px-2">
                                <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full ">
                                    {/* <div className="w-full p-2">
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px]"
                                                src={book1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="font-semibold leading-tight mb-2 capitalized lg:text-base text-sm line-clamp-2">
                                                Jejak Jejak Karya Keselamatan
                                                Allah Jejak Jejak Karya
                                            </h2>
                                            <div className="absolute right-3 bottom-2">
                                                <p className="font-medium text-slate-500 text-right text-xs">
                                                    Rp 75.000
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <a href="/product-detail">
                                        <div className="w-full p-2">
                                            <img
                                                className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px]"
                                                src={book2}
                                                alt=""
                                            />
                                            <div className="p-2">
                                                <h2 className="font-semibold leading-tight mb-2 capitalized lg:text-base text-sm line-clamp-2">
                                                    Jesuit Magis
                                                </h2>
                                                <div className="absolute right-3 bottom-2">
                                                    <p className="font-medium text-slate-500 text-right text-xs">
                                                        Rp 75.000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <a href="/product-detail">
                                        <div className="w-full p-2">
                                            <img
                                                className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px]"
                                                src={book3}
                                                alt=""
                                            />
                                            <div className="p-2">
                                                <h2 className="font-semibold leading-tight mb-2 capitalized lg:text-base text-sm line-clamp-2">
                                                    kontemplasi latihan rohani
                                                </h2>
                                                <div className="absolute right-3 bottom-2">
                                                    <p className="font-medium text-slate-500 text-right text-xs">
                                                        Rp 75.000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <a href="/product-detail">
                                        <div className="w-full p-2">
                                            <img
                                                className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px]"
                                                src={book4}
                                                alt=""
                                            />
                                            <div className="p-2">
                                                <h2 className="font-semibold leading-tight mb-2 capitalized lg:text-base text-sm line-clamp-2">
                                                    memuliakan manusia
                                                </h2>
                                                <div className="absolute right-3 bottom-2">
                                                    <p className="font-medium text-slate-500 text-right text-xs">
                                                        Rp 75.000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <a href="/product-detail">
                                        <div className="w-full p-2">
                                            <img
                                                className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px]"
                                                src={book5}
                                                alt=""
                                            />
                                            <div className="p-2">
                                                <h2 className="font-semibold leading-tight mb-2 capitalized lg:text-base text-sm line-clamp-2">
                                                    pemurnian jiwa
                                                </h2>
                                                <div className="absolute right-3 bottom-2">
                                                    <p className="font-medium text-slate-500 text-right text-xs">
                                                        Rp 75.000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] w-full border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <a href="/product-detail">
                                        <div className="w-full p-2">
                                            <img
                                                className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px]"
                                                src={book6}
                                                alt=""
                                            />
                                            <div className="p-2">
                                                <h2 className="font-semibold leading-tight mb-2 capitalized lg:text-base text-sm line-clamp-2">
                                                    sekar pergi ke dokter gigi
                                                </h2>
                                                <div className="absolute right-3 bottom-2">
                                                    <p className="font-medium text-slate-500 text-right text-xs">
                                                        Rp 75.000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}