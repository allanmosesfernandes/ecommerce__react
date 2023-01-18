import { createContext } from "react";
import { useState } from "react";


const addItemToCartHelperFn =(cartItems, productToAdd)  => {


//check if it already exists in cartItems

const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

// if product exists, increment quantity by 1 

if(existingCartItem) {
    return cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : {item})
}

// return cartItems with the product and quantity set to 1

/* first your cartItems starts with []
then you spread it [...cartItems] because you don't want to lose the existing items
with the new productToAdd but with an additional quantity of 1
which transaltes to [...cartItems, {...productToAdd, quantity: 1}]
[..products] */

return [...cartItems, {...productToAdd, quantity: 1}]
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
