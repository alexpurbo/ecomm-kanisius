import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Toast() {
    const { toast, closeToast } = useStateContext();

    return (
        <>
            {toast.show && (
                <div className=" w-[300px] py-2 px-3 font-medium text-white rounded bg-emerald-500 fixed right-4 top-24 md:top-32 z-50 animate-fade-in-down">
                    {toast.message}
                    <div
                        className="absolute h-4 w-4 rounded-full right-2 top-1 cursor-pointer flex items-center justify-center"
                        onClick={closeToast}
                    >
                        <XCircleIcon className="h-4 w-4" />
                    </div>
                </div>
            )}
        </>
    );
}
