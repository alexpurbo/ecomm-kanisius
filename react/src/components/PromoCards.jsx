import React from "react";
import parse from "html-react-parser";
import banner1 from "../assets/img/banner/Banner 1 mini.png";
import banner2 from "../assets/img/banner/Banner 2 mini.png";
import banner3 from "../assets/img/banner/Banner 3 mini.png";

export default function PromoCards({ promos }) {
    const dataPromo = promos;

    console.log(dataPromo);
    return (
        <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
            {dataPromo ? (
                <div className="flex flex-row items-center justify-start">
                    {dataPromo.map((prod, index) => (
                        <div className="w-1/2 p-2" key={index}>
                            <div className="w-full bg-slate-300 rounded-lg shadow-md">
                                <div className="flex flex-col">
                                    <div className="px-4 pb-3 pt-8 flex items-center justify-center">
                                        {/* <div className="bg-blue-500 w-full h-32 rounded-md"></div> */}
                                        <img
                                            // src={`https://test.kanisiusmedia.co.id/${prod.postImage}`}
                                            src={banner1}
                                            alt={prod.postJudul}
                                            className="rounded-md cursor-pointer hover:scale-105 transition duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col px-4 mb-4">
                                        <h1 className="font-bold text-2xl mb-1 w-full flex justify-center cursor-pointer hover:text-blue-950">
                                            {prod.postJudul}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-row items-center justify-start">
                    <div className="w-1/3 h-72 p-2">
                        <div className="w-full h-full bg-slate-300 rounded-lg shadow-md animate-pulse"></div>
                    </div>
                    <div className="w-1/3 h-72 p-2">
                        <div className="w-full h-full bg-slate-300 rounded-lg shadow-md animate-pulse"></div>
                    </div>
                    <div className="w-1/3 h-72 p-2">
                        <div className="w-full h-full bg-slate-300 rounded-lg shadow-md animate-pulse"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
