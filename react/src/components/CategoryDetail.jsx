import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import axiosClient from "../axios";
import PaginationLinks from "./PaginationLinks";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function CategoryDetail() {
    const { categorySelected } = useStateContext();

    // console.log(category);

    const { category, subcategory, subcategorydetail } = useParams();
    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState([]);

    const onPageClick = (link) => {
        getProducts(link.url);
    };

    const getProducts = (url) => {
        url =
            url ||
            `/getProductByCategory/${sessionStorage.getItem("CatSelected")}`;
        axiosClient.get(url).then(({ data }) => {
            // console.log(data.data);
            setProducts(data);
            setProductData(data.data);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="w-full pt-28 md:pt-32 bg-blue-950 h-44">
                <div className="relative h-full w-full">
                    <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                        <p className="md:font-medium font-light md:text-lg text-sm">
                            <span className="md:font-bold font-semibold">
                                Kategori :
                            </span>{" "}
                            {category ? (
                                <a href={`/category/${category}`}>
                                    {category
                                        .replace(/-/g, " ")
                                        .split(" ")
                                        .map(
                                            (nama) =>
                                                nama.charAt(0).toUpperCase() +
                                                nama.slice(1)
                                        )
                                        .join(" ")}
                                </a>
                            ) : (
                                ""
                            )}{" "}
                            {subcategory ? "/ " : ""}
                            {subcategory ? (
                                <a
                                    href={`/category/${category}/${subcategory}`}
                                >
                                    {subcategory
                                        .replace(/-/g, " ")
                                        .split(" ")
                                        .map(
                                            (nama) =>
                                                nama.charAt(0).toUpperCase() +
                                                nama.slice(1)
                                        )
                                        .join(" ")}
                                </a>
                            ) : (
                                ""
                            )}{" "}
                            {subcategorydetail ? "/ " : ""}
                            {subcategorydetail ? (
                                <a
                                    href={`/category/${category}/${subcategory}/${subcategorydetail}`}
                                >
                                    {subcategorydetail
                                        .replace(/-/g, " ")
                                        .split(" ")
                                        .map(
                                            (nama) =>
                                                nama.charAt(0).toUpperCase() +
                                                nama.slice(1)
                                        )
                                        .join(" ")}
                                </a>
                            ) : (
                                ""
                            )}
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                    <div className=""></div>
                </div>
            </div>
            <div className="w-full mx-auto max-w-7xl md:mt-12 mt-8 px-8">
                <div className="flex flex-col w-[320px] xs:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto mb-8">
                    <div className="flex items-center justify-end w-full mb-4">
                        <p className="font-semibold text-sm text-slate-500">
                            Menampilkan {products.from} sampai {products.to}{" "}
                            produk dari total {products.total} produk
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-4 gap-x-2 mb-4">
                        {productData
                            ? productData.map((prod, index) => (
                                  <div
                                      className="relative h-[310px] xs:h-[275px] sm:h-[310px] md:h-[295px] lg:h-[330px] border border-slate-200 rounded-lg shadow-md lg:w-[153px] md:w-[136px] sm:w-[196px] w-[142px] group transition  bg-slate-200 "
                                      key={prod.prodId}
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
                                  </div>
                              ))
                            : ""}
                    </div>
                    <div className="flex items-center justify-end w-full mb-4">
                        <PaginationLinks
                            meta={products}
                            onPageClick={onPageClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
