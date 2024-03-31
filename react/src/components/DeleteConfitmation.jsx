import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { CgSpinner } from "react-icons/cg";

export default function DeleteConfitmation({
    onTidakClick,
    onHapusClick,
    deleteLoading,
}) {
    return (
        <>
            <div className="relative">
                <div className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"></div>
            </div>
            <div
                className={`fixed md:top-32 top-[78px] w-full max-w-96 bg-white inset-x-0 mx-auto z-[65] rounded-md shadow-md transition-all duration-500 delay-300`}
            >
                <div
                    className="absolute right-2 top-1 cursor-pointer"
                    onClick={() => onTidakClick()}
                >
                    <XMarkIcon className="h-5 w-5" />
                </div>

                <div className="w-full px-8 py-6">
                    <h1 className="mb-4 text-xl font-bold text-center">
                        Hapus semua dari Keranjang ?
                    </h1>

                    <div className="w-3/4 mx-auto">
                        <div className="flex flex-row justify-between items-center">
                            <button
                                className="bg-red-500 px-6 py-2 rounded-md shadow-md font-medium text-white hover:bg-red-600 hover:shadow-lg"
                                onClick={() => onTidakClick()}
                                disabled={deleteLoading ? true : false}
                            >
                                Tidak
                            </button>
                            <button
                                className={`bg-blue-500 px-6 py-2 rounded-md shadow-md font-medium text-white hover:bg-blue-600 hover:shadow-lg `}
                                disabled={deleteLoading ? true : false}
                                onClick={() => onHapusClick()}
                            >
                                {deleteLoading ? (
                                    <div className="w-full flex justify-center">
                                        <CgSpinner className="animate-spin rounded-full h-5 w-5 mr-3" />
                                    </div>
                                ) : (
                                    <p>Hapus</p>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
