import React, { useEffect, useLayoutEffect, useState } from "react";
import ProductTitle from "./ProductTitle";
import book1 from "../assets/img/books/Jejak Keselamatan Allah.jpg";
import book2 from "../assets/img/books/jesuit magis.jpg";
import book3 from "../assets/img/books/kontemplasi latihan rohani.jpg";
import book4 from "../assets/img/books/memuliakan manusia.jpg";
import book5 from "../assets/img/books/pemurnian jiwa.jpg";
import book6 from "../assets/img/books/sekar pergo ke dokter gigi.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function ProductList({ title, dataProducts }) {
    // const [products, setProducts] = useState(dataProducts);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const products = dataProducts;
    // console.log(products);
    // useEffect(() => {

    // }, []);

    // useLayoutEffect(() => {
    //     setScreenSize(window.innerWidth);
    //     console.log(screenSize);
    // }, []);

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
        <div className="mt-8">
            <ProductTitle title={title} />

            <div className="w-full flex items-center justify-center">
                <div className="w-[320px] xs:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto">
                    <Slider {...settings}>
                        {products.map((prod, index) => (
                            // index < 6 && (
                            <div className="px-2" key={prod.prodId}>
                                <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md lg:w-[153px] md:w-[136px] sm:w-[196px] w-[142px]">
                                    <a href={`/product-detail/${prod.prodId}`}>
                                        <div className="w-full p-2">
                                            <div className="flex items-center justify-center">
                                                <img
                                                    className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px]"
                                                    src={
                                                        index == 0
                                                            ? book1
                                                            : index == 1
                                                            ? book2
                                                            : index == 2
                                                            ? book3
                                                            : index == 3
                                                            ? book4
                                                            : index == 4
                                                            ? book5
                                                            : book6
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <div className="p-2">
                                                <h2 className="font-normal leading-tight mb-2 capitalized text-sm line-clamp-3">
                                                    {prod.ProdDesc3}
                                                </h2>
                                                <div className="absolute right-3 bottom-2">
                                                    <p className="font-medium text-slate-500 text-right text-xs">
                                                        <FormatRupiah
                                                            value={
                                                                prod.prodPrice2
                                                            }
                                                        />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* <div className="px-2">
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
                        </div> */}
        </div>
    );
}
