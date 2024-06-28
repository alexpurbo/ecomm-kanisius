import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Toast from "./Toast";
import ProductAddToast from "./ProductAddToast";

export default function PageComponent({ children }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="scroll-smooth">
            {/* <Header /> */}
            <Toast />
            <ProductAddToast />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
}
