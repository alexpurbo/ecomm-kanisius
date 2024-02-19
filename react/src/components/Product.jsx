import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductListWithIcon from "./ProductListWithIcon";
import axiosClient from "../axios";
import ProductListLoading from "./ProductListLoading";

export default function Product() {
    const [newProducts, setNewProducts] = useState([]);
    const [produkPilihan, setProdukPilihan] = useState([]);
    const [bendaRohani, setBendaRohani] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    const [bestSellerPilihan, setBestSellerPilihan] = useState([]);

    const getNewProduct = () => {
        axiosClient.get("/new-products").then(({ data }) => {
            // console.log(data);
            // debugger;
            setNewProducts(data);
        });
    };

    const getProdukPilihan = () => {
        axiosClient.get("/produk-pilihan").then(({ data }) => {
            setProdukPilihan(data);
        });
    };

    const getSpiritualProduct = () => {
        axiosClient.get("/benda-rohani").then(({ data }) => {
            setBendaRohani(data);
        });
    };

    useEffect(() => {
        getNewProduct();
        getSpiritualProduct();
        getProdukPilihan();
    }, []);

    // console.log(newProducts);

    return (
        <div className="w-full mx-auto max-w-7xl mt-8">
            <div className="">
                <ProductList title="Produk Baru" dataProducts={newProducts} />
                <ProductListWithIcon
                    title="Produk Pilihan"
                    color="bg-red-600"
                    products={produkPilihan}
                />
                <ProductList title="Benda Rohani" dataProducts={bendaRohani} />
                <ProductListWithIcon
                    title="Benda Rohani Pilihan"
                    color="bg-blue-600"
                    products={produkPilihan}
                />
                <ProductListWithIcon
                    title="Best Seller"
                    color="bg-pink-600"
                    products={produkPilihan}
                />
            </div>
        </div>
    );
}
