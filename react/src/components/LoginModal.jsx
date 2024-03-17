import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import axiosClient from "../axios";
import { CgSpinner } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ButtonLogin = ({ loading }) => {
    if (loading) {
        return (
            <button
                className="w-full py-1.5 rounded-md shadow-md font-semibold text-white bg-blue-950"
                disabled
            >
                <div className="w-full flex justify-center">
                    <CgSpinner className="animate-spin rounded-full h-5 w-5 mr-3" />
                </div>
            </button>
        );
    } else {
        return (
            <button className="w-full py-1.5 rounded-md shadow-md font-semibold text-white bg-blue-950">
                <p>Masuk</p>
            </button>
        );
    }
};

export default function LoginModal() {
    const [custEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });
    const [loading, setLoading] = useState(false);
    // const [loginLoading, setLoginLoading] = useState(true);
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

    const onLoginSubmit = async (ev) => {
        setLoading(true);
        // console.log(loginLoading);
        ev.preventDefault();
        setError({ __html: "" });
        await axiosClient
            .post("/login", {
                custEmail,
                password,
            })
            .then(({ data }) => {
                if (data.error) {
                    setError({ __html: data.error });
                } else {
                    setCurrentUser(data.user);
                    setUserToken(data.token);
                    getCartData();
                    getCartAmount();
                    setOpenLogin(false);
                }
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
        setLoading(false);
    };

    const getCartData = () => {
        axiosClient.get("/cart").then(({ data }) => {
            // console.log(data);
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
                    {error.__html && (
                        <div className="relative w-full">
                            <div
                                className=" bg-red-500 rounded py-2 px-3 text-white text-center mt-4"
                                dangerouslySetInnerHTML={error}
                            ></div>
                            <div
                                className="absolute right-2 top-1 text-white cursor-pointer"
                                onClick={() => setError({ __html: "" })}
                            >
                                <AiOutlineCloseCircle className="h-5 w-5" />
                            </div>
                        </div>
                    )}
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
                            {/* <button className="w-full py-1.5 rounded-md shadow-md font-semibold text-white bg-blue-950"> */}
                            <ButtonLogin loading={loading} />
                            {/* Masuk */}
                            {/* <div className="w-full flex justify-center">
                                    
                                    <CgSpinner className="animate-spin rounded-full h-5 w-5 mr-3" />
                                    
                                </div> */}
                            {/* </button> */}
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
