import { createContext } from "react";
import { useState } from "react";


const addItemToCartHelperFn =(cartItems, productToAdd)  => {
//check if it already exists in cartItems



// if it does exists, increase quantity by 1
 


// return cartItems with the product and quantity set to 1

return [{...cartItems, ...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
})


export const CartContextProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addItemToCartHelperFn(cartItems, productToAdd));
    }
    const value = {isCartOpen,setIsCartOpen,cartItems, addItemToCart};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
