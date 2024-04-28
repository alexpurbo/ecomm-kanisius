import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios";
import PromoCards from "../components/PromoCards";

export default function Promo() {
    const [promo, setPromo] = useState([]);

    const getDataPromo = () => {
        axiosClient.get("/getPromo").then(({ data }) => {
            setPromo(data);
            // console.log(data);
        });
    };

    useEffect(() => {
        getDataPromo();
    }, []);

    return (
        <div>
            <PageComponent>
                <div className="w-full pt-28 md:pt-32 bg-blue-950 h-44">
                    <div className="relative h-full w-full">
                        <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                            <p className="md:font-medium font-light md:text-lg text-sm">
                                Promo
                            </p>
                        </div>
                    </div>
                </div>
                {promo ? (
                    <PromoCards promos={promo} />
                ) : (
                    <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                        <h1 className="text-3xl font-bold p-5">
                            Tidak Ada Promo
                        </h1>
                    </div>
                )}
            </PageComponent>
        </div>
    );
}
