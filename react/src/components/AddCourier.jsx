import { FormatRupiah } from "@arismun/format-rupiah";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import axiosClient from "../axios";
import { CgSpinner } from "react-icons/cg";

export default function AddCourier({
    courierSelectedData,
    courierSelectedClick,
    addressData,
    weight,
}) {
    const [activeCourier, setActiveCourier] = useState();
    const [activeCourierDetail, setActiveCourierDetail] = useState();
    const [courierData, setCourierData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCourier, setSelectedCourier] = useState({
        code: "",
        id: "",
        desc: "",
        cost: "",
    });

    const getCourierData = () => {
        setLoading(true);
        console.log(addressData);
        axiosClient
            .post("/getCourierOptionByOriginAndDestination", {
                destination: addressData[0].alamat_subdistrict,
                weight: weight,
            })
            .then(({ data }) => {
                console.log(data.rajaongkir.results);
                setCourierData(data.rajaongkir.results);
                setLoading(false);
            });
    };

    function onClickCourier(id, desc, cost, code) {
        courierSelectedClick(
            {
                code: code,
                id: id,
                desc: desc,
                cost: cost,
            },
            false
        );
    }

    function onClickClose() {
        console.log("modal close");
        courierSelectedClick(selectedCourier, false);
    }

    function cekCourierData() {
        if (courierSelectedData) {
            console.log(courierSelectedData);
            setSelectedCourier(courierSelectedData);
            setActiveCourier(courierSelectedData.code);
            setActiveCourierDetail(courierSelectedData.id);
        }
    }

    useEffect(() => {
        cekCourierData();
        getCourierData();
    }, []);

    // console.log(courierData);
    return (
        <>
            <div className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"></div>
            <div className="fixed inset-x-0 m-auto z-[65] w-screen h-screen flex md:items-center justify-center">
                <div className="relative md:w-[720px] w-[560px] bg-white rounded-md shadow-md transition-all scale-100 delay-300">
                    <div
                        className="absolute top-2 right-2 cursor-pointer"
                        onClick={() => onClickClose()}
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col md:px-12 px-4 pb-8 pt-4">
                        <p className="text-blue-950 font-medium text-lg mb-4">
                            Pilih Jasa Pengiriman
                        </p>
                        <div className="w-full justify-end items-end h-96 max-h-96 overflow-auto">
                            {loading ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    <CgSpinner className="animate-spin rounded-full text-blue-500 h-16 w-16 mr-3" />
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    {courierData.map((courier, index) =>
                                        courier.costs.length > 0 ? (
                                            <div
                                                className="mb-4 px-6 py-1 border border-blue-950 text-blue-950 rounded-lg cursor-pointer hover:text-blue-900 hover:shadow-lg"
                                                key={index}
                                                onClick={() =>
                                                    setActiveCourier(
                                                        courier.code
                                                    )
                                                }
                                            >
                                                <div className="flex flex-row justify-between font-medium">
                                                    <p>{courier.name}</p>
                                                    {activeCourier ==
                                                    courier.code ? (
                                                        <ChevronUpIcon className="h-5 w-5" />
                                                    ) : (
                                                        <ChevronDownIcon className="h-5 w-5" />
                                                    )}
                                                </div>

                                                <div
                                                    className={`${
                                                        activeCourier ==
                                                        courier.code
                                                            ? ""
                                                            : "hidden"
                                                    } flex flex-col mt-2 px-2`}
                                                >
                                                    {courier.costs.map(
                                                        (cost) => (
                                                            <div
                                                                className={`${
                                                                    activeCourierDetail ==
                                                                    cost.service
                                                                        ? "bg-slate-300 text-blue-900"
                                                                        : ""
                                                                } mb-1 bg-slate-200 text-blue-950 rounded-md md:px-4 px-2 py-2 flex flex-row justify-between items-center cursor-pointer hover:bg-slate-300 hover:text-blue-900`}
                                                                key={
                                                                    cost.service
                                                                }
                                                                onClick={() =>
                                                                    onClickCourier(
                                                                        cost.service,
                                                                        cost.description,
                                                                        cost
                                                                            .cost[0]
                                                                            .value,
                                                                        courier.code
                                                                    )
                                                                }
                                                            >
                                                                <div className="flex flex-col">
                                                                    <div className="md:font-semibold font-medium text-base">
                                                                        {
                                                                            cost.description
                                                                        }
                                                                        {" ( "}
                                                                        {
                                                                            cost.service
                                                                        }{" "}
                                                                        {" )"}
                                                                    </div>
                                                                    <div className="font-medium text-sm">
                                                                        {cost.cost[0].etd.replace(
                                                                            "HARI",
                                                                            ""
                                                                        )}
                                                                        {
                                                                            " hari"
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="md:font-medium md:text-base text-sm">
                                                                    <FormatRupiah
                                                                        value={
                                                                            cost
                                                                                .cost[0]
                                                                                .value
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    )}

                                    {selectedCourier.id ? (
                                        <div className="">
                                            Ada Data
                                            {selectedCourier.id}
                                        </div>
                                    ) : (
                                        <div className="">Tidak ada data</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
