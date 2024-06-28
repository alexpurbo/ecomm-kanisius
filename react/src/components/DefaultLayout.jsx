import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <div className="max-h-full">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
