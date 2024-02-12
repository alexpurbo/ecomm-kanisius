import { useEffect, useState } from "react";
import axiosClient from "../axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductList from "../components/ProductList";
import ProductDetailData from "../components/ProductDetailData";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const [kelKategori, setKelKategori] = useState([]);
    const { id } = useParams();
    const [newProducts, setNewProducts] = useState([]);
    const [bendaRohani, setBendaRohani] = useState([]);
    const [product, setProduct] = useState({});

    const getNewProduct = () => {
        axiosClient.get("/new-products").then(({ data }) => {
            // console.log(data);
            // debugger;
            setNewProducts(data);
        });
    };

    const getSpiritualProduct = () => {
        axiosClient.get("/benda-rohani").then(({ data }) => {
            setBendaRohani(data);
        });
    };

    // const getDataProduct = () => {
    //     axiosClient.get(`product/${id}`).then(({ data }) => {
    //         // debugger;
    //         setProduct(data.data);
    //         // console.log(data);
    //     });
    // };

    useEffect(() => {
        getNewProduct();
        getSpiritualProduct();
        // getDataProduct();
        // console.log(id);
    }, []);

    // console.log(product);
    return (
        <div>
            <Header />
            <Breadcrumbs />
            <ProductDetailData id={id} />
            <ProductList title="Produk Baru" dataProducts={newProducts} />
            <ProductList title="Produk Pilihan" dataProducts={newProducts} />
            <Footer />
        </div>
    );
}
