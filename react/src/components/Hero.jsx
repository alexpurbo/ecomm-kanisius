import React from "react";
import HeroSlider from "./HeroSlider";
import { NavLink } from "react-router-dom";

export default function Hero() {
    return (
        <div className="pt-28 md:pt-32 w-full max-w-7xl mx-auto px-8">
            <div className="">
                <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
                    <div className="flex flex-col lg:w-1/2 w-full">
                        <div className="px-4 py-6">
                            <div className="text-xl font-bold">
                                Kanisiusmedia
                            </div>
                            <p className="font-medium text-slate-700 text-justify leading-6 mt-2">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Debitis repellendus, atque id
                                sunt ab corporis nostrum voluptate? Eos enim
                                voluptas accusamus impedit, amet itaque
                                dignissimos quae. Cumque, iusto? Consequuntur
                                explicabo possimus consequatur nam? Atque, illo
                                nihil quam eveniet nesciunt aut, eaque, error
                                deleniti accusamus beatae ea quos pariatur porro
                                quibusdam? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Velit dicta id
                                labore. Impedit, consectetur harum!
                            </p>
                            <div className="text-xl font-bold pt-2">
                                Bergabung menjadi Member KRC?
                            </div>
                            <p className="font-medium text-slate-700 text-justify leading-6 mt-2">
                                Pelajari tentang KRC dan bergabung dengan kami
                            </p>
                            <NavLink to={"/krc"}>
                                <button className="mt-2 px-6 py-3 bg-blue-950 text-white font-bold rounded-md shadow-md hover:bg-white border hover:border-blue-950 hover:text-blue-950">
                                    Selengkapnya
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="px-4 py-6">
                            <HeroSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
