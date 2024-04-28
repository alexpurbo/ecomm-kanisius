import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import Breadcrumbs from "../components/Breadcrumbs";
import axiosClient from "../axios";
import { FormatRupiah } from "@arismun/format-rupiah";
import PaginationLinks from "../components/PaginationLinks";

export default function Katalog() {
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState("01");
    const [productKatalog, setProductKatalog] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

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
                <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                    <div className="w-full bg-slate-300 md:p-8 p-3">
                        <select
                            name="categoryName"
                            id="categoryName"
                            defaultValue={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            className="w-full md:px-6 md:py-4 px-3 py-2 font-medium rounded-md border-blue-950 border-2"
                        >
                            {category.map((cat, index) => (
                                <option
                                    value={cat.katID.substring(0, 2)}
                                    key={index}
                                >
                                    {cat.katNama}
                                </option>
                            ))}
                        </select>
                        {/* {categoryId} */}
                    </div>
                    {loading ? (
                        <div className="w-full mt-6 bg-white grid md:grid-cols-2 grid-cols-1 gap-4 animate-pulse">
                            <div className="relative w-full border bg-slate-300 h-28"></div>
                            <div className="relative w-full border bg-slate-300 h-28"></div>
                            <div className="relative w-full border bg-slate-300 h-28"></div>
                            <div className="relative w-full border bg-slate-300 h-28"></div>
                        </div>
                    ) : (
                        <div className="w-full mt-6 bg-white grid md:grid-cols-2 grid-cols-1 gap-4">
                            {productKatalog
                                ? productKatalog.map((prod, index) => (
                                      <div
                                          className="relative w-full border border-blue-950 shadow-md"
                                          key={index}
                                      >
                                          <div className="px-4 md:px-2 lg:px-4 py-2 flex flex-row">
                                              <div className="w-1/5">
                                                  <div className="lg:h-24 lg:w-24 md:h-16 md:w-16 h-12 w-12 rounded-full bg-blue-950"></div>
                                              </div>
                                              <div className="relative w-4/5 h-full flex flex-col md:pl-2 pl-0 lg:pl-0">
                                                  <p className="lg:font-medium md:font-normal lg:text-base font-extralight text-sm text-blue-950 leading-tight mb-1.5">
                                                      {prod.ProdDesc3.length >
                                                      55
                                                          ? `${prod.ProdDesc3.substring(
                                                                0,
                                                                55
                                                            )}...`
                                                          : prod.ProdDesc3}
                                                  </p>
                                                  <p className="text-sm leading-tight text-slate-600 hidden lg:block">
                                                      {prod.prodKet.length > 130
                                                          ? `${prod.prodKet.substring(
                                                                0,
                                                                130
                                                            )}...`
                                                          : prod.prodKet}
                                                  </p>
                                              </div>
                                          </div>
                                          <div className="absolute right-1 bottom-0 w-3/4">
                                              <div className="flex flex-row justify-end lg:font-medium font-light md:text-slate-500 text-slate-900 lg:text-sm text-xs">
                                                  <p>
                                                      {prod.nmPengarang
                                                          ? prod.nmPengarang
                                                                .length > 25
                                                              ? `${prod.nmPengarang.substring(
                                                                    0,
                                                                    25
                                                                )}...`
                                                              : prod.nmPengarang
                                                          : "-"}
                                                  </p>
                                                  <span> | </span>
                                                  <FormatRupiah
                                                      value={prod.prodPrice2}
                                                  />
                                              </div>
                                          </div>
                                      </div>
                                  ))
                                : ""}
                        </div>
                    )}
                    <div className="flex items-center justify-end w-full mb-4">
                        <PaginationLinks
                            meta={products}
                            onPageClick={onPageClick}
                        />
                    </div>
                </div>
            </PageComponent>
        </div>
    );
}
