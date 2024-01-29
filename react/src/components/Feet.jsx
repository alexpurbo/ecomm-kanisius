import React from "react";
import ProductTitle from "./ProductTitle";
import newsImg1 from "../assets/img/books/1023002068-COVER1-MENDAUR_ULANG-2023.jpg";
import newsImg2 from "../assets/img/books/1023002069-COVER1-ENERGI_TERBARUKAN-2023.jpg";
import newsImg3 from "../assets/img/books/1023002070-COVER1-HIDUP_BERKELANJUTAN-2023.jpg";

export default function Feet() {
    return (
        <div className="mt-20 w-full max-w-7xl mx-auto">
            <ProductTitle title="Kanisius Blog" />
            <div className="px-8">
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/mULvj8-bmCA?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Ftoko.kanisiusmedia.co.id&widgetid=1"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-start justify-start">
                            {/* <ProductTitle title="News" /> */}
                            <div className="w-full pl-2 md:pl-8 mb-3">
                                <div className="relative w-full bg-slate-300 rounded-lg shadow-md">
                                    <div className="flex flex-col p-4">
                                        <div className="flex flex-row justify-stretch w-full">
                                            <div className="w-1/5">
                                                <div className="h-[88px] w-[88px] rounded-full bg-blue-950 flex items-center justify-center">
                                                    <img
                                                        src={newsImg1}
                                                        className="h-20 w-20 rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-8">
                                                <h1 className="font-bold text-blue-950">
                                                    Judul Artikel
                                                </h1>
                                                <p className="text-slate-800 font-medium font-sans text-sm">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Natus, facere. Vitae
                                                    nesciunt velit debitis
                                                    pariatur?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute right-2 bottom-2">
                                        <p className="text-sm text-slate-600 text-right font-medium">
                                            12 Desember 2023
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full pl-2 md:pl-8 mb-3">
                                <div className="relative w-full bg-slate-300 rounded-lg shadow-md">
                                    <div className="flex flex-col p-4">
                                        <div className="flex flex-row justify-stretch w-full">
                                            <div className="w-1/5">
                                                <div className="h-[88px] w-[88px] rounded-full bg-blue-950 flex items-center justify-center">
                                                    <img
                                                        src={newsImg3}
                                                        className="h-20 w-20 rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-8">
                                                <h1 className="font-bold text-blue-950">
                                                    Bundling Inspirasi Batin
                                                </h1>
                                                <p className="text-slate-800 font-medium font-sans text-sm">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Natus, facere. Vitae
                                                    nesciunt velit debitis
                                                    pariatur?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute right-2 bottom-2">
                                        <p className="text-sm text-slate-600 text-right font-medium">
                                            12 Desember 2023
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full pl-2 md:pl-8 mb-3">
                                <div className="relative w-full bg-slate-300 rounded-lg shadow-md">
                                    <div className="flex flex-col p-4">
                                        <div className="flex flex-row justify-stretch w-full">
                                            <div className="w-1/5">
                                                <div className="h-[88px] w-[88px] rounded-full bg-blue-950 flex items-center justify-center">
                                                    <img
                                                        src={newsImg2}
                                                        className="h-20 w-20 rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-8">
                                                <h1 className="font-bold text-blue-950">
                                                    Promo Natal
                                                </h1>
                                                <p className="text-slate-800 font-medium font-sans text-sm">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Natus, facere. Vitae
                                                    nesciunt velit debitis
                                                    pariatur?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute right-2 bottom-2">
                                        <p className="text-sm text-slate-600 text-right font-medium">
                                            20 Desember 2023
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
