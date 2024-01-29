import React from "react";

export default function ProductTitle({ title }) {
    return (
        <div className="w-full mb-4 flex items-center justify-center">
            <div className="w-full max-w-[1350px] mx-2 md:mx-8">
                <h1 className="font-bold text-2xl flex-initial mb-1">
                    {title}
                </h1>
                <span className="lg:h-1 h-0.5 bg-blue-950 w-full flex items-center"></span>
                <p className="text-right text-blue-800 font-normal">
                    <a href="">Selengkapnya</a>
                </p>
            </div>
        </div>
    );
}
