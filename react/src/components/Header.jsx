import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    XMarkIcon,
    Bars3Icon,
    XCircleIcon,
    ArrowLeftEndOnRectangleIcon,
    UserIcon,
    ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import logo from "../assets/img/kanisius.png";
import logoSmall from "../assets/img/icon.png";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";

export default function Header() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false); //Floating Search Bar
    const [openCartItem, setOpenCartItem] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);
    const [categoryActive, setCategoryActive] = useState(0);
    const [categoryDetails, setCategoryDetails] = useState([]);
    const [activeCategoryDetailName, setActiveCategoryDetailName] =
        useState("");
    const [subCategorys, setsubCategorys] = useState(false);
    const category = useStateContext();
    const [openAccountThumb, setOpenAccountThumb] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const { userToken, currentUser, setCurrentUser, setUserToken } =
        useStateContext();
    const [custEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });
    const [openProfileList, setOpenProfileList] = useState(false);

    // console.log(category);
    const onCategoryHover = (id) => {
        setCategoryActive(id);
        // console.log("active cate " + id);
    };

    const onCategoryDtlClick = (categoryNameDtl) => {
        setActiveCategoryDetailName(categoryNameDtl);
    };

    const onMouseEnterCategoryDtl = (categoryNameDtl) => {
        setActiveCategoryDetailName(categoryNameDtl);
    };

    const onMouseLeaveCategoryDtl = () => {
        setActiveCategoryDetailName("");
    };

    useEffect(() => {
        setCategoryDetails(category.categorys[0]);
        // console.log(userToken);
        if (userToken) {
            getUserData();
        }
        // console.log(currentUser);
    }, []);

    // console.log(categoryDetails);

    const onLoginSubmit = (ev) => {
        ev.preventDefault();
        // setError({ __html: "" });

        axiosClient
            .post("/login", {
                custEmail,
                password,
            })
            .then(({ data }) => {
                // setCurrentUser(data.user);
                setUserToken(data.token);
                getUserData();
                setOpenLogin(false);

                // console.log(data);
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...accum, ...next], []);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };

    const getUserData = () => {
        axiosClient.get("/me").then(({ data }) => {
            console.log("getUserData dijalankan");
            setCurrentUser(data);
            console.log(data);
        });
    };

    const logout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then((res) => {
            setCurrentUser({});
            setUserToken(null);
            setOpenProfileList(false);
            setOpenSidebar(false);
        });
    };

    return (
        <>
            <header
                className={`bg-white fixed z-50 w-full mx-auto left-0 top-0 right-0 ${
                    openCategory ? "" : "shadow-md"
                }`}
            >
                <div className="w-full max-w-7xl mx-auto px-8">
                    <nav className="relative flex flex-row items-center justify-between mt-2 mb-4">
                        {/* Logo */}
                        <div className="w-1/5">
                            <a
                                href="/"
                                className="font-bold text-lg text-white"
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="hidden sm:block"
                                />
                                <img
                                    src={logoSmall}
                                    alt=""
                                    className="h-14 sm:hidden"
                                />
                                {/* KANISIUS SHOP */}
                            </a>
                        </div>
                        {/* Kategori and Search bar */}
                        <div className="w-3/5 hidden lg:block ">
                            <div className="flex items-center justify-center">
                                <div className="mr-4">
                                    <div
                                        className={`flex flex-row items-end font-bold text-md cursor-pointer ${
                                            openCategory
                                                ? "text-blue-800"
                                                : "text-blue-950"
                                        }`}
                                        onClick={() =>
                                            setOpenCategory(
                                                (openCategory) => !openCategory
                                            )
                                        }
                                    >
                                        Kategori{" "}
                                        {openCategory ? (
                                            <ChevronUpIcon className="h-5 w-4 ml-1" />
                                        ) : (
                                            <ChevronDownIcon className="h-5 w-4 ml-1" />
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-center items-center border border-blue-950 rounded-lg w-full max-w-lg">
                                    <input
                                        type="text"
                                        className="w-full max-w-lg rounded-lg py-2 px-4 text-center focus:outline-none text-blue-950 font-semibold bg-white placeholder-blue-950"
                                        placeholder="Search here"
                                    />
                                    <div className="group px-4 py-2 h-full text-xl hover:shadow-md cursor-pointer mr-1 my-1  rounded-lg hover:bg-blue-950 transition duration-300 ease-in-out ">
                                        <MagnifyingGlassIcon className="group-hover:text-white text-blue-950 h-5 w-5 font-bold" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Search */}
                        <div
                            className={`absolute ${
                                openSearchBar ? "top-[118px]" : "-top-32"
                            } w-full z-10 md:right-8 flex justify-end items-center transition-all delay-300 duration-500 ease-in-out`}
                        >
                            <div className="absolute md:w-96 bg-blue-400 rounded-xl flex justify-center items-center shadow-xl">
                                {/* <div className="absolute -top-2 right-24 h-4 w-4 rotate-45 bg-blue-400"></div> */}
                                <div
                                    className="absolute -right-1 -top-2 h-5 w-5 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 cursor-pointer text-slate-200 hover:text-white"
                                    onClick={() => setOpenSearchBar(false)}
                                >
                                    <XCircleIcon className="font-bold" />
                                </div>
                                <div className="flex border border-blue-300 rounded-lg w-full max-w-sm m-3">
                                    <input
                                        type="text"
                                        className="w-full max-w-sm rounded-lg py-2 px-4 text-center focus:outline-none text-white font-semibold bg-blue-400 placeholder-white"
                                        placeholder="Search here"
                                    />
                                    <div className="px-4 py-2 h-full text-xl hover:shadow-md cursor-pointer mr-1 my-1  rounded-lg hover:bg-blue-300 transition duration-300 ease-in-out">
                                        <MagnifyingGlassIcon className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END Floating Search */}

                        {/* Navbar/Menu item Large */}
                        <div className="w-1/5 relative">
                            <ul
                                className={`hidden lg:flex items-center ${
                                    userToken
                                        ? "justify-between"
                                        : "justify-center"
                                } gap-6 text-white`}
                            >
                                <li
                                    className={`text-2xl cursor-pointer relative ${
                                        openCartItem
                                            ? "text-white"
                                            : "text-slate-100"
                                    }`}
                                    onClick={() =>
                                        setOpenCartItem(
                                            (openCartItem) => !openCartItem
                                        )
                                    }
                                >
                                    <ShoppingCartIcon className="h-7 w-7 text-blue-950" />
                                    <div className="absolute h-4 w-4 rounded-full bg-red-500 -top-2 -right-2 flex items-center justify-center">
                                        <p className="p-1 text-[8px] text-white font-medium">
                                            0
                                        </p>
                                    </div>
                                </li>
                                {userToken ? (
                                    <li className="cursor-pointer">
                                        <button
                                            className="bg-white text-blue-950 border border-blue-900 font-semibold hover:bg-slate-50 transition delay-150 ease-in-out hover:shadow-md py-2 px-4 rounded-md"
                                            onClick={() =>
                                                setOpenProfileList(
                                                    (openProfileList) =>
                                                        !openProfileList
                                                )
                                            }
                                        >
                                            <div className="flex flex-row items-end">
                                                <UserIcon className="h-7 w-7 text-blue-950 " />
                                                <p className="text-blue-950 ml-2 font-medium text-sm">
                                                    {currentUser.custNama}
                                                </p>
                                            </div>
                                        </button>
                                    </li>
                                ) : (
                                    <li className="flex gap-2">
                                        <button
                                            className="bg-white hover:text-white text-blue-950 border border-blue-900 font-semibold hover:bg-blue-950 transition delay-150 ease-in-out hover:shadow-md py-2 px-4 rounded-md"
                                            onClick={() => setOpenLogin(true)}
                                        >
                                            Masuk
                                        </button>
                                        <a href="/signup">
                                            <button className="bg-white hover:text-white text-blue-950 border border-blue-900 font-semibold hover:bg-blue-950 transition delay-150 ease-in-out hover:shadow-md py-2 px-4 rounded-md">
                                                Daftar
                                            </button>
                                        </a>
                                    </li>
                                )}
                            </ul>

                            <div
                                className={`${
                                    openProfileList ? "absolute" : "hidden"
                                } h-52 w-48 z-[60] right-0 top-14`}
                            >
                                <div className="bg-white shadow-xl border border-1 rounded-lg w-full h-full relative">
                                    <div className="flex flex-col px-6 py-4">
                                        <ul>
                                            <li className="font-medium mb-1 cursor-pointer text-blue-950 hover:text-blue-900">
                                                Setelan
                                            </li>
                                            <li className="font-medium mb-1 cursor-pointer text-blue-950 hover:text-blue-900">
                                                Wishlist
                                            </li>
                                            <li className="font-medium mb-1 cursor-pointer text-blue-950 hover:text-blue-900">
                                                Daftar Pembelian
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="absolute right-4 bottom-4 flex flex-row cursor-pointer group"
                                        onClick={(ev) => logout(ev)}
                                    >
                                        <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-blue-950 mr-1 group-hover:text-blue-900" />{" "}
                                        <span className="font-semibold text-blue-950 group-hover:text-blue-900">
                                            Logout
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Navbar/Menu item Large */}

                        {/* Navbar small */}
                        <ul
                            className={`flex lg:hidden items-center justify-center gap-6 text-slate-100`}
                        >
                            <li
                                className="cursor-pointer"
                                onClick={() =>
                                    setOpenCategory(
                                        (openCategory) => !openCategory
                                    )
                                }
                            >
                                {openCategory ? (
                                    <XMarkIcon className="h-6 w-6 font-bold text-blue-950" />
                                ) : (
                                    <Bars3Icon className="h-6 w-6 font-bold text-blue-950" />
                                )}
                            </li>
                            <li
                                className={`text-2xl cursor-pointer ${
                                    openSearchBar
                                        ? "text-white"
                                        : "text-slate-100"
                                }`}
                                onClick={() =>
                                    setOpenSearchBar(
                                        (openSearchBar) => !openSearchBar
                                    )
                                }
                            >
                                <MagnifyingGlassIcon className="h-6 w-6 font-bold text-blue-950" />
                            </li>
                            <li
                                className={`text-2xl cursor-pointer relative ${
                                    openCartItem
                                        ? "text-white"
                                        : "text-slate-100"
                                }`}
                                onClick={() =>
                                    setOpenCartItem(
                                        (openCartItem) => !openCartItem
                                    )
                                }
                            >
                                <ShoppingCartIcon className="h-6 w-6 font-bold text-blue-950" />
                                <div className="absolute h-4 w-4 rounded-full bg-red-500 -top-2 -right-2 flex items-center justify-center">
                                    <p className="p-1 text-[8px] text-white font-medium">
                                        0
                                    </p>
                                </div>
                            </li>
                            <li
                                className="text-2xl cursor-pointer"
                                onClick={() =>
                                    setOpenSidebar(
                                        (openSidebar) => !openSidebar
                                    )
                                }
                            >
                                {openSidebar ? (
                                    <ChevronUpIcon className="h-6 w-6 font-bold text-blue-950" />
                                ) : (
                                    <ChevronDownIcon className="h-6 w-6 font-bold text-blue-950" />
                                )}
                            </li>
                        </ul>
                        {/* End Navbar small */}
                    </nav>

                    {/* Sub Navbar, Home, help dll */}
                    <nav className="hidden md:block border-t border-t-blue-950 my-2 px-4">
                        <div className="relative overflow-y-auto ">
                            <ul className="flex flex-1 item-center justify-center  overflow-y-auto space-x-4 font-semibold text-blue-950 pt-1">
                                <li className="whitespace-nowrap flex items-center text-sm">
                                    <a href="/">Home</a>
                                </li>
                                <li className="whitespace-nowrap flex items-center cursor-pointer text-sm">
                                    Katalog
                                </li>
                                <li className="whitespace-nowrap flex items-center cursor-pointer text-sm">
                                    Promo
                                </li>
                                <li className="whitespace-nowrap flex items-center cursor-pointer text-sm">
                                    Cara Belanja
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* End Sub Navbar, Home, help dll */}
                </div>
            </header>
            {/* Data Chart */}
            <div
                className={`fixed h-screen bg-slate-600 ${
                    openCartItem ? "top-0" : "-top-full"
                } right-0 w-96 pt-24 md:pt-28 z-20 transition-all duration-300`}
            >
                <div
                    className="text-white font-bold text-2xl ml-4 cursor-pointer"
                    onClick={() => setOpenCartItem(false)}
                >
                    <XMarkIcon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-bold text-xl text-right mr-8">
                    Item (0)
                </h3>
                <div className="border-b pt-2 border-b-white" />
                <div className="mx-4 my-2 text-slate-100 text-2xl font-semibold flex items-center justify-center">
                    No Item
                </div>
                <div className="absolute w-full bottom-0 right-0 border-t border-t-white">
                    <div className="mx-8 my-4">
                        <h4 className="text-slate-100 font font-semibold text-2xl text-right">
                            Total = Rp 0,00
                        </h4>
                        <div className="flex items-center justify-end gap-2 mt-4">
                            <button className="bg-red-400 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md shadow-lg font-normal text-white">
                                Clear
                            </button>
                            <button className="bg-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md shadow-lg font-normal text-white">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* END Data Chart */}

            {/* Profile/Login */}
            {/* <div className="fixed top-28 right-4 z-10 bg-white">
                <XMarkIcon className="h-4 w-4" />
                <div className="">

                </div>
            </div> */}
            {/* END Profile/Login */}

            {/* Category */}
            <div
                className={`fixed bg-white  left-0 z-40 w-full shadow-md pb-8 max-h-80 transition-all ease-in-out duration-300 ${
                    openCategory ? "md:top-28 top-[78px]" : "-top-96"
                }`}
                onMouseLeave={() => setOpenCategory(!openCategory)}
            >
                <div className="w-full max-w-7xl mx-auto px-8 py-4">
                    <div className="flex flex-row">
                        <div className="md:w-1/4 w-1/3 h-full max-h-72 overflow-auto scrollbar border-r-2 border-r-blue-950">
                            <ul className="md:px-4 pr-4">
                                {/* {console.log(category)} */}
                                {category.categorys.map((cat, index) => (
                                    <a href={`/category/${cat.category_name}`}>
                                        <li
                                            className="font-semibold text-blue-950 text-base hover:text-blue-800 mb-4 cursor-pointer"
                                            onMouseEnter={(evt) =>
                                                onCategoryHover(index)
                                            }
                                            key={cat.id}
                                        >
                                            {cat.category_name}
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-3/4 w-2/3 h-full max-h-72 mx-4 overflow-auto scrollbar">
                            <ul className="flex flex-wrap flex-row font-semibold text-blue-950 pt-1">
                                {category.categorys[
                                    categoryActive
                                ].category_details.map((dtl) => (
                                    <a
                                        className="whitespace-nowrap lg:w-1/4 sm:w-1/2 w-full "
                                        href={`/category/${category.categorys[categoryActive].category_name}/${dtl.detail}`}
                                    >
                                        <li
                                            className="whitespace-nowrap lg:w-1/4 sm:w-1/2 w-full flex flex-col cursor-pointer text-sm pb-2 hover:text-blue-900"
                                            onMouseEnter={(ev) =>
                                                onMouseEnterCategoryDtl(
                                                    dtl.detail
                                                )
                                            }
                                            onMouseLeave={() =>
                                                onMouseLeaveCategoryDtl()
                                            }
                                            key={dtl.detail}
                                        >
                                            {dtl.detail}

                                            {dtl.subCategory.length ? (
                                                <ul
                                                    className={`${
                                                        activeCategoryDetailName ==
                                                        dtl.detail
                                                            ? "flex"
                                                            : "hidden"
                                                    } flex-wrap flex-col font-semibold text-blue-950 pt-1`}
                                                >
                                                    {dtl.subCategory.map(
                                                        (sub) => (
                                                            <a
                                                                className="whitespace-nowrap lg:w-1/4 sm:w-1/2 w-full"
                                                                href={`/category/${category.categorys[categoryActive].category_name}/${dtl.detail}/${sub.subCategoryName}`}
                                                            >
                                                                <li
                                                                    className="whitespace-nowrap lg:w-1/4 sm:w-1/2 w-full flex items-center cursor-pointer text-sm pb-2 pl-4 hover:text-blue-900"
                                                                    key={
                                                                        sub.subCategoryName
                                                                    }
                                                                >
                                                                    {
                                                                        sub.subCategoryName
                                                                    }
                                                                </li>
                                                            </a>
                                                        )
                                                    )}
                                                </ul>
                                            ) : (
                                                ""
                                            )}
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* END Category */}

            {/* Account Thumbnail */}
            <div
                className={`${
                    openSidebar ? "md:top-28 top-[78px]" : "-top-32"
                } fixed w-full max-w-72 md:max-w-36 h-40 border border-1 shadow-lg bg-white right-4 z-40 transition-all ease-in-out duration-300 flex flex-row justify-between rounded-sm`}
            >
                <div className="w-1/2 md:hidden">
                    <ul className="px-6 py-4 flex flex-1 flex-col item-center justify-center  overflow-x-auto font-semibold text-blue-950">
                        <li className="whitespace-nowrap flex items-center cursor-pointer text-base mb-1">
                            Home
                        </li>
                        <li className="whitespace-nowrap flex items-center cursor-pointer text-base mb-1">
                            Katalog
                        </li>
                        <li className="whitespace-nowrap flex items-center cursor-pointer text-base mb-1">
                            Promo
                        </li>
                        <li className="whitespace-nowrap flex items-center cursor-pointer text-base mb-1">
                            Cara Belanja
                        </li>
                    </ul>
                </div>
                <div className="mb-3 border-l border-l-blue-950 w-1/2 md:w-full">
                    {userToken ? (
                        <div className="w-full h-full relative">
                            <div className="flex flex-col px-6 py-4">
                                <ul>
                                    <li className="font-medium mb-1 cursor-pointer text-blue-950 hover:text-blue-900">
                                        Setelan
                                    </li>
                                    <li className="font-medium mb-1 cursor-pointer text-blue-950 hover:text-blue-900">
                                        Wishlist
                                    </li>
                                    <li className="font-medium mb-1 cursor-pointer text-blue-950 hover:text-blue-900">
                                        Pembelian
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="absolute right-2 bottom-1 flex flex-row cursor-pointer group"
                                onClick={(ev) => logout(ev)}
                            >
                                <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-blue-950 mr-1 group-hover:text-blue-900" />{" "}
                                <span className="font-semibold text-blue-950 group-hover:text-blue-900">
                                    Logout
                                </span>
                            </div>
                        </div>
                    ) : (
                        <ul className="text-lg font-semibold px-3 py-4 text-blue-950">
                            <li
                                className="mb-2 w-full flex items-center justify-center"
                                onClick={() => setOpenLogin(true)}
                            >
                                <button
                                    className="bg-white hover:text-white text-blue-950 border border-blue-900 font-semibold hover:bg-blue-950 transition delay-150 ease-in-out hover:shadow-md py-2 px-4 rounded-md"
                                    onClick={() => setOpenLogin(true)}
                                >
                                    Masuk
                                </button>
                            </li>
                            <li className="mb-2 w-full flex items-center justify-center">
                                <a href="/signup">
                                    <button className="bg-white hover:text-white text-blue-950 border border-blue-900 font-semibold hover:bg-blue-950 transition delay-150 ease-in-out hover:shadow-md py-2 px-4 rounded-md">
                                        Daftar
                                    </button>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            {/* End Account Thumbnail */}

            {/* Login PopUp/Modal */}
            <div
                className={`w-full ${
                    openLogin ? "block" : "hidden"
                } transition-all duration-300 delay-200 ease-in-out`}
            >
                <div
                    className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"
                    onClick={() => setOpenLogin(false)}
                ></div>
                <div
                    className={`fixed md:top-32 top-[78px] w-full max-w-96 bg-white inset-x-0 mx-auto z-[65] rounded-md shadow-md transition-all scale-100 delay-300 `}
                >
                    <div
                        className="absolute right-2 top-1 cursor-pointer"
                        onClick={() => setOpenLogin(false)}
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </div>
                    <div className="w-full px-8 py-6">
                        <h1 className="mb-4 text-2xl font-bold text-center">
                            Masuk
                        </h1>
                        <form action="" method="post" onSubmit={onLoginSubmit}>
                            <input
                                id="email"
                                name="custEmail"
                                type="email"
                                autoComplete="email"
                                required
                                value={custEmail}
                                onChange={(ev) => setEmail(ev.target.value)}
                                className="block w-full rounded-md py-1.5 px-3 text-gray-900 border-0 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"
                                placeholder="User Id"
                            />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="block w-full rounded-md py-1.5 px-3 text-gray-900 border-0 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-1"
                                placeholder="Password"
                            />
                            <p className="text-sm text-slate-500 mb-4 text-right cursor-pointer hover:text-slate-700">
                                Lupa kata sandi ?
                            </p>
                            <div className="flex items-center justify-center">
                                <button className="w-full py-1.5 rounded-md shadow-md font-semibold text-white bg-blue-950">
                                    Masuk
                                </button>
                            </div>
                        </form>
                        <p className="text-center font-thin text-slate-500 mt-2 text-sm">
                            Tidak memiliki Akun?{" "}
                            <a
                                href=""
                                className="font-medium text-blue-950 hover:text-blue-900"
                            >
                                Daftar disini
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {/* End Login PopUp/Modal */}
        </>
    );
}
