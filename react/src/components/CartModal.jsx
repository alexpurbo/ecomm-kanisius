import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function CartModal() {
    const { openCartModal, setOpenCartModal, itemAmount, cart } =
        useStateContext();

    const total = cart.reduce(
        (a, v) => (a = a + v.cart_price * v.cart_amount),
        0
    );

    return (
        <>
            {openCartModal ? (
                <div className="relative">
                    <div
                        className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"
                        onClick={() => setOpenCartModal(false)}
                    ></div>
                </div>
            ) : (
                ""
            )}

            <div
                className={`fixed h-screen w-96 bg-white z-[65] ${
                    openCartModal ? "right-0" : "-right-96"
                } top-0 transition-all ease-in-out duration-500`}
            >
                <div className="relative h-full w-full">
                    <div
                        className="absolute right-4 top-4 text-blue-950 font-bold text-2xl ml-4 cursor-pointer"
                        onClick={() => setOpenCartModal(false)}
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col py-8 px-4">
                        <div className="flex flex-row justify-between mt-2">
                            <h1 className="font-semibold text-lg text-black">
                                Keranjang ({itemAmount})
                            </h1>
                        </div>
                        <div className="mt-1 border border-t-2 border-t-blue-950 w-full"></div>
                        <div className="mt-1">
                            <div className="h-96 overflow-auto scrollbar bg-slate-100 scroll-smooth">
                                <ul className="py-2 px-1.5">
                                    {cart.map((data, index) => (
                                        <li className="mb-1" key={index}>
                                            <div className="flex flex-row justify-between">
                                                <div className="flex flex-col">
                                                    <h1>{data.ProdDesc3}</h1>
                                                    <p className="pl-4">
                                                        {data.cart_amount} x{" "}
                                                        <FormatRupiah
                                                            value={
                                                                data.cart_price
                                                            }
                                                        />
                                                    </p>
                                                </div>
                                                <div className="flex items-center font-semibold">
                                                    <FormatRupiah
                                                        value={
                                                            data.cart_price *
                                                            data.cart_amount
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-0.5 bg-white"></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-end mt-2">
                            <h1 className="font-semibold text-lg">
                                Total: <FormatRupiah value={total} />
                            </h1>
                        </div>
                        <div className="flex flex-row justify-around mt-4">
                            <div className="w-1/2 mx-1">
                                <button className="w-full bg-blue-950 rounded-md shadow-md text-white font-medium py-1.5 hover:scale-105 transition duration-200">
                                    Checkout
                                </button>
                            </div>
                            <div className="w-1/2 mx-2">
                                <button className="w-full bg-red-500 rounded-md shadow-md text-white font-medium py-1.5 hover:scale-105 transition duration-200">
                                    Hapus Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
