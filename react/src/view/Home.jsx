import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Feet from "../components/Feet";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Product />
            <Feet />
            <Testimonials />
            <Footer />
        </div>
    );
}
