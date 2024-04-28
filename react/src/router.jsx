import { createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import ProductDetail from "./view/ProductDetail";
import Category from "./view/Category";
import Signup from "./view/Signup";
import Login from "./view/Login";
import Search from "./view/Search";
import CaraBelanja from "./view/CaraBelanja";
import Katalog from "./view/Katalog";
import Promo from "./view/Promo";
import Cart from "./view/Cart";
import Checkout from "./view/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/promo",
        element: <Promo />,
    },
    {
        path: "/katalog",
        element: <Katalog />,
    },
    {
        path: "/cara-belanja",
        element: <CaraBelanja />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
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
        path: "/search/:keyword",
        element: <Search />,
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
