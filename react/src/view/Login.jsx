import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import logo from "../assets/img/kanisius.png";
import axiosClient from "../axios";

export default function Login() {
    const { userToken, setCurrentUser, setUserToken } = useStateContext();
    const [custEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

    if (userToken) {
        return <Navigate to="/" />;
    }

    const onLoginSubmit = (ev) => {
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
                returnToHome();
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

    const returnToHome = () => {
        return <Navigate to={"/"} />;
    };

    return (
        <>
            {error.__html && (
                <div
                    className="bg-red-500 rounded py-2 px-3 text-white"
                    dangerouslySetInnerHTML={error}
                ></div>
            )}
            <div className="w-full max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-center mt-10">
                    <a href="/">
                        <img src={logo} alt="" className="" />
                    </a>
                </div>
                <h1 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Masuk untuk berbelanja
                </h1>
                <p></p>
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={onLoginSubmit}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-3 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="custEmail"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={custEmail}
                                    onChange={(ev) => setEmail(ev.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-3 text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(ev) =>
                                        setPassword(ev.target.value)
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Masuk
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center">
                        <p className="text-sm font-medium font">
                            Belum memiliki akun? silahkan{" "}
                            <a
                                href="/signup"
                                className="text-blue-950 font-semibold"
                            >
                                daftar disini
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
