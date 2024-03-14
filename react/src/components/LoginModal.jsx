import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import axiosClient from "../axios";
import { CgSpinner } from "react-icons/cg";

export default function LoginModal() {
    // const [openLogin, setOpenLogin] = useState(false);
    const [custEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });
    const [loginLoading, setLoginLoading] = useState(false);
    const {
        openLogin,
        setOpenLogin,
        setCurrentUser,
        setUserToken,
        userToken,
        setCart,
        setItemAmount,
    } = useStateContext();

    if (userToken) {
        return <Navigate to="/" />;
    }

    const onLoginSubmit = (ev) => {
        // setLoginLoading(true);
        ev.preventDefault();
        setError({ __html: "" });
        axiosClient
            .post("/login", {
                custEmail,
                password,
            })
            .then(({ data }) => {
                setCurrentUser(data.user);
                setUserToken(data.token);
                getCartData();
                getCartAmount();
                setOpenLogin(false);
                // returnToHome();
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
        // setLoginLoading(false);
    };

    const getCartData = () => {
        axiosClient.get("/cart").then(({ data }) => {
            console.log(data);
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

    return (
        <div
            className={`${
                openLogin ? "block" : "hidden"
            } w-full block transition-all duration-300 delay-200 ease-in-out`}
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
                    {/* {pesan ? (
                        <div className="w-full rounded-lg bg-red-400 mb-2">
                            <div className="px-3 py-2">
                                <p className="font-medium text-red-800">
                                    Pesan Notifikasi atau pesan lain
                                </p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )} */}
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
                            <button
                                className="w-full py-1.5 rounded-md shadow-md font-semibold text-white bg-blue-950"
                                {...(loginLoading ? "disabled" : "")}
                                onClick={() => setLoginLoading(true)}
                            >
                                {loginLoading ? (
                                    <div className="w-full flex justify-center">
                                        <CgSpinner className="animate-spin rounded-full h-5 w-5 mr-3" />
                                    </div>
                                ) : (
                                    "Masuk"
                                )}
                            </button>
                        </div>
                    </form>
                    <p className="text-center font-thin text-slate-500 mt-2 text-sm">
                        Tidak memiliki Akun?{" "}
                        <a
                            href="/signup"
                            className="font-medium text-blue-950 hover:text-blue-900"
                        >
                            Daftar disini
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
