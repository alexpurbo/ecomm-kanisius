import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    openCartModal: false,
    setOpenCartModal: () => {},
});

export const ContextCart = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [loginMassage, setLoginMassage] = useState(null);
    const [openCartModal, setOpenCartModal] = useState(false);

    return (
        <StateContext.Provider
            value={{
                openCartModal,
                setOpenCartModal,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateCartContext = () => useContext(StateContext);
