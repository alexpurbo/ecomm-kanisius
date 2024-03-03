import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";

export default function CategoryDetail() {
    // const category = useStateContext();

    // console.log(category);

    const { category, subcategory, subcategorydetail } = useParams();
    console.log(category);
    console.log(subcategory);
    console.log(subcategorydetail);

    return (
        <>
            <div className="w-full pt-28 md:pt-32 bg-blue-950 h-44">
                <div className="relative h-full w-full">
                    <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                        <p className="md:font-medium font-light md:text-lg text-sm">
                            <span className="md:font-bold font-semibold">
                                Kategori :
                            </span>{" "}
                            {category ? (
                                <a href={`/category/${category}`}>{category}</a>
                            ) : (
                                ""
                            )}{" "}
                            {subcategory ? "/ " : ""}
                            {subcategory ? (
                                <a
                                    href={`/category/${category}/${subcategory}`}
                                >
                                    {subcategory}
                                </a>
                            ) : (
                                ""
                            )}{" "}
                            {subcategorydetail ? "/ " : ""}
                            {subcategorydetail ? (
                                <a
                                    href={`/category/${category}/${subcategory}/${subcategorydetail}`}
                                >
                                    {subcategorydetail}
                                </a>
                            ) : (
                                ""
                            )}
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                    <div className=""></div>
                </div>
            </div>
            <div className="w-full mx-auto max-w-7xl md:mt-12 mt-8 px-8">
                <div className="flex flex-col w-[320px] xs:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto mb-8">
                    <div className="flex items-center justify-end w-full mb-4">
                        <p className="font-semibold text-sm text-slate-500">
                            Menampikan 20 dari 140 produk Teologi
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-4 gap-x-2 mb-4">
                        <div className="w-full bg-slate-200 rounded-md shadow-md h-72"></div>
                        <div className="w-full bg-slate-200 rounded-md shadow-md h-72"></div>
                        <div className="w-full bg-slate-200 rounded-md shadow-md h-72"></div>
                        <div className="w-full bg-slate-200 rounded-md shadow-md h-72"></div>
                        <div className="w-full bg-slate-200 rounded-md shadow-md h-72"></div>
                        <div className="w-full bg-slate-200 rounded-md shadow-md h-72"></div>
                        <div className="w-full bg-slate-200 rounded-md shadow-md h-72"></div>
                        <div className="w-full bg-slate-200 rounded-md shadow-md h-72"></div>
                    </div>
                    <div className="flex items-center justify-end w-full mb-4">
                        <p className="font-semibold text-sm text-slate-500">
                            Menampikan 20 dari 140 produk Teologi
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
