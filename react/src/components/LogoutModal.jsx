import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import { CgSpinner } from "react-icons/cg";

export default function LogoutModal() {
    const [loading, setLoading] = useState(false);

    const {
        openLogoutModal,
        setOpenLogoutModal,
        setCurrentUser,
        setUserToken,
        setItemAmount,
        setCart,
        showToast,
    } = useStateContext();

    const onClickLogout = () => {
        setLoading(true);
        axiosClient.post("/logout").then((res) => {
            setCurrentUser({});
            setUserToken(null);
            setItemAmount(0);
            setCart([]);
            setOpenLogoutModal(false);
            setLoading(false);
            showToast("Berhasil Keluar");
        });
    };

    return (
        <>
            {openLogoutModal ? (
                <div className="z-[60]">
                    <div
                        className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"
                        onClick={() => setOpenLogoutModal(false)}
                    ></div>
                    <div
                        className={`fixed md:top-32 top-[78px] w-full max-w-96 bg-white inset-x-0 mx-auto z-[65] rounded-md shadow-md transition-all duration-500 delay-300 ${
                            openLogoutModal ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div
                            className="absolute right-2 top-1 cursor-pointer"
                            onClick={() => setOpenLogoutModal(false)}
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </div>

                        <div className="w-full px-8 py-6">
                            <h1 className="mb-4 text-2xl font-bold text-center">
                                Yakin ingin keluar?
                            </h1>

                            <div className="w-3/4 mx-auto">
                                <div className="flex flex-row justify-between items-center">
                                    <button
                                        className="bg-red-500 px-6 py-2 rounded-md shadow-md font-medium text-white hover:bg-red-600 hover:shadow-lg"
                                        onClick={() =>
                                            setOpenLogoutModal(false)
                                        }
                                    >
                                        Tidak
                                    </button>
                                    <button
                                        className={`bg-blue-500 px-6 py-2 rounded-md shadow-md font-medium text-white hover:bg-blue-600 hover:shadow-lg ${
                                            loading ? "cursor-not-allowed" : ""
                                        }`}
                                        disabled={loading ? true : false}
                                        onClick={() => onClickLogout()}
                                    >
                                        {loading ? (
                                            <div className="w-full flex justify-center">
                                                <CgSpinner className="animate-spin rounded-full h-5 w-5 mr-3" />
                                            </div>
                                        ) : (
                                            <p>Keluar</p>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
