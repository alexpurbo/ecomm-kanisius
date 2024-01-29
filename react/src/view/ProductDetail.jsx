import { useEffect, useState } from "react";
import axiosClient from "../axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductList from "../components/ProductList";
import ProductDetailData from "../components/ProductDetailData";

export default function ProductDetail() {
    const [kelKategori, setKelKategori] = useState([]);

    const getKelKategori = () => {
        axiosClient.get("/testQuery").then(({ data }) => {
            console.log(data);
            setKelKategori(data.data);
            console.log(kelKategori);
        });
    };

    useEffect(() => {
        getKelKategori();
    }, []);

    return (
        <div>
            <Header />
            <Breadcrumbs />
            <ProductDetailData />
            <ProductList title="Produk Baru" />
            <ProductList title="Produk Pilihan" />
            <Footer />
        </div>
    );
}
