import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

export default function ProductAddToast() {
    const { addProductToast, closeAddProductToast } = useStateContext();
    return (
        <>
            {addProductToast.show && (
                <div className="fixed md:top-36 top-[78px] w-full max-w-96 bg-white inset-x-0 mx-auto z-[65] rounded-md shadow-md transition-all duration-500 delay-300 border border-slate-300">
                    <div className="relative my-6 mx-4 flex flex-col">
                        <div
                            className="absolute -right-2 -top-4 h-5 w-5 border border-blue-950 rounded-full cursor-pointer"
                            onClick={closeAddProductToast}
                        >
                            <XMarkIcon className="h-full w-full text-blue-950" />
                        </div>
                        <h1 className="font-bold text-center text-xl text-blue-950 mb-2">
                            Produk Berhasil Ditambahkan
                        </h1>
                        <span className="h-0.5 w-full bg-slate-200 mb-2"></span>
                        <p className="text-base text-slate-600 font-medium mb-4">
                            {addProductToast.product} Berhasil ditambahkan dalam
                            keranjang
                        </p>
                        <div className="text-right w-full">
                            <Link
                                className="px-4 py-2 font-bold text-base text-blue-950 hover:scale-110 hover:text-blue-900"
                                to={"/cart"}
                            >
                                Lihat Keranjang
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
