import React, { useEffect, useState } from "react";
import axiosClient from "../axios";
import { CgSpinner } from "react-icons/cg";
import { useStateContext } from "../contexts/ContextProvider";

export default function AddAddress() {
    const { currentUser } = useStateContext();
    const [province, setProvince] = useState();
    const [city, setCity] = useState();
    const [handphone, setHandphone] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [provinceData, setProvinceData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProvinceData = () => {
        setLoading(true);
        axiosClient.get("/getProvinceData").then(({ data }) => {
            setProvinceData(data.rajaongkir.results);
            console.log(data.rajaongkir.results);
            setLoading(false);
            // console.log(data);
        });
    };

    const getCityData = (prov) => {
        setLoading(true);
        axiosClient.get(`/getCityByProvinceId/${prov}`).then(({ data }) => {
            // setCategory(data.data);
            // setCategoryId(data.data[0].katID.substring(0, 2));
            // console.log("setsetProvinceData");
            console.log(data);
            setCityData(data.rajaongkir.results);
            setLoading(false);
        });
    };

    const onChangeProvince = (ev) => {
        getCityData(ev.target.value);
        setProvince(ev.target.value);
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
            })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
                // if (error.response) {
                //     const finalErrors = Object.values(
                //         error.response.data.errors
                //     ).reduce((accum, next) => [...accum, ...next], []);
                //     // console.log(finalErrors);
                //     setError({ __html: finalErrors.join("<br>") });
                // }
                // console.error(finalErrors);
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

            <div className="fixed z-[60] w-screen h-screen bg-slate-500 opacity-30"></div>
            <div className="fixed md:top-20 top-[78px] w-[720px] bg-white inset-x-0 mx-auto z-[65] rounded-md shadow-md transition-all scale-100 delay-300">
                <div className="flex flex-col px-8 py-6">
                    <h1>Alamat</h1>
                    <div className="">
                        <form
                            action="#"
                            method="post"
                            onSubmit={onSubmitAddress}
                        >
                            <div className="flex flex-col justify-start mb-2">
                                <label htmlFor="province">Nama Penerima</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="bg-slate-200"
                                    onChange={(ev) => setName(ev.target.value)}
                                />
                            </div>
                            <div className="flex flex-col justify-start mb-2">
                                <label htmlFor="handphone">No HP</label>
                                <input
                                    id="handphone"
                                    name="handphone"
                                    type="text"
                                    className="bg-slate-200"
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
                                    className="bg-slate-200 overflow-auto"
                                    rows={5}
                                    onChange={(e) => onChangeProvince(e)}
                                    aria-placeholder="tesss"
                                >
                                    <option value="null"></option>
                                    {provinceData
                                        ? provinceData.map((prov, index) => (
                                              <option
                                                  value={prov.province_id}
                                                  key={index}
                                              >
                                                  {prov.province}
                                              </option>
                                          ))
                                        : ""}
                                </select>
                            </div>
                            <div className="flex flex-col justify-start mb-2">
                                <label htmlFor="city">Kota/Kabupaten</label>
                                <select
                                    name="city"
                                    id="city"
                                    className="bg-slate-200"
                                    onChange={(ev) => setCity(ev.target.value)}
                                >
                                    <option value="null"></option>
                                    {cityData
                                        ? cityData.map((cit, index) => (
                                              <option value={cit.city_id}>
                                                  {cit.city_name}
                                              </option>
                                          ))
                                        : ""}
                                </select>
                            </div>
                            <div className="flex flex-col justify-start mb-2">
                                <label htmlFor="province">Alamat Detail</label>
                                <textarea
                                    name="address"
                                    id="address"
                                    cols="30"
                                    rows="5"
                                    className="bg-slate-200"
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
        </>
    );
}
