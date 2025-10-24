import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exist = (id) => {
        const exist = cart.some(prod => prod.id === id);
        return exist;
    };

    const addItem = (item) => {
        if(exist(item.id)) {
            alert("The product is already in the cart");
            return;
        }

        setCart([...cart, item]);
         alert(`${item.name} added to cart`);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        if(cart.length){
            return cart.length;
        }
        return 0;
    }

    const values = {
        cart, addItem, clearCart, getTotalItems
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}