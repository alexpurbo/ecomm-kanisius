import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import book1 from "../assets/img/books/Jejak Keselamatan Allah.jpg";
import axiosClient from "../axios";
import { FormatRupiah } from "@arismun/format-rupiah";
import { useStateContext } from "../contexts/ContextProvider";

export default function ProductDetailData(id) {
    const [product, setProduct] = useState([]);

    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(1);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState();
    const [stock, setStock] = useState(0);
    const [productId, setProductId] = useState();
    const { currentUser, userToken, openLogin, setOpenLogin, setItemAmount } =
        useStateContext();
    // console.log(product);

    const getDataProduct = () => {
        setLoading(true);
        axiosClient.get(`product/${id.id}`).then(({ data }) => {
            // debugger;
            setProduct(data.data[0]);
            setLoading(false);
            // console.log(data);
        });
    };

    const incraseAmount = (count) => {
        if (count == "plus") {
            setAmount(amount + 1);
        } else {
            setAmount(amount - 1);
        }
        setTotal(amount * price);
        // console.log(price);
        // console.log(total);
        // console.log(amount);
    };

    useEffect(() => {
        setLoading(true);
        axiosClient.get(`product/${id.id}`).then(({ data }) => {
            // debugger;
            setProduct(data.data[0]);
            setPrice(data.data[0].prodPrice2);
            setLoading(false);
            setStock(data.data[0].stok);
        });
    }, []);

    const addToCart = (prod) => {
        if (currentUser.C_ID) {
            axiosClient
                .post("/cart", {
                    customer: currentUser.C_ID,
                    product: prod.prodId,
                    amount: amount,
                    price: price,
                })
                .then(({ data }) => {
                    // console.log(data);
                    setCartAmount();
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = Object.values(
                            error.response.data.errors
                        ).reduce((accum, next) => [...accum, ...next], []);
                    }
                });
        } else {
            setOpenLogin(true);
        }
    };

    const setCartAmount = () => {
        axiosClient.get("/cartAmount").then(({ data }) => {
            setItemAmount(data[0].cart_amount);
        });
    };

    return (
        <>
            {loading && (
                <div className="w-full mb-16 flex items-center justify-center">
                    <div className="w-full md:mx-8 max-w-7xl mx-auto px-8 animate-pulse">
                        <div className="flex md:flex-row flex-wrap flex-col items-start justify-between">
                            <div className="md:w-1/4 md:mb-0 mb-4 w-full flex items-center justify-center">
                                <div className="max-w-72">
                                    <div className="bg-slate-200 w-28 h-36"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 md:w-3/4 lg:mb-0 mb-4 w-full">
                                <div className="px-8 flex flex-col">
                                    <div className="w-full text-lg  font-bold">
                                        <div className="h-6 bg-slate-200 rounded w-1/4 mb-1"></div>
                                    </div>
                                    <div className="font-semibold text-xl pb-2">
                                        <div className="h-4 bg-slate-200 rounded w-1/8 mb-1"></div>
                                    </div>
                                    <span className="h-[1px] bg-slate-200 w-full flex items-center"></span>
                                    <div className="flex flex-row flex-wrap py-2">
                                        <div className="w-1/2 lg:mb-2 text-sm font-semibold text-slate-500">
                                            <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
                                        </div>
                                        <div className="w-1/2 lg:mb-2 text-sm font-semibold text-slate-500">
                                            <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
                                        </div>
                                        <div className="w-1/2 text-sm font-semibold text-slate-500">
                                            <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
                                        </div>
                                        <div className="w-1/2 text-sm font-semibold text-slate-500">
                                            <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
                                        </div>
                                    </div>
                                    <span className="h-[1px] bg-slate-200 w-full flex items-center"></span>
                                    <div className="mt-3">
                                        <h1 className="text-lg font-bold">
                                            <div className="h-6 bg-slate-200 rounded w-1/4 mb-1"></div>
                                        </h1>
                                        <div className="text-justify">
                                            <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
                                            <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full flex items-center justify-center">
                                <div className="w-full px-2">
                                    <div className="border shadow-md rounded-md w-28 h-36 bg-slate-200">
                                        {/* <div className="px-4 py-6 flex flex-col">
                                            <div className="w-full flex items-center justify-center mb-2">
                                                <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!loading && (
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
                                        {product.ProdDesc3}
                                        {/* {product ? product[0].ProdDesc3 : "n"} */}
                                    </div>
                                    <div className="font-semibold text-xl text-slate-700 pb-2">
                                        <FormatRupiah
                                            value={product.prodPrice2}
                                        />
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
                                            {product.prodISBN}
                                        </div>
                                    </div>
                                    <span className="h-[1px] bg-blue-950 w-full flex items-center"></span>
                                    <div className="mt-3">
                                        <h1 className="text-lg font-bold">
                                            Deskripsi
                                        </h1>
                                        <div className="text-justify">
                                            {product.prodKet}
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
                                                <div className="w-3/4 border flex flex-row items-center justify-between rounded-lg">
                                                    <button
                                                        className={`hover:bg-blue-400/50 transition ease-in-out delay-200 py-3 px-2 rounded-lg text-lg font-bold ${
                                                            amount <= 1
                                                                ? "cursor-not-allowed"
                                                                : "cursor-pointer"
                                                        }`}
                                                        onClick={() =>
                                                            incraseAmount(
                                                                "minus"
                                                            )
                                                        }
                                                        disabled={
                                                            amount <= 1
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        <MinusIcon className="h-4 w-4" />
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className="w-full px-5 text-center"
                                                        value={amount}
                                                        onChange={(ev) =>
                                                            setAmount(
                                                                ev.target.value
                                                            )
                                                        }
                                                    />
                                                    {/* <div className="font-medium text-slate-600">
                                                        {amount}
                                                    </div> */}
                                                    <button
                                                        className="hover:bg-blue-400/50 transition ease-in-out delay-200 py-3 px-2 rounded-lg text-lg font-bold"
                                                        onClick={() =>
                                                            incraseAmount(
                                                                "plus"
                                                            )
                                                        }
                                                    >
                                                        <PlusIcon className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-row items-center justify-center mb-4">
                                                <div className="w-1/3">
                                                    <p className="text-left text-slate-500 font-medium">
                                                        SubTotal
                                                    </p>
                                                </div>
                                                <div className="w-2/3">
                                                    <p className="text-right font-semibold text-lg">
                                                        <FormatRupiah
                                                            value={
                                                                amount * price
                                                            }
                                                        />
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full rounded-md shadow-md py-2 bg-blue-950 cursor-pointer hover:bg-blue-900 mb-2"
                                                onClick={() =>
                                                    addToCart(product)
                                                }
                                            >
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
            )}
        </>
    );
}
