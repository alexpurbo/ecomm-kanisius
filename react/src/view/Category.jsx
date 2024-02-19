import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import CategoryDetail from "../components/CategoryDetail";

export default function Category() {
    return (
        <div>
            <Header />
            <Breadcrumbs />
            <CategoryDetail />
            <Footer />
        </div>
    );
}
