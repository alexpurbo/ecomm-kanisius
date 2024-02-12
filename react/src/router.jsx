import { createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import ProductDetail from "./view/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product-detail/:id",
        element: <ProductDetail />,
    },
]);

export default router;
