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
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";

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
    // const [openLogin, setOpenLogin] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [cartAmount, setCartAmount] = useState();

    const {
        userToken,
        currentUser,
        setCurrentUser,
        setUserToken,
        setCart,
        cart,
        openLogin,
        setOpenLogin,
        itemAmount,
        setItemAmount,
        openCartModal,
        setOpenCartModal,
        categoryData,
        setCategoryData,
        setCategorySelected,
    } = useStateContext();
    const [custEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });
    const [openProfileList, setOpenProfileList] = useState(false);

    const onCategoryHover = (id) => {
        setCategoryActive(id);
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
        // console.log(category);
        setCategoryDetails(category.categorys[0]);
        if (userToken) {
            getUserData();
            getCartData();
            getCartAmount();
        }
        getCategoryData();
    }, []);

    const getCategoryData = () => {
        axiosClient.get("/kel-kategori").then(({ data }) => {
            // console.log(data);
            setCategoryData(data);
        });
    };

    const getUserData = () => {
        axiosClient.get("/me").then(({ data }) => {
            setCurrentUser(data);
        });
    };

    const getCartData = () => {
        axiosClient.get("/cart").then(({ data }) => {
            // console.log(data[0].submenu);
            setCartData(data.data);
            setCart(data.data);
        });
    };

    const getCartAmount = () => {
        axiosClient.get("/cartAmount").then(({ data }) => {
            // setCartAmount(data[0].cart_amount);
            if (data.length > 0) {
                setItemAmount(data[0].cart_amount);
            }
        });
    };

    const logout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then((res) => {
            setCurrentUser({});
            setUserToken(null);
            setOpenProfileList(false);
            setOpenSidebar(false);
            setItemAmount(0);
            setCart([]);
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
                                        setOpenCartModal(
                                            (openCartModal) => !openCartModal
                                        )
                                    }
                                >
                                    <ShoppingCartIcon className="h-7 w-7 text-blue-950" />
                                    <div className="absolute h-4 w-4 rounded-full bg-red-500 -top-2 -right-2 flex items-center justify-center">
                                        <p className="p-1 text-[8px] text-white font-medium">
                                            {itemAmount}
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
            {/* Modal popup Cart */}
            <CartModal />
            {/* END Modal popup Cart */}

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
                                {categoryData
                                    ? categoryData.map((cat, index) => (
                                          <li
                                              className="font-semibold text-blue-950 text-base mb-4"
                                              key={cat.katID}
                                          >
                                              <Link
                                                  className={`hover:text-blue-800 ${
                                                      categoryData[
                                                          categoryActive
                                                      ].katNama == cat.katNama
                                                          ? "text-blue-800"
                                                          : ""
                                                  }`}
                                                  to={`/category/${cat.katNama
                                                      .replace(/\s+/g, "-")
                                                      .toLowerCase()}`}
                                                  key={index}
                                                  onMouseEnter={(evt) =>
                                                      onCategoryHover(index)
                                                  }
                                                  onClick={() =>
                                                      setCategorySelected(
                                                          (
                                                              "000000" +
                                                              cat.katID
                                                          ).slice(-6)
                                                      )
                                                  }
                                              >
                                                  {cat.katNama}
                                              </Link>
                                          </li>
                                      ))
                                    : ""}
                            </ul>
                        </div>
                        <div className="md:w-3/4 w-2/3 h-full max-h-72 mx-4 overflow-auto scrollbar">
                            <ul className="flex flex-wrap flex-row font-semibold text-blue-950 pt-1">
                                {categoryData[categoryActive]
                                    ? categoryData[categoryActive].submenu.map(
                                          (dtl, index) => (
                                              <li
                                                  className="whitespace-nowrap lg:w-1/4 sm:w-1/2 w-full flex flex-col cursor-pointer text-sm pb-2 hover:text-blue-900"
                                                  onMouseEnter={(ev) =>
                                                      onMouseEnterCategoryDtl(
                                                          dtl.katNama
                                                      )
                                                  }
                                                  onMouseLeave={() =>
                                                      onMouseLeaveCategoryDtl()
                                                  }
                                                  key={dtl.katNama}
                                              >
                                                  <Link
                                                      className="whitespace-nowrap lg:w-1/4 sm:w-1/2 w-full "
                                                      to={`/category/${categoryData[
                                                          categoryActive
                                                      ].katNama
                                                          .replace(/\s+/g, "-")
                                                          .toLowerCase()}/${dtl.katNama
                                                          .replace(/\s+/g, "-")
                                                          .toLowerCase()}`}
                                                      key={index}
                                                      onClick={() =>
                                                          setCategorySelected(
                                                              (
                                                                  "000000" +
                                                                  dtl.katID
                                                              ).slice(-6)
                                                          )
                                                      }
                                                  >
                                                      {dtl.katNama}
                                                  </Link>

                                                  {dtl.submenuDtl.length ? (
                                                      <ul
                                                          className={`${
                                                              activeCategoryDetailName ==
                                                              dtl.katNama
                                                                  ? "flex"
                                                                  : "hidden"
                                                          } flex-wrap flex-col font-semibold text-blue-950 pt-1`}
                                                      >
                                                          {dtl.submenuDtl.map(
                                                              (sub) => (
                                                                  <Link
                                                                      className="whitespace-nowrap lg:w-1/4 sm:w-1/2 w-full"
                                                                      to={`/category/${categoryData[
                                                                          categoryActive
                                                                      ].katNama
                                                                          .replace(
                                                                              /\s+/g,
                                                                              "-"
                                                                          )
                                                                          .toLowerCase()}/${dtl.katNama
                                                                          .replace(
                                                                              /\s+/g,
                                                                              "-"
                                                                          )
                                                                          .toLowerCase()}/${sub.katNama
                                                                          .replace(
                                                                              /\s+/g,
                                                                              "-"
                                                                          )
                                                                          .toLowerCase()}`}
                                                                      key={
                                                                          sub.katID
                                                                      }
                                                                      onClick={() =>
                                                                          setCategorySelected(
                                                                              (
                                                                                  "000000" +
                                                                                  sub.katID
                                                                              ).slice(
                                                                                  -6
                                                                              )
                                                                          )
                                                                      }
                                                                  >
                                                                      <li
                                                                          className="whitespace-nowrap w-full flex items-center cursor-pointer text-sm pb-2 pl-4 hover:text-blue-900"
                                                                          key={
                                                                              sub.katNama
                                                                          }
                                                                      >
                                                                          {
                                                                              sub.katNama
                                                                          }
                                                                      </li>
                                                                  </Link>
                                                              )
                                                          )}
                                                      </ul>
                                                  ) : (
                                                      ""
                                                  )}
                                              </li>
                                          )
                                      )
                                    : ""}
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
                } fixed w-full max-w-72 md:max-w-36 border border-1 shadow-lg bg-white right-4 z-40 transition-all ease-in-out duration-300 rounded-sm`}
            >
                <div
                    className={`${
                        userToken ? "block" : "hidden"
                    } px-3 py-4 w-full flex items-center justify-center`}
                >
                    <button className="bg-white text-blue-950 border border-blue-900 font-semibold hover:bg-slate-50 transition delay-150 ease-in-out hover:shadow-md py-2 px-4 rounded-md">
                        <div className="flex flex-row items-end">
                            <UserIcon className="h-7 w-7 text-blue-950 " />
                            <p className="text-blue-950 ml-2 font-medium text-sm">
                                {currentUser.custNama}
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex flex-row justify-between w-full">
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
                    <div
                        className={`mb-3 border-l border-l-blue-950 w-1/2 md:w-full`}
                    >
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
            </div>
            {/* End Account Thumbnail */}

            {/* Login PopUp/Modal */}
            <LoginModal />
            {/* End Login PopUp/Modal */}
        </>
    );
}
