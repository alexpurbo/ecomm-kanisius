import React from "react";

export default function Testimonials() {
    return (
        <div className="mt-12 w-full max-w-7xl mx-auto px-8">
            <div className="bg-slate-300 rounded-lg shadow-lg">
                <div className="flex flex-col sm:px-8 sm:py-6 px-4 py-3">
                    <div className="flex flex-row justify-center sm:justify-stretch items-center">
                        <h1 className="text-blue-950 font-bold text-2xl whitespace-nowrap">
                            Apa Kata Mereka?
                        </h1>
                        <div className="w-full h-1 bg-blue-950 sm:flex items-center justify-center ml-4 hidden"></div>
                    </div>
                    <div className="mt-8 flex flex-row flex-wrap justify-center items-center">
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-2 lg:mb-0">
                            <div className="relative h-36 px-4 py-3 flex flex-col mx-2 rounded-md shadow-md bg-white">
                                <p className="text-slate-800 font-medium font-sans text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolore non eum vitae.
                                </p>
                                <div className="absolute right-2 bottom-2">
                                    <p className="text-sm font-bold text-slate-700">
                                        Marko Ole
                                    </p>
                                    <p className="text-sm font-semibold text-slate-600">
                                        Guru agama
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-2 lg:mb-0">
                            <div className="relative h-36 px-4 py-3 flex flex-col mx-2 rounded-md shadow-md bg-white">
                                <p className="text-slate-800 font-medium font-sans text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolore non eum vitae.
                                </p>
                                <div className="absolute right-2 bottom-2">
                                    <p className="text-sm font-bold text-slate-700">
                                        Joko Santoso
                                    </p>
                                    <p className="text-sm font-semibold text-slate-600">
                                        Seniman
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-2 lg:mb-0">
                            <div className="relative h-36 px-4 py-3 flex flex-col mx-2 rounded-md shadow-md bg-white">
                                <p className="text-slate-800 font-medium font-sans text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolore non eum vitae.
                                </p>
                                <div className="absolute right-2 bottom-2">
                                    <p className="text-sm font-bold text-slate-700">
                                        Martha Talia
                                    </p>
                                    <p className="text-sm font-semibold text-slate-600">
                                        Wiraswasta
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-2 lg:mb-0">
                            <div className="relative h-36 px-4 py-3 flex flex-col mx-2 rounded-md shadow-md bg-white">
                                <p className="text-slate-800 font-medium font-sans text-sm">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Dignissimos tempora,
                                    maiores culpa commodi, ducimus sed.
                                </p>
                                <div className="absolute right-2 bottom-2">
                                    <p className="text-sm font-bold text-slate-700">
                                        Bunga C.L
                                    </p>
                                    <p className="text-sm font-semibold text-slate-600">
                                        Karyawan Swasta
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
