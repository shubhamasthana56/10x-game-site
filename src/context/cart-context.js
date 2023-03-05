import React, { useState } from "react";
//Provider
//Consumer

const CartContext = React.createContext();

const CartProvider = (props)=> {
    const [cartData, setCartData] = useState([]);
    const addCartData = (data)=> {
        setCartData([...cartData, data]);
    }
    const removeCartData = ()=> {

    }
    return (
        <CartContext.Provider value={{cartData, addCartData}}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartContext, CartProvider};