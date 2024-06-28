import React, { useEffect, useState } from "react";
import axiosClient from "../axios";
import { CgSpinner } from "react-icons/cg";
import { useStateContext } from "../contexts/ContextProvider";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function AddAddress({ onCloseClick }) {
    const { currentUser } = useStateContext();
    const [province, setProvince] = useState();
    const [city, setCity] = useState();
    const [handphone, setHandphone] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [provinceData, setProvinceData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [subdistrict, setSubdistrict] = useState();
    const [subdistrictData, setSubdistrictData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [addressData, setAddressData] = useState({});

    const getProvinceData = () => {
        setLoading(true);
        axiosClient.get("/getProvinceData").then(({ data }) => {
            setProvinceData(data.rajaongkir.results);
            // console.log(data.rajaongkir.results);
            setLoading(false);
            // console.log(data);
        });
    };

    function onModalCloseClick(ev) {
        ev.preventDefault();
        console.log("on Close Click");
        onCloseClick(false);
    }

    const getCityData = (prov) => {
        setLoading(true);
        axiosClient.get(`/getCityByProvinceId/${prov}`).then(({ data }) => {
            // console.log(data);
            setCityData(data.rajaongkir.results);
            setLoading(false);
        });
    };

    const getSubdistrictData = (city) => {
        setLoading(true);
        axiosClient.get(`/getSubdistrictData/${city}`).then(({ data }) => {
            // console.log(data);
            setSubdistrictData(data.rajaongkir.results);
            setLoading(false);
        });
    };

    const onChangeProvince = (ev) => {
        getCityData(ev.target.value);
        setProvince(ev.target.value);
    };

    const onChangeCity = (ev) => {
        getSubdistrictData(ev.target.value);
        setCity(ev.target.value);
    };

    const onSubmitAddress = (ev) => {
        ev.preventDefault();

        axiosClient
            .post("/address", {
                cust_id: currentUser.C_ID,
                province,
                city,
                address,
                handphone,
                name,
                subdistrict,
            })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getProvinceData();
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <div className="fixed z-[70] w-screen h-screen bg-slate-500 opacity-30"></div>
                    <div className="fixed z-[75] w-screen h-screen flex items-center justify-center">
                        <CgSpinner className="animate-spin rounded-full text-blue-500 h-16 w-16 mr-3" />
                    </div>
                </>
            ) : (
                ""
            )}

            <div
                className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"
                onClick={(ev) => onModalCloseClick(ev)}
            ></div>
            <div className="fixed inset-x-0 m-auto z-[65] w-screen h-screen flex items-center justify-center">
                <div className="relative w-[720px] bg-white rounded-md shadow-md transition-all scale-100 delay-300">
                    <div
                        className="absolute top-2 right-2 cursor-pointer"
                        onClick={(ev) => onModalCloseClick(ev)}
                    >
                        <XMarkIcon className="h-7 w-7" />
                    </div>
                    <div className="flex flex-col px-8 py-6">
                        <h1 className="text-lg font-bold text-blue-950 mb-2">
                            Alamat
                        </h1>
                        <div className="">
                            <form
                                action="#"
                                method="post"
                                onSubmit={onSubmitAddress}
                            >
                                <div className="flex flex-col justify-start mb-2">
                                    <label htmlFor="province">
                                        Nama Penerima
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="bg-slate-200 rounded-md px-3 py-1"
                                        onChange={(ev) =>
                                            setName(ev.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col justify-start mb-2">
                                    <label htmlFor="handphone">No HP</label>
                                    <input
                                        id="handphone"
                                        name="handphone"
                                        type="text"
                                        className="bg-slate-200 rounded-md px-3 py-1"
                                        onChange={(ev) =>
                                            setHandphone(ev.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col justify-start mb-2">
                                    <label htmlFor="province">Provinsi</label>
                                    <select
                                        name="province"
                                        id="province"
                                        className="bg-slate-200 overflow-auto rounded-md px-3 py-1"
                                        rows={5}
                                        onChange={(e) => onChangeProvince(e)}
                                        aria-placeholder="tesss"
                                    >
                                        <option value="null"></option>
                                        {provinceData
                                            ? provinceData.map(
                                                  (prov, index) => (
                                                      <option
                                                          value={
                                                              prov.province_id
                                                          }
                                                          key={index}
                                                      >
                                                          {prov.province}
                                                      </option>
                                                  )
                                              )
                                            : ""}
                                    </select>
                                </div>
                                <div className="flex flex-col justify-start mb-2">
                                    <label htmlFor="city">Kota/Kabupaten</label>
                                    <select
                                        name="city"
                                        id="city"
                                        className="bg-slate-200 rounded-md px-3 py-1"
                                        onChange={(ev) => onChangeCity(ev)}
                                    >
                                        <option value="null"></option>
                                        {cityData
                                            ? cityData.map((cit, index) => (
                                                  <option
                                                      value={cit.city_id}
                                                      key={index}
                                                  >
                                                      {cit.city_name}
                                                  </option>
                                              ))
                                            : ""}
                                    </select>
                                </div>
                                <div className="flex flex-col justify-start mb-2">
                                    <label htmlFor="subdistrict">
                                        Kecamatan
                                    </label>
                                    <select
                                        name="subdistrict"
                                        id="subdistrict"
                                        className="bg-slate-200 rounded-md px-3 py-1"
                                        onChange={(ev) =>
                                            setSubdistrict(ev.target.value)
                                        }
                                    >
                                        <option value="null"></option>
                                        {subdistrictData
                                            ? subdistrictData.map(
                                                  (sub, index) => (
                                                      <option
                                                          value={
                                                              sub.subdistrict_id
                                                          }
                                                          key={index}
                                                      >
                                                          {sub.subdistrict_name}
                                                      </option>
                                                  )
                                              )
                                            : ""}
                                    </select>
                                </div>
                                <div className="flex flex-col justify-start mb-2">
                                    <label htmlFor="province">
                                        Alamat Detail
                                    </label>
                                    <textarea
                                        name="address"
                                        id="address"
                                        cols="30"
                                        rows="2"
                                        className="bg-slate-200 rounded-md px-3 py-1"
                                        onChange={(ev) =>
                                            setAddress(ev.target.value)
                                        }
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button className="w-full py-1.5 rounded-md shadow-md font-semibold text-white bg-blue-950 hover:bg-blue-900">
                                        <p>Tambahkan</p>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
