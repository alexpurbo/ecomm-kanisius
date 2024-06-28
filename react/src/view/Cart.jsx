import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import {
    MinusIcon,
    PlusIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { useStateContext } from "../contexts/ContextProvider";
import { FormatRupiah } from "@arismun/format-rupiah";
import axiosClient from "../axios";
import { CgSpinner } from "react-icons/cg";
import { Link, NavLink, Navigate } from "react-router-dom";
import { fetchROAPI } from "../utils/rajaOngkir";

export default function () {
    const {
        currentUser,
        cart,
        setCart,
        setItemAmount,
        showToast,
        userToken,
        setUrlPathname,
    } = useStateContext();
    const [newAmount, setNewAmount] = useState();
    const [openDeleteConfirm, setopenDeleteConfirm] = useState(false);
    const [cartId, setCartId] = useState();
    const [prodName, setProdName] = useState();
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [addCartLoading, setAddCartLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(false);
    const [province, setProvince] = useState([]);

    const total = cart.reduce(
        (a, v) => (a = a + v.cart_price * v.cart_amount),
        0
    );

    // if (!currentUser.C_ID) {

    // }

    if (!userToken) {
        return <Navigate to="/" />;
    }

    const incraseAmount = (val, cartId) => {
        setNewAmount(val + 1);
        let newValue = val + 1;
        // console.log(newAmount);
        addToCart(newValue, cartId, "plus");
    };

    const decraseAmount = (val, cartId, prodName) => {
        setNewAmount(val - 1);
        let newValue = val - 1;
        if (newValue <= 0) {
            // console.log("hapus dari cart");
            setopenDeleteConfirm(true);
            setCartId(cartId);
            setProdName(prodName);
        } else {
            // console.log("update cart");
            addToCart(newValue, cartId, "min");
        }
    };

    const onDeleteIconClick = (cartId, prod) => {
        setopenDeleteConfirm(true);
        setCartId(cartId);
        setProdName(prod);
    };

    const addToCart = (val, cartId, status) => {
        setAddCartLoading(true);
        axiosClient
            .put(`/cart/${cartId}`, {
                cart_amount: val,
            })
            .then(({ data }) => {
                // console.log(data);
                setCartAmount();
                getCartData();
                setAddCartLoading(false);
                if (status == "plus") {
                    showToast("Berhasil Ditambahkan");
                } else {
                    showToast("Berhasil Dikurangi");
                }
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...accum, ...next], []);
                }
            });
        // } else {
        //     // setOpenLogin(true);
        // }
    };

    const onDeleteCartItem = () => {
        // console.log(cartId);
        setDeleteLoading(true);
        axiosClient.delete(`/cart/${cartId}`).then(() => {
            setCartAmount();
            getCartData();
            showToast("Produk berhasil dihapus");
            setopenDeleteConfirm(false);
            setDeleteLoading(false);
        });
    };

    const setCartAmount = () => {
        axiosClient.get("/cartAmount").then(({ data }) => {
            setItemAmount(data[0].cart_amount);
        });
    };

    const getCartData = () => {
        axiosClient.get("/cart").then(({ data }) => {
            setCart(data.data);
        });
    };

    const setCourierData = () => {
        axiosClient
            .post("/getCourierOptionByOriginAndDestination")
            .then(({ data }) => {
                // setCategory(data.data);
                // setCategoryId(data.data[0].katID.substring(0, 2));
                // console.log("setsetProvinceData");
                console.log(data);
            });
    };

    useEffect(() => {
        setUrlPathname("cart");
    }, []);

    return (
        <div>
            <PageComponent>
                {openDeleteConfirm ? (
                    <>
                        <div className="relative">
                            <div className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"></div>
                        </div>
                        <div
                            className={`fixed md:top-32 top-[78px] w-full max-w-96 bg-white inset-x-0 mx-auto z-[65] rounded-md shadow-md transition-all duration-500 delay-300 ${
                                openDeleteConfirm ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <div
                                className="absolute right-2 top-1 cursor-pointer"
                                onClick={() => setopenDeleteConfirm(false)}
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </div>

                            <div className="w-full px-8 py-6">
                                <h1 className="mb-4 text-xl font-bold text-center">
                                    Hapus {prodName} dari keranjang ?
                                </h1>

                                <div className="w-3/4 mx-auto">
                                    <div className="flex flex-row justify-between items-center">
                                        <button
                                            className="bg-red-500 px-6 py-2 rounded-md shadow-md font-medium text-white hover:bg-red-600 hover:shadow-lg"
                                            onClick={() =>
                                                setopenDeleteConfirm(false)
                                            }
                                            disabled={
                                                deleteLoading ? true : false
                                            }
                                        >
                                            Tidak
                                        </button>
                                        <button
                                            className={`bg-blue-500 px-6 py-2 rounded-md shadow-md font-medium text-white hover:bg-blue-600 hover:shadow-lg ${
                                                deleteLoading
                                                    ? "cursor-not-allowed"
                                                    : ""
                                            }`}
                                            disabled={
                                                deleteLoading ? true : false
                                            }
                                            onClick={() => onDeleteCartItem()}
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
                ) : (
                    ""
                )}

                {addCartLoading ? (
                    <div className="relative">
                        <div className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"></div>
                        <div className="fixed z-[65] w-screen h-screen flex items-center justify-center">
                            <CgSpinner className="h-14 w-14 text-blue-500 animate-spin" />
                        </div>
                    </div>
                ) : (
                    ""
                )}

                <div className="w-full pt-28 md:pt-32 bg-blue-950 lg:h-44 h-28 md:h-32">
                    <div className="relative h-full w-full">
                        <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                            <p className="md:font-medium font-light md:text-lg text-sm">
                                Keranjang
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                        <div className=""></div>
                    </div>
                </div>

                <div className="w-full mx-auto max-w-7xl md:mt-12 mt-8 md:px-8 px-2">
                    {cart ? (
                        <div className="flex md:flex-row flex-col bg-slate-200 rounded-xl">
                            <div className="md:w-3/5 w-full">
                                {cart.map((data, index) => (
                                    <div
                                        className="m-3 rounded-lg shadow-lg border border-slate-200 bg-white"
                                        key={index}
                                    >
                                        <div className="flex flex-row items-start justify-start px-4 py-3">
                                            <div className="rounded-md h-[115px] w-[85px] bg-blue-500 hidden lg:block"></div>
                                            {/* 135x207 67x103 */}
                                            <div className="lg:ml-6 flex flex-col justify-start items-start h-full lg:w-3/5 w-4/5">
                                                <h1 className="font-semibold lg:text-lg text-sm text-slate-600 line-clamp-2">
                                                    {data.ProdDesc3}
                                                </h1>
                                                <p className="lg:font-bold font-semibold">
                                                    <FormatRupiah
                                                        value={data.cart_price}
                                                    />
                                                </p>
                                                <p className="font-medium text-slate-400 lg:text-sm text-xs">
                                                    Berat :{" "}
                                                    {data.prodBerat
                                                        ? data.prodBerat
                                                        : "-"}
                                                    gr Total :{" "}
                                                    {data.prodBerat
                                                        ? data.prodBerat *
                                                          data.cart_amount
                                                        : "-"}
                                                    gr
                                                </p>
                                            </div>
                                            <div className="ml-6 lg:h-[115px] flex flex-col items-end justify-around">
                                                <div className="flex flex-row border border-slate-200 rounded-md mb-1 lg:mb-0">
                                                    <button
                                                        className="py-1 px-1.5 bg-blue-950 text-slate-200 hover:shadow-lg hover:text-white rounded-l-md"
                                                        onClick={() =>
                                                            decraseAmount(
                                                                data.cart_amount,
                                                                data.cart_id,
                                                                data.ProdDesc3
                                                            )
                                                        }
                                                    >
                                                        <MinusIcon className="lg:h-6 lg:w-6 h-3 w-3" />
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className="lg:w-14 w-8 text-center text-xs lg:text-base"
                                                        value={data.cart_amount}
                                                        readOnly
                                                    />
                                                    <button
                                                        className="py-1 px-1.5 bg-blue-950 text-slate-200 hover:shadow-lg hover:text-white rounded-r-md"
                                                        onClick={() =>
                                                            incraseAmount(
                                                                data.cart_amount,
                                                                data.cart_id
                                                            )
                                                        }
                                                    >
                                                        <PlusIcon className="lg:h-6 lg:w-6 h-3 w-3" />
                                                    </button>
                                                </div>
                                                <div className="text-right mb-1 lg:mb-0">
                                                    <p className="lg:font-bold lg:text-xl font-semibold text-base">
                                                        <FormatRupiah
                                                            value={
                                                                data.cart_amount *
                                                                data.cart_price
                                                            }
                                                        />
                                                    </p>
                                                </div>
                                                <div
                                                    className="text-right  text-slate-600 hover:text-red-500 cursor-pointer"
                                                    onClick={() =>
                                                        onDeleteIconClick(
                                                            data.cart_id,
                                                            data.ProdDesc3
                                                        )
                                                    }
                                                >
                                                    <TrashIcon className="lg:h-6 lg:w-6 h-5 w-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="relative my-3 mr-3 md:w-2/5 w-full overflow-auto">
                                <div className="sticky top-0 bg-white rounded-lg shadow-lg flex flex-col mx-3 md:mx-0 px-4 py-3 h-fit">
                                    <div className="flex flex-col">
                                        <h1 className="md:text-2xl text-lg mb-4 font-semibold text-slate-600">
                                            Rincian Belanja
                                        </h1>
                                        <span className="h-0.5 w-full bg-slate-200 mb-2"></span>
                                        <div className="flex flex-row items-center justify-between mb-10 px-4">
                                            <p className="font-medium text-slate-700 text-base">
                                                Total Belanja
                                            </p>
                                            <p className="font-bold text-black text-base">
                                                <FormatRupiah value={total} />
                                            </p>
                                        </div>
                                        <div className="w-full flex justify-center">
                                            <NavLink
                                                to={"/checkout"}
                                                className="w-2/3 py-2 bg-blue-950 text-center text-white rounded-lg font-semibold shadow-lg hover:bg-blue-900"
                                            >
                                                Lanjutkan Pembelian
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-slate-200 rounded-xl w-full h-48"></div>
                    )}
                </div>
            </PageComponent>
        </div>
    );
}
