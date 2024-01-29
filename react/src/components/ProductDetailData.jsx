import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import book1 from "../assets/img/books/Jejak Keselamatan Allah.jpg";

export default function ProductDetailData() {
    return (
        <div className="w-full mb-16 flex items-center justify-center">
            <div className="w-full md:mx-8 max-w-7xl mx-auto px-8">
                <div className="flex md:flex-row flex-wrap flex-col items-start justify-between">
                    <div className="md:w-1/4 md:mb-0 mb-4 w-full flex items-center justify-center">
                        <div className="max-w-72">
                            <img src={book1} alt="judul buku" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-3/4 lg:mb-0 mb-4 w-full">
                        <div className="px-8 flex flex-col">
                            <div className="w-full text-lg text-slate-900 font-bold">
                                Jejak Jejak Karya Keselamatan
                            </div>
                            <div className="font-semibold text-xl text-slate-700 pb-2">
                                Rp. 75.000
                            </div>
                            <span className="h-[1px] bg-blue-950 w-full flex items-center"></span>
                            <div className="flex flex-row flex-wrap py-2">
                                <div className="w-1/2 lg:mb-2 text-sm font-semibold text-slate-500">
                                    G.Tri Wardoyo, CM.
                                </div>
                                <div className="w-1/2 lg:mb-2 text-sm font-semibold text-slate-500">
                                    12 Agustus 2020
                                </div>
                                <div className="w-1/2 text-sm font-semibold text-slate-500">
                                    Kanisius
                                </div>
                                <div className="w-1/2 text-sm font-semibold text-slate-500">
                                    978-979-497-957-0
                                </div>
                            </div>
                            <span className="h-[1px] bg-blue-950 w-full flex items-center"></span>
                            <div className="mt-3">
                                <h1>Deskripsi</h1>
                                <div className="">
                                    Tahun Yobel adalah Tahun Sabat yang ketujuh.
                                    Tulisan dari TAHUN SABAT ke TAHUN YUBILEUM:
                                    Makna Peredaran Waktu Dalam Terang Im
                                    25:1-55 ini mau mengkaji dan memaparkan
                                    panorama ringkas dari butir-butir pemahaman
                                    bangsa Israel akan perjalanan dari tahun
                                    yang satu ke tahun yang lain dalam kaitannya
                                    dengan Tahun-Tahun Yubileum yang masih
                                    berlangsung sampai sekarang. Maksud tulisan
                                    ini adalah sebagai pancingan bagi kita untuk
                                    aktif merefleksikan perjalanan waktu yang
                                    telah menjadi bagian dari hidup kita dan
                                    memacu kita berbuat sesuatu dalam terang
                                    iman Kristen.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full flex items-center justify-center">
                        <div className="w-full px-2">
                            <div className="border shadow-md rounded-md border-slate-500">
                                <div className="px-4 py-6 flex flex-col">
                                    <div className="w-full flex items-center justify-center mb-2">
                                        <h1 className="text-base font-semibold">
                                            Masukan Jumlah Order
                                        </h1>
                                    </div>
                                    <div className="w-full flex flex-row items-center justify-center mb-2">
                                        <div className="w-3/4 border flex flex-row items-center justify-center rounded-lg">
                                            <button className="hover:bg-blue-400/50 transition ease-in-out delay-200 py-3 px-2 rounded-lg text-lg font-bold">
                                                <MinusIcon className="h-4 w-4" />
                                            </button>
                                            <input
                                                type="text"
                                                class="w-full px-5 text-center"
                                                value="1"
                                                id="inputItemValue"
                                                readonly
                                            />
                                            <button className="hover:bg-blue-400/50 transition ease-in-out delay-200 py-3 px-2 rounded-lg text-lg font-bold">
                                                <PlusIcon className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-row items-center justify-center mb-2">
                                        <div className="w-1/3">
                                            <p className="text-left text-slate-500 font-medium">
                                                SubTotal
                                            </p>
                                        </div>
                                        <div className="w-2/3">
                                            <p className="text-right font-semibold text-lg">
                                                Rp.75.000
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-md shadow-md py-2 bg-blue-950 cursor-pointer hover:bg-blue-900 mb-2">
                                        <p className="text-center font-semibold text-base text-white">
                                            + Keranjang
                                        </p>
                                    </div>
                                    <div className="w-full rounded-md shadow-md py-2 border border-blue-950 cursor-pointer hover:border-blue-900 mb-2 text-blue-950 hover:text-blue-900">
                                        <p className="text-center font-semibold text-base ">
                                            Beli
                                        </p>
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
