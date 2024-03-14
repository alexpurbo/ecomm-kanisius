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
import ProductListLoading from "./ProductListLoading";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import LoginModal from "./LoginModal";

export default function ProductList({ title, dataProducts }) {
    // const [products, setProducts] = useState(dataProducts);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const products = dataProducts;
    const { currentUser, userToken, openLogin, setOpenLogin, setItemAmount } =
        useStateContext();

    // console.log(products);

    const onClick = async (prod) => {
        if (currentUser.C_ID) {
            axiosClient
                .post("/cart", {
                    customer: currentUser.C_ID,
                    product: prod.prodId,
                    amount: 1,
                    price: prod.prodPrice2,
                })
                .then(({ data }) => {
                    // console.log(data);
                    setCartAmount();
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = Object.values(
                            error.response.data.errors
                        ).reduce((accum, next) => [...accum, ...next], []);
                    }
                });
        } else {
            setOpenLogin(true);
        }
    };

    const setCartAmount = () => {
        axiosClient.get("/cartAmount").then(({ data }) => {
            setItemAmount(data[0].cart_amount);
        });
    };

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
            {/* <LoginModal /> */}

            {products.length == 0 && <ProductListLoading />}

            {products.length > 0 && (
                <div className="mt-8">
                    <ProductTitle title={title} />

                    <div className="w-full flex items-center justify-center">
                        <div className="w-[320px] xs:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto">
                            {products.length > 0 && (
                                <Slider {...settings}>
                                    {products.map((prod, index) => (
                                        // index < 6 && (
                                        <div className="px-2" key={prod.prodId}>
                                            <div className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md lg:w-[153px] md:w-[136px] sm:w-[196px] w-[142px] group transition">
                                                <a
                                                    href={`/product-detail/${prod.prodId}`}
                                                >
                                                    <div className="w-full p-2">
                                                        <div className="flex items-center justify-center relative">
                                                            <img
                                                                className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px]"
                                                                src={
                                                                    index == 0
                                                                        ? book1
                                                                        : index ==
                                                                          1
                                                                        ? book2
                                                                        : index ==
                                                                          2
                                                                        ? book3
                                                                        : index ==
                                                                          3
                                                                        ? book4
                                                                        : index ==
                                                                          4
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
                                                <div
                                                    className="absolute hidden group-hover:block group-hover:-translate-x-9 bottom-[118px] bg-blue-950/70 hover:bg-blue-950 rounded-full h-7 w-7 -right-6 transition duration-700 ease-in-out cursor-pointer"
                                                    onClick={() =>
                                                        onClick(prod)
                                                    }
                                                >
                                                    <div className="flex w-full h-full items-center justify-center">
                                                        <PlusIcon className="h-5 w-5 text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
