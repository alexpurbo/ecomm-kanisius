import { useEffect, useState } from "react";
import axiosClient from "../axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductList from "../components/ProductList";
import ProductDetailData from "../components/ProductDetailData";
import { useParams } from "react-router-dom";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";

export default function ProductDetail() {
    const { setUrlPathname } = useStateContext();
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
        setUrlPathname("product-detail");
        // getDataProduct();
        // console.log(id);
    }, []);

    // console.log(product);
    return (
        <div>
            <PageComponent>
                {/* <Header /> */}
                <Breadcrumbs />
                <ProductDetailData id={id} />
                <div className="w-full mx-auto max-w-7xl mt-8">
                    <ProductList
                        title="Produk Baru"
                        dataProducts={newProducts}
                    />
                    <ProductList
                        title="Produk Pilihan"
                        dataProducts={newProducts}
                    />
                </div>

                {/* <Footer /> */}
            </PageComponent>
        </div>
    );
}
