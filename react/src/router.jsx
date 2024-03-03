import { createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import ProductDetail from "./view/ProductDetail";
import Category from "./view/Category";
import Signup from "./view/Signup";
import Login from "./view/Login";

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
        path: "/category/:category",
        element: <Category />,
    },
    {
        path: "/category/:category/:subcategory",
        element: <Category />,
    },
    {
        path: "/category/:category/:subcategory/:subcategorydetail",
        element: <Category />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;
