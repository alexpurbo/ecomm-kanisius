import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import CategoryDetail from "../components/CategoryDetail";
import PageComponent from "../components/PageComponent";

export default function Category() {
    return (
        <div>
            <PageComponent>
                {/* <Header /> */}
                {/* <Breadcrumbs /> */}
                <CategoryDetail />
                {/* <Footer /> */}
            </PageComponent>
        </div>
    );
}
