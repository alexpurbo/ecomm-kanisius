import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddAddress from "../components/AddAddress";

export default function Profile() {
    const { setUrlPathname, urlPathname, currentUser } = useStateContext();
    const [activeTab, setActiveTab] = useState("profile");
    const [customerAddress, setCustomerAddress] = useState([]);
    const [loading, setLoading] = useState(false);
    const [addresModal, setAddresModal] = useState(false);

    const addressModalOnCloseClick = (val) => {
        setAddresModal(val);
    };

    const getCustAddress = () => {
        if (customerAddress.length <= 0) {
            setLoading(true);
            // console.log(currentUser.C_ID);
            axiosClient.get("/address").then(({ data }) => {
                setCustomerAddress(data);
                // console.log(data);
                setLoading(false);
            });
        }
    };

    useEffect(() => {
        // console.log("awal");
        setUrlPathname("/my-account");
    }, []);

    useEffect(() => {
        // console.log("curr user terisi");
        console.log(currentUser);
        getCustAddress();
    }, [currentUser]);

    return (
        <div>
            <PageComponent>
                {addresModal && (
                    <AddAddress onCloseClick={addressModalOnCloseClick} />
                )}
                <div className="w-full pt-28 md:pt-32 bg-blue-950 md:h-44 h-32">
                    <div className="relative h-full w-full">
                        <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                            <p className="md:font-medium font-light md:text-lg text-sm">
                                Profile
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                    <div className="w-full flex flex-row">
                        <div className="md:w-1/4 md:block hidden py-4 px-2">
                            <div className=" rounded-xl shadow-lg border border-blue-950">
                                <div className="h-36 w-full">
                                    <ul className="px-2 lg:px-4 py-4">
                                        <li
                                            className={`${
                                                urlPathname === "/my-account"
                                                    ? "text-blue-800"
                                                    : "text-blue-950"
                                            } font-semibold mb-2 cursor-pointer hover:text-blue-900`}
                                        >
                                            Akun Saya
                                        </li>
                                        <li
                                            className={`${
                                                urlPathname === "/wishlist"
                                                    ? "text-blue-800"
                                                    : "text-blue-950"
                                            } font-semibold mb-2 cursor-pointer hover:text-blue-900`}
                                        >
                                            Wishlist
                                        </li>
                                        <li
                                            className={`${
                                                urlPathname ===
                                                "/daftar-pembelian"
                                                    ? "text-blue-800"
                                                    : "text-blue-950"
                                            } font-semibold mb-2 cursor-pointer hover:text-blue-900`}
                                        >
                                            Daftar Pembelian
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/4 w-full py-4 px-2">
                            <div className=" rounded-xl shadow-lg bg-slate-200">
                                <div className="flex flex-row w-full px-8">
                                    <div
                                        className={`${
                                            activeTab === "profile"
                                                ? "bg-slate-50"
                                                : ""
                                        } md:px-6 md:mt-4 md:py-2 px-3 mt-2 py-1 cursor-pointer rounded-t-md transition ease-in-out duration-300`}
                                        onClick={() => setActiveTab("profile")}
                                    >
                                        <h1
                                            className={`${
                                                activeTab === "profile"
                                                    ? "text-blue-800"
                                                    : "text-blue-950"
                                            } font-semibold md:text-lg text-sm transition ease-in-out duration-300 `}
                                        >
                                            Profile
                                        </h1>
                                    </div>
                                    <div
                                        className={`${
                                            activeTab === "address"
                                                ? "bg-slate-50"
                                                : ""
                                        } md:px-6 md:mt-4 md:py-2 px-3 mt-2 py-1 cursor-pointer rounded-t-md transition ease-in-out duration-300`}
                                        onClick={() => setActiveTab("address")}
                                    >
                                        <h1
                                            className={`${
                                                activeTab === "address"
                                                    ? "text-blue-800"
                                                    : "text-blue-950"
                                            } font-semibold md:text-lg text-sm transition ease-in-out duration-300 `}
                                        >
                                            Alamat
                                        </h1>
                                    </div>
                                    <div
                                        className={`${
                                            activeTab === "password"
                                                ? "bg-slate-50"
                                                : ""
                                        } md:px-6 md:mt-4 md:py-2 px-3 mt-2 py-1 cursor-pointer rounded-t-md transition ease-in-out duration-300`}
                                        onClick={() => setActiveTab("password")}
                                    >
                                        <h1
                                            className={`${
                                                activeTab === "password"
                                                    ? "text-blue-800"
                                                    : "text-blue-950"
                                            } font-semibold md:text-lg text-sm transition ease-in-out duration-300 `}
                                        >
                                            Ubah Password
                                        </h1>
                                    </div>
                                </div>
                                <div className="h-96 overflow-auto flex items-center justify-center px-4 pb-4">
                                    <div className="w-full h-full rounded-lg bg-slate-50 px-4 py-3">
                                        {/* Profile */}
                                        <div
                                            className={`${
                                                activeTab === "profile"
                                                    ? "block"
                                                    : "hidden"
                                            } relative h-full`}
                                        >
                                            <div className="w-full px-4 py-2">
                                                <div className="flex md:flex-row flex-col mb-1.5">
                                                    <h1 className="font-semibold w-36 text-blue-950 pr-4">
                                                        Nama Akun
                                                    </h1>
                                                    <h1 className="font-medium text-slate-700 md:ml-0 ml-2">
                                                        {currentUser.custNama}
                                                    </h1>
                                                </div>
                                                <div className="flex md:flex-row flex-col mb-1.5">
                                                    <h1 className="font-semibold w-36 text-blue-950 pr-4">
                                                        Email
                                                    </h1>
                                                    <h1 className="font-medium text-slate-700 md:ml-0 ml-2">
                                                        {currentUser.custEmail}
                                                    </h1>
                                                </div>
                                                <div className="flex md:flex-row flex-col mb-1.5">
                                                    <h1 className="font-semibold w-36 text-blue-950 pr-4">
                                                        No.Handphone
                                                    </h1>
                                                    <h1 className="font-medium text-slate-700 md:ml-0 ml-2">
                                                        {currentUser.custTelp
                                                            ? currentUser.custTelp
                                                            : "-"}
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 right-4">
                                                <div className="px-4 py-1.5 bg-blue-950 text-white font-semibold cursor-pointer rounded-md shadow-md hover:bg-blue-900 hover:shadow-xl">
                                                    Ubah Data
                                                </div>
                                            </div>
                                        </div>
                                        {/* END PRofile */}
                                        {/* Alamat */}
                                        <div
                                            className={`${
                                                activeTab === "address"
                                                    ? "block"
                                                    : "hidden"
                                            }`}
                                        >
                                            <div className="relative w-full px-4 py-2">
                                                <div className="w-full flex justify-end items-center mb-4">
                                                    <div
                                                        className="px-4 py-0.5 bg-blue-950 text-white font-medium rounded-md flex flex-row items-center cursor-pointer hover:bg-blue-900"
                                                        onClick={() =>
                                                            setAddresModal(true)
                                                        }
                                                    >
                                                        <PlusIcon className="md:block hidden h-10 w-10 pr-4" />
                                                        <h1 className="md:pr-2 pr-0">
                                                            Tambah Alamat
                                                        </h1>
                                                    </div>
                                                </div>
                                                {loading ? (
                                                    <div className="">
                                                        Loading
                                                    </div>
                                                ) : customerAddress.length >
                                                  0 ? (
                                                    customerAddress.map(
                                                        (address, index) => (
                                                            <div
                                                                className=" bg-slate-100 rounded-md shadow-md border border-slate-100"
                                                                key={index}
                                                            >
                                                                <div className="px-4 py-2 flex flex-col mb-3">
                                                                    <h1 className="font-semibold text-blue-950 text-lg mb-1">
                                                                        {
                                                                            address.alamat_penerima
                                                                        }
                                                                    </h1>
                                                                    <p className="font-medium text-slate-600 mb-2">
                                                                        {address.alamat_lengkap +
                                                                            ", " +
                                                                            address.subdistrict +
                                                                            ", " +
                                                                            address.city +
                                                                            ", " +
                                                                            address.province}
                                                                    </p>
                                                                    {/* <div className="flex px-2 py-0.5 border border-blue-950 text-blue-950 font-light text-sm rounded-2xl">
                                                                        <p>
                                                                            Alamat
                                                                            Utama
                                                                        </p>
                                                                    </div> */}
                                                                    <div className="w-full flex flex-row-reverse justify-start">
                                                                        <div className="mr-2 rounded-xl px-4 py-0.5 border border-red-600 text-sm font-medium text-red-600 cursor-pointer hover:text-white hover:bg-red-600">
                                                                            Hapus
                                                                        </div>
                                                                        <div className="mr-2 rounded-xl px-4 py-0.5 border border-green-600 text-sm font-medium text-green-600 cursor-pointer hover:text-white hover:bg-green-600">
                                                                            Edit
                                                                        </div>
                                                                        {/* <div className="mr-2 rounded-xl px-4 py-0.5 border border-red-600 text-sm font-medium text-red-600">
                                                                            Alamat
                                                                            utama
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <h1 className="font-bold text-xl text-slate-500">
                                                            Tidak ada alamat
                                                            tersedia
                                                        </h1>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* End Alamat */}
                                        {/* Password */}
                                        <div
                                            className={`${
                                                activeTab === "password"
                                                    ? "block"
                                                    : "hidden"
                                            } h-full w-full`}
                                        >
                                            <div className="relative w-full h-full flex flex-col px-4 py-2">
                                                <form action="">
                                                    <div className="flex md:flex-row flex-col mb-2">
                                                        <label
                                                            htmlFor="oldPassword"
                                                            className="w-48 lg:w-64 mb-1 md:mb-0 text-blue-950 font-medium"
                                                        >
                                                            Password lama
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="px-3 py-0.5 rounded-md border border-blue-950"
                                                        />
                                                    </div>
                                                    <div className="flex md:flex-row flex-col mb-2">
                                                        <label
                                                            htmlFor="newPassword"
                                                            className="w-48 lg:w-64 mb-1 md:mb-0 text-blue-950 font-medium"
                                                        >
                                                            Password Baru
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="px-3 py-0.5 rounded-md border border-blue-950"
                                                        />
                                                    </div>
                                                    <div className="flex md:flex-row flex-col mb-2">
                                                        <label
                                                            htmlFor="newPasswordConfirm"
                                                            className="w-48 lg:w-64 mb-1 md:mb-0 text-blue-950 font-medium"
                                                        >
                                                            Konfirmasi Password
                                                            Baru
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="px-3 py-0.5 rounded-md border border-blue-950"
                                                        />
                                                    </div>
                                                    <div className="w-full flex justify-end mt-4">
                                                        <button className="text-white font-medium bg-blue-950 px-5 py-2 rounded-md shadow-md hover:shadow-xl hover:bg-blue-900">
                                                            Ubah Password
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* End Password */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageComponent>
        </div>
    );
}
