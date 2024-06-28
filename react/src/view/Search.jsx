import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import { useParams } from "react-router-dom";
import PaginationLinks from "../components/PaginationLinks";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function Search() {
    const { setUrlPathname } = useStateContext();
    const { keyword } = useParams();
    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    const onPageClick = (link) => {
        getProducts(link.url);
        window.scrollTo(0, 0);
    };

    const { setOpenLogin, currentUser, setItemAmount, setCart } =
        useStateContext();

    const getProducts = (url) => {
        setLoading(true);
        url = url || `/productSearch/${keyword}`;
        axiosClient.get(url).then(({ data }) => {
            console.log(data);
            setProducts(data);
            setProductData(data.data);
            setLoading(false);
        });
    };

    const addToCart = (prod) => {
        if (currentUser.C_ID) {
            axiosClient
                .post("/cart", {
                    customer: currentUser.C_ID,
                    product: prod.prodId,
                    amount: 1,
                    price: prod.prodPrice2,
                })
                .then(({ data }) => {
                    // console.log(data);
                    setCartAmount();
                    getCartData();
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = Object.values(
                            error.response.data.errors
                        ).reduce((accum, next) => [...accum, ...next], []);
                    }
                });
        } else {
            setOpenLogin(true);
        }
    };

    const setCartAmount = () => {
        axiosClient.get("/cartAmount").then(({ data }) => {
            setItemAmount(data[0].cart_amount);
        });
    };

    const getCartData = () => {
        axiosClient.get("/cart").then(({ data }) => {
            // console.log(data[0].submenu);
            // setCartData(data.data);
            setCart(data.data);
        });
    };

    useEffect(() => {
        getProducts();
        setUrlPathname("/search");
    }, []);

    return (
        <div>
            <PageComponent>
                {/* Breadcrumb */}
                <div className="w-full pt-28 md:pt-32 bg-blue-950 h-44">
                    <div className="relative h-full w-full">
                        <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                            <p className="md:font-medium font-light md:text-lg text-sm">
                                Pencarian : {keyword}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                        <div className=""></div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {loading ? (
                    <div className="w-full mx-auto max-w-7xl md:mt-12 mt-8 px-8">
                        <div className="flex flex-col w-[320px] xs:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto mb-8">
                            <div className="flex flex-col items-center justify-end mb-4 w-full animate-pulse">
                                <div className="w-full flex items-end justify-end">
                                    <div className="h-3 bg-slate-200 rounded w-1/3 mb-1"></div>
                                </div>
                                <div className="w-full flex items-center justify-center mt-8">
                                    <div className="h-60 bg-slate-200 rounded w-full mb-1"></div>
                                </div>
                                <div className="w-full flex items-end justify-end mt-8">
                                    <div className="h-3 bg-slate-200 rounded w-1/3 mb-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full mx-auto max-w-7xl md:mt-12 mt-8 px-8">
                        <div className="flex flex-col w-[320px] xs:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto mb-8">
                            <div className="flex items-center justify-end w-full mb-4">
                                {products.total > 0 ? (
                                    <p className="font-semibold text-sm text-slate-500">
                                        Menampilkan {products.from} sampai{" "}
                                        {products.to} produk dari total{" "}
                                        {products.total} produk
                                    </p>
                                ) : (
                                    <p className="font-semibold text-sm text-slate-500">
                                        Tidak ada data untuk ditampilkan
                                    </p>
                                )}
                            </div>
                            <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-4 gap-x-2 mb-4">
                                {productData
                                    ? productData.map((prod, index) => (
                                          <div
                                              className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md lg:w-[153px] md:w-[136px] sm:w-[196px] w-[142px] group transition  bg-slate-200 "
                                              key={prod.prodId}
                                          >
                                              <a
                                                  href={`/product-detail/${prod.prodId}`}
                                              >
                                                  <div className="flex flex-col p-2">
                                                      <div className="rounded-md lg:h-[207px] md:h-[182px] sm:h-[192px] xs:h-[164px] h-[192px] bg-blue-400"></div>
                                                      <div className="pt-2">
                                                          <p className="font-normal leading-tight mb-2 capitalized text-sm line-clamp-3">
                                                              {prod.ProdDesc3}
                                                          </p>
                                                          <div className="absolute right-3 bottom-2">
                                                              <p className="font-medium text-slate-500 text-right text-xs">
                                                                  <FormatRupiah
                                                                      value={
                                                                          prod.prodPrice2
                                                                      }
                                                                  />
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                              <div
                                                  className="absolute hidden group-hover:block group-hover:-translate-x-9 bottom-[118px] bg-blue-950/70 hover:bg-blue-950 rounded-full h-7 w-7 -right-6 transition duration-700 ease-in-out cursor-pointer"
                                                  onClick={() =>
                                                      addToCart(prod)
                                                  }
                                              >
                                                  <div className="flex w-full h-full items-center justify-center">
                                                      <PlusIcon className="h-5 w-5 text-white" />
                                                  </div>
                                              </div>
                                          </div>
                                      ))
                                    : ""}
                            </div>
                            {products.total == 0 ? (
                                <div className="relative h-40">
                                    <div className="h-full w-full">
                                        <div className="flex items-center justify-center">
                                            <h1 className="text-slate-300 font-bold text-4xl">
                                                Tidak ada Produk
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="flex items-center justify-end w-full mb-4">
                                <PaginationLinks
                                    meta={products}
                                    onPageClick={onPageClick}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </PageComponent>
        </div>
    );
}
