import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function CategoryDetail() {
    const category = useStateContext();

    console.log(category);

    return (
        <div className="w-full mx-auto max-w-7xl mt-8 px-8">
            <div className="flex flex-row">
                <div className="hidden sm:block w-1/5 max-h-screen overflow-auto scrollbar rounded-lg">
                    <div className="flex flex-col w-full bg-slate-100 rounded-lg shadow-lg px-4 py-6">
                        <div className="text-lg font-semibold">Filter</div>
                        <div className="bg-slate-300 w-full h-0.5 mt-1 mb-3"></div>

                        {category.categorys.map((cat) => (
                            <div
                                className="mb-2 text-slate-500 font-bold"
                                key={cat.id}
                            >
                                <div className="flex flex-row items-center">
                                    {cat.category_name}
                                    <ChevronDownIcon className="h-5 w-5 pl-2" />
                                </div>
                                <ul className="font-medium pl-3 mt-3">
                                    {category.categorys[0].category_details.map(
                                        (dtl) => (
                                            <a href="">
                                                <li
                                                    className="mb-2 px-1 rounded-sm hover:text-blue-950 hover:bg-slate-100"
                                                    key={
                                                        dtl.detail + "" + dtl.id
                                                    }
                                                >
                                                    {dtl.detail}
                                                </li>
                                            </a>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                        {/* <div className="pl-3">
                            <ul className="font-medium">
                                {category.categorys[0].category_details.map(
                                    (dtl) => (
                                        <a href="">
                                            <li
                                                className="mb-2 px-1 rounded-sm hover:text-blue-950 hover:bg-slate-100"
                                                key={dtl.detail + "" + dtl.id}
                                            >
                                                {dtl.detail}
                                            </li>
                                        </a>
                                    )
                                )}
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="w-4/5 pl-4 ">
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg mb-4">
                            Judul Kategori
                        </h1>
                        <div className="flex flex-row flex-wrap">
                            <div className="px-2 w-1/4">
                                <div className="relative w-full h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <div className="w-full p-2">
                                        <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                        <div className="pt-2">
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 w-1/4 mb-2">
                                <div className="relative w-full h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <div className="w-full p-2">
                                        <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                        <div className="pt-2">
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 w-1/4 mb-2">
                                <div className="relative w-full h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <div className="w-full p-2">
                                        <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                        <div className="pt-2">
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 w-1/4 mb-2">
                                <div className="relative w-full h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <div className="w-full p-2">
                                        <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                        <div className="pt-2">
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 w-1/4 mb-2">
                                <div className="relative w-full h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md cursor-pointer bg-white">
                                    <div className="w-full p-2">
                                        <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-slate-100"></div>
                                        <div className="pt-2">
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full mb-1"></div>
                                            <div className="absolute right-3 bottom-2 h-2 bg-slate-100 rounded w-1/3 mb-1"></div>
                                        </div>
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
