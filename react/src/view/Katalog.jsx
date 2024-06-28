import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import Breadcrumbs from "../components/Breadcrumbs";
import axiosClient from "../axios";
import { FormatRupiah } from "@arismun/format-rupiah";
import PaginationLinks from "../components/PaginationLinks";
import { useStateContext } from "../contexts/ContextProvider";
import promo1 from "../assets/img/promo/COV-KATALOG-PAKAT-2024-K-13-213x300.png";
import promo2 from "../assets/img/promo/COV-KATALOG_BUKU-PELAJARAN-2024-213x300.png";
import promo3 from "../assets/img/promo/COV-PAKAT-KUMER-2024-213x300.jpeg";
import promo4 from "../assets/img/promo/Katalog-Buku-Anak-Umum-212x300.png";
import promo5 from "../assets/img/promo/Katalog-Buku-Filsafat-213x300.png";
import promo6 from "../assets/img/promo/Katalog-Buku-Inisiasi-211x300.png";
import promo7 from "../assets/img/promo/Katalog-Buku-PAKAT-216x300.png";
import promo8 from "../assets/img/promo/Katalog-Buku-PT-212x300.png";
import promo9 from "../assets/img/promo/Kover-KATALOG-BUKU-ANAK-REMAJA-PEMBINA-2023-213x300.png";
import promo10 from "../assets/img/promo/Kover-KATALOG-Buku-Pendukung-Prodiakon-2023-213x300.png";
import promo11 from "../assets/img/promo/Screenshot-2023-07-04-at-11-42-25-COVER-ISI-Katalog-Buku-Kitab-Suci-LR.pdf-213x300.png";
import promo12 from "../assets/img/promo/Screenshot-238-210x300.png";
import { ArrowDownTrayIcon, EyeIcon } from "@heroicons/react/24/solid";

export default function Katalog() {
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState("01");
    const [productKatalog, setProductKatalog] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setUrlPathname } = useStateContext();

    const onPageClick = (link) => {
        getProducts(link.url);
        window.scrollTo(0, 0);
    };

    const setCategoryData = () => {
        axiosClient.get("/getCategoryFirst").then(({ data }) => {
            setCategory(data.data);
            setCategoryId(data.data[0].katID.substring(0, 2));
        });
    };

    const getProducts = (url) => {
        setLoading(true);
        url = url || `/getProductByCategoryFirst/${categoryId}`;
        axiosClient.get(url).then(({ data }) => {
            console.log(data.data);
            setProductKatalog(data.data);
            setProducts(data);
            setLoading(false);
        });
    };

    const categoryOnChange = () => {};

    useEffect(() => {
        setCategoryData();
        getProducts();
        setUrlPathname("/katalog");
    }, []);

    return (
        <div>
            <PageComponent>
                <div className="w-full pt-28 md:pt-32 bg-blue-950 h-44">
                    <div className="relative h-full w-full">
                        <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                            <p className="md:font-medium font-light md:text-lg text-sm">
                                Katalog
                            </p>
                        </div>
                    </div>
                </div>
                {loading ? (
                    <div className="mx-auto max-w-7xl mt-8 px-8">
                        <div className="w-full bg-slate-300 rounded-lg shadow-md h-64 animate-pulse"></div>
                    </div>
                ) : (
                    <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                        <div className="flex flex-wrap md:mt-28 mt-10">
                            {category
                                ? category.map((cat, index) => (
                                      <div
                                          className="lg:w-1/2 w-full flex flex-row  md:h-36 h-20 px-2 md:mb-32 mb-16"
                                          key={index}
                                      >
                                          <div className="relative w-full bg-slate-300 rounded-md group hover:shadow-md transition-all ease-in-out duration-300 flex flex-row">
                                              <div className="absolute md:bottom-10 bottom-6 md:left-6 left-3 bg-white md:p-2 p-0.5 rounded-lg group-hover:bottom-8 md:group-hover:bottom-14 transition-all ease-in-out duration-300">
                                                  <img
                                                      src={
                                                          index == 0
                                                              ? promo1
                                                              : index == 1
                                                              ? promo2
                                                              : index == 2
                                                              ? promo3
                                                              : index == 3
                                                              ? promo4
                                                              : index == 4
                                                              ? promo5
                                                              : index == 5
                                                              ? promo6
                                                              : index == 6
                                                              ? promo7
                                                              : promo8
                                                      }
                                                      alt=""
                                                      className="md:w-[142px] md:h-[200px] w-[71px] h-[100px] rounded-md"
                                                  />
                                              </div>
                                              <div className="relative md:w-[182px] w-[99px]"></div>
                                              <div className="relative pl-2 md:pt-4 pt-1 h-full">
                                                  <h1 className="md:text-lg md:font-semibold text-sm font-medium text-blue-950">
                                                      Katalog {cat.katNama}
                                                  </h1>
                                              </div>
                                              <div className="absolute bottom-3 right-3 flex flex-row gap-2">
                                                  <button className="px-4 hidden md:flex py-1 text-white rounded-md shadow-md bg-blue-950 hover:bg-blue-900">
                                                      Lihat Katalog
                                                  </button>
                                                  <button className="px-4 hidden md:flex py-1 text-white rounded-md shadow-md bg-red-600 hover:bg-red-500">
                                                      Download Katalog
                                                  </button>
                                                  <button className="md:hidden flex px-2 py-1 text-white rounded-md shadow-md bg-blue-950 hover:bg-blue-900">
                                                      <EyeIcon className="h-3 w-3" />
                                                  </button>
                                                  <button className="md:hidden flex px-2 py-1 text-white rounded-md shadow-md bg-red-600 hover:bg-red-500">
                                                      <ArrowDownTrayIcon className="h-3 w-3" />
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  ))
                                : ""}
                        </div>
                    </div>
                )}
            </PageComponent>
        </div>
    );
}
