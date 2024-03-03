import React from "react";

export default function Breadcrumbs() {
    return (
        <div className="bg-blue-950 md:h-36 h-32 pt-28 md:pt-32 mb-12">
            <div className="mb-4 w-full max-w-7xl mx-auto px-8">
                <div className="text-sm font-thin text-slate-500 px-4 py-2 bg-slate-50 rounded-md shadow-md">
                    <span className="cursor-pointer text-blue-950">Home</span> /{" "}
                    <span className="cursor-pointer text-blue-950">
                        Buku Rohani
                    </span>{" "}
                    / <span>Rohani Katolik</span>
                </div>
            </div>
        </div>
    );
}
