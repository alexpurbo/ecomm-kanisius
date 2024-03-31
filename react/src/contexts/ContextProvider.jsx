import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
    categorys: [],
    usertoken: null,
    cart: [],
    openLogin: false,
    categoryData: [],
    categorySelected: null,
    openLogoutModal: false,
    toast: {
        message: null,
        show: true,
    },
    setCurrentUser: () => {},
    setUserToken: () => {},
    setCart: () => {},
    setOpenLogin: () => {},
    openCartModal: false,
    setOpenCartModal: () => {},
    setCategoryData: () => {},
    setCategorySelected: () => {},
    setOpenLogoutModal: () => {},
});

const tmpCategory = [
    {
        id: 1,
        category_name: "Buku Umum",
        category_details: [
            {
                id: 1,
                detail: "Referensi Hukum",
                subCategory: [],
            },
            {
                id: 2,
                detail: "Referensi Pendidikan",
                subCategory: [],
            },
            {
                id: 3,
                detail: "Seni",
                subCategory: [],
            },
            {
                id: 4,
                detail: "Sejarah",
                subCategory: [],
            },
            {
                id: 5,
                detail: "Refefensi Teknik Sipil",
                subCategory: [],
            },
            {
                id: 6,
                detail: "Kebudayaan",
                subCategory: [],
            },
            {
                id: 7,
                detail: "Referensi Akuntansi",
                subCategory: [],
            },
            {
                id: 8,
                detail: "Etika",
                subCategory: [],
            },
            {
                id: 9,
                detail: "Penanggalan",
                subCategory: [],
            },
        ],
    },
    {
        id: 2,
        category_name: "Buku Grejawi",
        category_details: [
            {
                id: 10,
                detail: "Formulir/Adm Paroki",
                subCategory: [],
            },
            {
                id: 11,
                detail: "Pastoral",
                subCategory: [],
            },
            {
                id: 12,
                detail: "Bacaan Rohani",
                subCategory: [],
            },
            {
                id: 13,
                detail: "Spiritualitas",
                subCategory: [],
            },
            {
                id: 14,
                detail: "Teologi",
                subCategory: [],
            },
            {
                id: 15,
                detail: "Doa",
                subCategory: [],
            },
            {
                id: 16,
                detail: "Katekese",
                subCategory: [],
            },
            {
                id: 17,
                detail: "Filsafat",
                subCategory: [],
            },
            {
                id: 18,
                detail: "Liturgi",
                subCategory: [],
            },
            {
                id: 19,
                detail: "Kitab Suci",
                subCategory: [],
            },
            {
                id: 20,
                detail: "Ajaran Gereja",
                subCategory: [],
            },
            {
                id: 21,
                detail: "Renungan",
                subCategory: [],
            },
        ],
    },
    {
        id: 3,
        category_name: "Buku Anak",
        category_details: [
            {
                id: 22,
                detail: "Buku Anak Umum",
                subCategory: [],
            },
        ],
    },
    {
        id: 4,
        category_name: "Buku Pelajaran",
        category_details: [
            {
                id: 23,
                detail: "Agama",
                subCategory: [
                    {
                        id: 1,
                        subCategoryName: "SD",
                    },
                    {
                        id: 2,
                        subCategoryName: "SMP",
                    },
                    {
                        id: 3,
                        subCategoryName: "SMA-SMK",
                    },
                ],
            },
            {
                id: 24,
                detail: "Pendidikan Karakter",
                subCategory: [
                    {
                        id: 4,
                        subCategoryName: "TK-PAUD",
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        category_name: "Buku Perkuliahan",
        category_details: [
            {
                id: 25,
                detail: "Mata Kuliah Umum",
                subCategory: [],
            },
            {
                id: 26,
                detail: "Hukum",
                subCategory: [],
            },
            {
                id: 27,
                detail: "Bahasa",
                subCategory: [],
            },
            {
                id: 28,
                detail: "DKV",
                subCategory: [],
            },
        ],
    },
    {
        id: 6,
        category_name: "Benda Rohani",
        category_details: [
            {
                id: 29,
                detail: "Dokumen Gereja",
                subCategory: [],
            },
            {
                id: 30,
                detail: "Ajaran Gereja",
                subCategory: [],
            },
            {
                id: 31,
                detail: "Alkitab",
                subCategory: [],
            },
            {
                id: 32,
                detail: "Buku Liturgi dan Ibadat",
                subCategory: [],
            },
            {
                id: 33,
                detail: "Buku Referensi",
                subCategory: [],
            },
            {
                id: 34,
                detail: "Hampers Rohani",
                subCategory: [],
            },
            {
                id: 35,
                detail: "Lilin dan Tempat lilin",
                subCategory: [],
            },
            {
                id: 36,
                detail: "Pakaian Rohani",
                subCategory: [],
            },
            {
                id: 37,
                detail: "Paket Wedding",
                subCategory: [],
            },
            {
                id: 38,
                detail: "Patung",
                subCategory: [],
            },
            {
                id: 39,
                detail: "Rosario",
                subCategory: [],
            },
            {
                id: 40,
                detail: "Salib",
                subCategory: [],
            },
        ],
    },
    {
        id: 7,
        category_name: "Perlengkapan Liturgi dan Ibadat",
        category_details: [
            {
                id: 41,
                detail: "Pakaian Liturgi",
                subCategory: [],
            },
            {
                id: 42,
                detail: "Peralatan Misa dan Ibadat",
                subCategory: [],
            },
        ],
    },
    {
        id: 8,
        category_name: "Perlengkapan Sekolah & Kantor",
        category_details: [
            {
                id: 43,
                detail: "Tas",
                subCategory: [],
            },
        ],
    },
];

export const ContextProvider = ({ children }) => {
    const [categorys, setCategorys] = useState(tmpCategory);
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(
        localStorage.getItem("TOKEN") || ""
    );
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);

    const [total, setTotal] = useState(0);
    const [openLogin, setOpenLogin] = useState(false);
    const [openCartModal, setOpenCartModal] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [categorySelected, _setCategorySelected] = useState();
    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    const [toast, setToast] = useState({ message: "", show: false });

    const showToast = (message) => {
        setToast({ message, show: true });
        setTimeout(() => {
            setToast({ message: "", show: false });
        }, 3000);
    };

    const closeToast = () => {
        setToast({ message: "", show: false });
    };

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN");
        }
        _setUserToken(token);
    };

    const setCategorySelected = (categoryId) => {
        if (categoryId) {
            sessionStorage.setItem("CatSelected", categoryId);
        } else {
            sessionStorage.removeItem("CatSelected");
        }
        _setCategorySelected(categoryId);
    };

    return (
        <StateContext.Provider
            value={{
                categorys,
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
                cart,
                setCart,
                openLogin,
                setOpenLogin,
                itemAmount,
                setItemAmount,
                openCartModal,
                setOpenCartModal,
                categoryData,
                setCategoryData,
                categorySelected,
                setCategorySelected,
                openLogoutModal,
                setOpenLogoutModal,
                toast,
                showToast,
                closeToast,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
