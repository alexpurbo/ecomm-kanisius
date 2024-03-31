import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Toast from "./Toast";

export default function PageComponent({ children }) {
    return (
        <>
            <Header />
            <Toast />
            <main>{children}</main>
            <Footer />
        </>
    );
}
