import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddAddress from "../components/AddAddress";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";
import AddCourier from "../components/AddCourier";
import { FormatRupiah } from "@arismun/format-rupiah";
import { NavLink } from "react-router-dom";

export default function Checkout() {
    const { currentUser, setUrlPathname, cart } = useStateContext();
    const [addresModal, setAddresModal] = useState(false);
    const [courierModal, setCourierModal] = useState(false);
    const [address, setAddress] = useState([]);
    const [loading, setLoading] = useState(false);
    const [addressLoading, setAddressLoading] = useState(false);
    const [provinceData, setProvinceData] = useState({});
    const [courierSelected, setCourierSelected] = useState({
        code: "",
        id: "",
        desc: "",
        cost: "",
    });

    const total = cart.reduce(
        (a, v) => (a = a + v.cart_price * v.cart_amount),
        0
    );

    const productWeightTotal = cart.reduce(
        (a, v) => (a = a + v.prodBerat * v.cart_amount),
        0
    );

    const addressModalOnClick = (val) => {
        setAddresModal(val);
    };

    const courierSelectedClick = (val, open) => {
        // console.log(val);
        // console.log(open);
        setCourierSelected(val);
        setCourierModal(open);
    };

    const getCustomerAddress = async () => {
        if (currentUser.C_ID) {
            setAddressLoading(true);
            console.log(currentUser.C_ID);
            axiosClient.get(`/address/${currentUser.C_ID}`).then(({ data }) => {
                setAddress(data);
                // console.log(data);
                setAddressLoading(false);
            });
        }
    };

    const getSnapToken = async () => {
        axiosClient
            .post(`/getSnapToken`, {
                currentUser,
                transaction: {
                    total: courierSelected.cost + total,
                },
                cart,
                details: [
                    {
                        id: 1,
                        desc: "Total Belanja",
                        price: total,
                    },
                    {
                        id: 2,
                        desc: "Ongkos Kirim",
                        price: courierSelected.cost,
                    },
                ],
            })
            .then(({ data }) => {
                // setAddress(data);
                console.log(data);
                // setAddressLoading(false);
                window.snap.pay(data);
            });
    };

    const onChangeProvId = (ev) => {
        // console.log("on change value ketika dapet alamat");
        // console.log(ev.target.value);
    };

    useEffect(() => {
        // console.log(cart);
        getCustomerAddress();
        setUrlPathname("checkout");
    }, []);

    useEffect(() => {
        getCustomerAddress();
    }, [currentUser]);

    // midtrans setup
    // const authString = btoa(`${MIDTRANS_SERVER_KEY}`);
    useEffect(() => {
        // You can also change below url value to any script url you wish to load,
        // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
        const midtransScriptUrl =
            "https://app.sandbox.midtrans.com/snap/snap.js";

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;

        // Optional: set script attribute, for example snap.js have data-client-key attribute
        // (change the value according to your client-key)
        const myMidtransClientKey = "SB-Mid-client-JVPcM1Rgie_2QE1s";
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    const onClickPay = () => {
        getSnapToken();
        // window.snap.pay("TRANSACTION_TOKEN_HERE");
    };
    // End midtrans setup

    return (
        <div>
            <PageComponent>
                <div className="">
                    {addresModal ? (
                        <AddAddress onCloseClick={addressModalOnClick} />
                    ) : (
                        ""
                    )}
                    {courierModal ? (
                        <AddCourier
                            courierSelectedData={courierSelected}
                            courierSelectedClick={courierSelectedClick}
                            addressData={address}
                            weight={productWeightTotal}
                        />
                    ) : (
                        ""
                    )}
                    {/* Breadcrumb */}
                    <div className="w-full pt-28 md:pt-32 bg-blue-950 lg:h-44 h-32 sm:h-28 md:h-36">
                        <div className="relative h-full w-full">
                            <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                                <p className="md:font-medium font-light md:text-lg text-sm">
                                    Checkout
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                            <div className=""></div>
                        </div>
                    </div>
                    {/* Breadcrumb End */}

                    {/* {address.length > 0 ? getProvinceDataDetail() : ""} */}

                    <div className="w-full mx-auto max-w-7xl md:mt-12 mt-8 md:px-8 px-2">
                        <div className="flex md:flex-row flex-col bg-slate-200 rounded-xl">
                            <div className="md:w-3/5 w-full">
                                <div className="m-3">
                                    {addressLoading ? (
                                        // <div className="w-full flex items-center justify-center py-4">
                                        //     <CgSpinner className="animate-spin rounded-full text-blue-500 h-16 w-16 mr-3" />
                                        // </div>
                                        <div className="w-full h-24 bg-slate-300 animate-pulse rounded-md">
                                            <div className="mx-8 py-4">
                                                <div className="rounded-lg bg-slate-400 h-3 mb-2"></div>
                                                <div className="rounded-lg bg-slate-400 h-3 mb-2"></div>
                                                <div className="rounded-lg bg-slate-400 h-3"></div>
                                            </div>
                                        </div>
                                    ) : address.length > 0 ? (
                                        <div className="flex flex-col justify-start lg:px-8 px-4 py-3 rounded-lg shadow-lg border border-slate-200 bg-white">
                                            <div className="font-bold lg:text-lg text-base text-blue-950">
                                                Alamat Kirim
                                            </div>
                                            <div className="w-full flex items-center justify-start mb-1">
                                                <p className="font-medium lg:text-base text-sm text-blue-950">
                                                    {address[0].alamat_penerima}
                                                </p>
                                            </div>
                                            <div className="w-full flex items-center justify-start mb-1">
                                                <p className="font-medium text-blue-950 lg:text-base text-sm leading-tight">
                                                    {address[0].alamat_lengkap +
                                                        ", " +
                                                        address[0].subdistrict +
                                                        ", " +
                                                        address[0].city +
                                                        ", " +
                                                        address[0].province}
                                                    <input
                                                        type="hidden"
                                                        value={
                                                            address[0]
                                                                .alamat_provinsi
                                                        }
                                                        onChange={(ev) =>
                                                            onChangeProvId(ev)
                                                        }
                                                    />
                                                </p>
                                            </div>
                                            <div className="w-full flex items-center justify-start mb-4">
                                                <p className="font-medium text-blue-950 lg:text-base text-sm">
                                                    {address[0].alamat_hp}
                                                </p>
                                            </div>
                                            <div className="w-full flex items-center justify-end">
                                                <button className="bg-blue-950 text-white font-semibold lg:px-6 lg:py-2 px-3 py-1 text-sm lg:text-base rounded-md shadow-md">
                                                    Ubah Alamat
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col justify-start px-8 py-3 rounded-lg shadow-lg border border-slate-200 bg-white">
                                            <h1 className="font-semibold text-lg text-blue-950 mb-3">
                                                Alamat Pengiriman
                                            </h1>
                                            <p className="text-center text-2xl font-bold text-slate-600 mb-6">
                                                Tidak Ada Alamat
                                            </p>
                                            <div className="w-full flex justify-end">
                                                <button
                                                    className="flex flex-row items-center px-6 py-2 bg-blue-950 font-medium text-white rounded-md"
                                                    onClick={() =>
                                                        setAddresModal(true)
                                                    }
                                                >
                                                    <PlusIcon className="h-5 w-5" />{" "}
                                                    <p className="pl-2">
                                                        Tambahkan Alamat
                                                    </p>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="m-3 rounded-lg shadow-lg border border-slate-200 bg-white">
                                    <div className="px-4 py-2">
                                        {cart
                                            ? cart.map((cart, index) => (
                                                  <div
                                                      className="border-b border-blue-950 flex flex-row items-start justify-start lg:px-4 md:px-2 md:py-3 px-1.5 py-1"
                                                      key={index}
                                                  >
                                                      <div className="lg:w-4/5 w-3/4 flex flex-row pr-1">
                                                          <div className="rounded-md h-[108px] w-[72px] bg-blue-500 hidden lg:block"></div>
                                                          <div className="flex flex-col lg:pl-4">
                                                              <h1 className="font-medium text-blue-950 text-sm lg:text-base">
                                                                  {
                                                                      cart.ProdDesc3
                                                                  }
                                                              </h1>
                                                              <p className="lg:text-sm text-xs font-light text-slate-600">
                                                                  {
                                                                      cart.cart_amount
                                                                  }{" "}
                                                                  barang - Berat
                                                                  :{" "}
                                                                  {cart.prodBerat
                                                                      ? cart.prodBerat
                                                                      : "-"}
                                                                  gr Total :{" "}
                                                                  {cart.prodBerat
                                                                      ? cart.prodBerat *
                                                                        cart.cart_amount
                                                                      : "-"}
                                                                  gr
                                                              </p>
                                                              <p className="font-medium text-blue-950 md:text-base text-xs">
                                                                  <FormatRupiah
                                                                      value={
                                                                          cart.cart_price
                                                                      }
                                                                  />
                                                              </p>
                                                          </div>
                                                      </div>
                                                      <div className="lg:w-1/5 w-1/4 h-full flex justify-end items-center">
                                                          <p className="font-semibold text-blue-950 lg:text-lg md:text-sm text-xs">
                                                              <FormatRupiah
                                                                  value={
                                                                      cart.cart_amount *
                                                                      cart.cart_price
                                                                  }
                                                              />
                                                          </p>
                                                      </div>
                                                  </div>
                                              ))
                                            : ""}
                                        <div className="w-full flex flex-row items-center justify-between py-2">
                                            <div className="font-medium text-blue-950 lg:text-base text-sm">
                                                Berat total {productWeightTotal}{" "}
                                                gr
                                            </div>
                                            <div className="font-medium text-blue-950 lg:text-base text-sm">
                                                Total:{" "}
                                                <FormatRupiah value={total} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-3">
                                    <div className="flex items-center rounded-lg shadow-lg border border-slate-200 bg-white px-4 py-2">
                                        {addressLoading ? (
                                            <div className="">Loading</div>
                                        ) : address.length > 0 ? (
                                            courierSelected.code ? (
                                                <div className="w-full flex lg:flex-row flex-col lg:items-center lg:justify-between">
                                                    <div className="font-semibold lg:text-lg text-base text-blue-950 lg:my-4 mb-2">
                                                        Pengiriman
                                                    </div>
                                                    <div className="lg:my-4 mb-4 flex flex-col w-full items-center justify-center">
                                                        <p className="font-medium text-base text-blue-950">
                                                            {courierSelected.code.toUpperCase()}{" "}
                                                            {"-"}{" "}
                                                            {
                                                                courierSelected.desc
                                                            }
                                                        </p>
                                                        <p className="font-semibold text-base text-blue-950 ">
                                                            <FormatRupiah
                                                                value={
                                                                    courierSelected.cost
                                                                }
                                                            />
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 bg-blue-950 rounded-md shadow-md cursor-pointer text-white font-medium hover:bg-blue-900 text-center mb-4"
                                                        onClick={() =>
                                                            setCourierModal(
                                                                true
                                                            )
                                                        }
                                                    >
                                                        Ganti Jasa Pengiriman
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="w-full flex flex-row items-center justify-between">
                                                    <div className="font-semibold text-lg text-blue-950 my-4">
                                                        Pilih Kurir
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 bg-blue-950 rounded-md shadow-md cursor-pointer text-white font-medium hover:bg-blue-900"
                                                        onClick={() =>
                                                            setCourierModal(
                                                                true
                                                            )
                                                        }
                                                    >
                                                        Pilih Jasa Pengiriman
                                                    </div>
                                                </div>
                                            )
                                        ) : (
                                            <div className="font-semibold text-lg text-slate-400 my-4">
                                                Belum ada Alamat
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="relative md:m-3 mb-8 md:w-2/5 w-full overflow-auto">
                                <div className="sticky top-0 bg-white rounded-lg shadow-lg flex flex-col mx-3 md:mx-0 px-4 py-3 h-fit mb-4">
                                    <h1 className="lg:text-2xl text-lg mb-4 font-semibold text-slate-600">
                                        Pembayaran
                                    </h1>
                                    <span className="h-0.5 w-full bg-slate-200 mb-4"></span>
                                    <div className="w-full flex justify-center mb-4">
                                        <button
                                            className={`${
                                                courierSelected.cost
                                                    ? "hover:bg-blue-900 hover:shadow-xl"
                                                    : "cursor-not-allowed"
                                            } lg:px-8 px-4 py-2 bg-blue-950 rounded-md shadow-md text-white font-medium text-sm lg:text-base`}
                                            onClick={onClickPay}
                                            disabled={
                                                courierSelected.cost
                                                    ? false
                                                    : true
                                            }
                                        >
                                            Pilih Metode Pembayaran
                                        </button>
                                    </div>
                                </div>
                                <div className="sticky top-0 bg-white rounded-lg shadow-lg flex flex-col mx-3 md:mx-0 px-4 py-3 h-fit">
                                    <div className="flex flex-col">
                                        <h1 className="lg:text-2xl md:text-base text-lg mb-4 font-semibold text-slate-600">
                                            Rincian Belanja
                                        </h1>
                                        <span className="h-0.5 w-full bg-slate-200 mb-2"></span>
                                        <div className="flex flex-col mb-10">
                                            <div className="flex flex-row items-center justify-between px-4 lg:mb-2 mb-1">
                                                <p className="font-medium text-slate-700 lg:text-base md:text-sm text-base">
                                                    Total Belanja
                                                </p>
                                                <p className="font-bold text-black lg:text-base md:text-sm text-base">
                                                    <FormatRupiah
                                                        value={total}
                                                    />
                                                </p>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-4 mb-4">
                                                <p className="font-medium text-slate-700 lg:text-base md:text-sm text-base">
                                                    Ongkos Kirim
                                                </p>
                                                <p className="font-bold text-black lg:text-base md:text-sm text-base">
                                                    <FormatRupiah
                                                        value={
                                                            courierSelected.cost
                                                        }
                                                    />
                                                </p>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-4">
                                                <p className="font-medium text-slate-700 lg:text-base md:text-sm text-base">
                                                    Total
                                                </p>
                                                <p className="font-bold text-black lg:text-base md:text-sm text-base">
                                                    <FormatRupiah
                                                        value={
                                                            courierSelected.cost +
                                                            total
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                        {/* <div className="w-full flex justify-center mb-4">
                                            <NavLink
                                                to={"/checkout"}
                                                className="lg:w-2/3 w-full py-2 bg-blue-950 text-center text-white rounded-lg font-semibold shadow-lg hover:bg-blue-900"
                                            >
                                                Lanjutkan Pembelian
                                            </NavLink>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Midtrans */}
                    <div id="snap-container"></div>
                    {/* End Midtrans */}
                </div>

                <div id="snap-container"></div>
            </PageComponent>
        </div>
    );
}
