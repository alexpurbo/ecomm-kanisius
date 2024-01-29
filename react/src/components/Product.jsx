import React from "react";
import ProductList from "./ProductList";
import ProductListWithIcon from "./ProductListWithIcon";

export default function Product() {
    return (
        <div className="w-full mx-auto max-w-7xl mt-8">
            <div className="">
                <ProductList title="Produk Baru" />
                <ProductListWithIcon
                    title="Produk Pilihan"
                    color="bg-red-600"
                />
                <ProductList title="Benda Rohani" />
                <ProductListWithIcon
                    title="Benda Rohani Pilihan"
                    color="bg-blue-600"
                />
                <ProductListWithIcon title="Best Seller" color="bg-pink-600" />
            </div>
        </div>
    );
}
