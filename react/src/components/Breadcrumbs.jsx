import React from "react";

export default function Breadcrumbs() {
    return (
        <div className="pt-28 md:pt-32 mb-4 w-full max-w-7xl mx-auto px-8">
            <div className="text-sm font-thin text-slate-500">
                <span className="cursor-pointer text-blue-950">Home</span> /{" "}
                <span className="cursor-pointer text-blue-950">
                    Buku Rohani
                </span>{" "}
                / <span>Rohani Katolik</span>
            </div>
        </div>
    );
}
