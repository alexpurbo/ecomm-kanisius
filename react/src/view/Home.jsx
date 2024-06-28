import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Feet from "../components/Feet";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";

export default function Home() {
    const { setUrlPathname } = useStateContext();

    useEffect(() => {
        setUrlPathname("/");
    }, []);

    return (
        <div>
            <PageComponent>
                {/* <Header /> */}
                <Hero />
                <Product />
                <Feet />
                <Testimonials />
                {/* <Footer /> */}
            </PageComponent>
        </div>
    );
}
