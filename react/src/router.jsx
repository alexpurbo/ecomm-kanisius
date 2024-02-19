import { createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import ProductDetail from "./view/ProductDetail";
import Category from "./view/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product-detail/:id",
        element: <ProductDetail />,
    },
    {
        path: "/category",
        element: <Category />,
    },
]);

export default router;
