import {
    MinusIcon,
    PlusIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "react-router-dom";
import axiosClient from "../axios";
import DeleteConfitmation from "./DeleteConfitmation";

export default function CartModal() {
    const {
        openCartModal,
        setOpenCartModal,
        itemAmount,
        cart,
        currentUser,
        setItemAmount,
        setCart,
        showToast,
    } = useStateContext();

    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const total = cart.reduce(
        (a, v) => (a = a + v.cart_price * v.cart_amount),
        0
    );

    const onDeleteAllClick = () => {
        setOpenDeleteConfirm(true);
    };

    const onDeleteClick = () => {
        axiosClient.delete(`/cart/destroyAll/${currentUser.C_ID}`).then(() => {
            setItemAmount(0);
            getCartData();
            showToast("Produk berhasil dihapus");
            setOpenDeleteConfirm(false);
            setDeleteLoading(false);
        });
    };

    const onTidakClick = () => {
        setOpenDeleteConfirm(false);
    };

    const getCartData = () => {
        axiosClient.get("/cart").then(({ data }) => {
            setCart(data.data);
        });
    };

    return (
        <>
            {openCartModal ? (
                <>
                    {openDeleteConfirm ? (
                        <DeleteConfitmation
                            onTidakClick={onTidakClick}
                            onHapusClick={onDeleteClick}
                            deleteLoading={deleteLoading}
                        />
                    ) : (
                        ""
                    )}
                    <div className="relative">
                        <div
                            className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"
                            onClick={() => setOpenCartModal(false)}
                        ></div>
                    </div>
                </>
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
                                            <div className="flex flex-row justify-between mb-2">
                                                <div className="flex flex-col">
                                                    <h1 className="font-light line-clamp-2 mb-1">
                                                        <Link
                                                            to={`/product-detail/${data.cart_product}`}
                                                        >
                                                            {data.ProdDesc3}
                                                        </Link>
                                                    </h1>
                                                    <div className="pl-4 flex flex-row items-center">
                                                        {data.cart_amount} x{" "}
                                                        <FormatRupiah
                                                            value={
                                                                data.cart_price
                                                            }
                                                        />
                                                    </div>
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
                                <Link
                                    to={"/cart"}
                                    onClick={() => setOpenCartModal()}
                                >
                                    <div className="w-full bg-blue-950 rounded-md shadow-md text-white font-medium py-1.5 hover:scale-105 transition duration-200 text-center">
                                        Lihat Cart
                                    </div>
                                </Link>
                            </div>
                            <div className="w-1/2 mx-2">
                                <button
                                    className="w-full bg-red-500 rounded-md shadow-md text-white font-medium py-1.5 hover:scale-105 transition duration-200"
                                    onClick={() => onDeleteAllClick()}
                                >
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
