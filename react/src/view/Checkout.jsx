import React from "react";
import PageComponent from "../components/PageComponent";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddAddress from "../components/AddAddress";

export default function Checkout() {
    return (
        <div>
            <PageComponent>
                <div className="">
                    <AddAddress />
                    <div className="w-full pt-28 md:pt-32 bg-blue-950 lg:h-44 h-28 md:h-32">
                        <div className="relative h-full w-full">
                            <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                                <p className="md:font-medium font-light md:text-lg text-sm">
                                    Checkout
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                            <div className=""></div>
                        </div>
                    </div>
                    <div className="w-full mx-auto max-w-7xl md:mt-12 mt-8 md:px-8 px-2">
                        <div className="flex md:flex-row flex-col bg-slate-200 rounded-xl">
                            <div className="md:w-3/5 w-full">
                                <div className="m-3 rounded-lg shadow-lg border border-slate-200 bg-white">
                                    <div className="flex flex-col justify-start px-4 py-3">
                                        <h1 className="font-semibold text-lg text-blue-950 mb-3">
                                            Alamat Pengiriman
                                        </h1>
                                        <p className="text-center text-2xl font-bold text-slate-600 mb-6">
                                            Tidak Ada Alamat
                                        </p>
                                        <div className="w-full flex justify-end">
                                            <button className="flex flex-row items-center px-6 py-2 bg-blue-950 font-medium text-white rounded-md">
                                                <PlusIcon className="h-5 w-5" />{" "}
                                                <p className="pl-2">
                                                    Tambahkan Alamat
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-3 rounded-lg shadow-lg border border-slate-200 bg-white">
                                    <div className="px-4 py-2">
                                        <div className="border-b border-blue-950 flex flex-row items-start justify-start px-4 py-3">
                                            <div className="rounded-md h-[108px] w-[72px] bg-blue-500 hidden lg:block"></div>
                                            {/* 72 x 108 */}
                                            <div className="flex flex-col pl-2 w-3/5">
                                                <h1>Judul dari Produk</h1>
                                                <p>3 barang - 2kg</p>
                                                <p>Rp 30.000</p>
                                            </div>
                                            <div className="">
                                                <p>Rp 90.000</p>
                                            </div>
                                        </div>
                                        <div className="border-b border-blue-950 flex flex-row items-start justify-start px-4 py-3">
                                            <div className="rounded-md h-[108px] w-[72px] bg-blue-500 hidden lg:block"></div>
                                            {/* 72 x 108 */}
                                            <div className="flex flex-col pl-2 w-3/5">
                                                <h1>Judul dari Produk</h1>
                                                <p>3 barang - 2kg</p>
                                                <p>Rp 30.000</p>
                                            </div>
                                            <div className="">
                                                <p>Rp 90.000</p>
                                            </div>
                                        </div>
                                        <div className="border-b border-blue-950 flex flex-row items-start justify-start px-4 py-3">
                                            <div className="rounded-md h-[108px] w-[72px] bg-blue-500 hidden lg:block"></div>
                                            {/* 72 x 108 */}
                                            <div className="flex flex-col pl-2 w-3/5">
                                                <h1>Judul dari Produk</h1>
                                                <p>3 barang - 2kg</p>
                                                <p>Rp 30.000</p>
                                            </div>
                                            <div className="">
                                                <p>Rp 90.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/5 w-full"></div>
                        </div>
                    </div>
                </div>
            </PageComponent>
        </div>
    );
}
