import React from "react";

export default function BreadcrumbTitle({ title }) {
    return (
        <div className="w-full pt-28 md:pt-32 bg-blue-950 lg:h-44 h-32 sm:h-28 md:h-36">
            <div className="relative h-full w-full">
                <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                    <p className="md:font-medium font-light md:text-lg text-sm">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
}
