import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CartDropdown from "../components/CartContainer/CartDropdown";






//== Add Item to Cart ==//
const addItemToCartHelperFn =(cartItems, productToAdd)  => {


//check if it already exists in cartItems

const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

// if product exists, increment quantity by 1 

if(existingCartItem) {
    return cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item)
}

// return cartItems with the product and quantity set to 1

/* first your cartItems starts with []
then you spread it [...cartItems] because you don't want to lose the existing items
with the new productToAdd but with an additional quantity of 1
which transaltes to [...cartItems, {...productToAdd, quantity: 1}]
[..products] */

return [...cartItems, {...productToAdd, quantity: 1}]
}

//== Remove Item from Cart or Qty Reducer ==//

const removeItemFromCartHelper = (cartItems, productToRemove) => {
    
//==Check if it already exists in cartItems

    const exactItem = cartItems.find(item => item.id === productToRemove.id);

    // check if qty is = 1, if yes it'll get filtered out

    if(exactItem.quantity === 1) {
        return cartItems.filter(item => item.id !== productToRemove.id)
    }

    // If quantity is > 1, decrease quantity 

    return cartItems.map(item => item.id === productToRemove.id ? {...item, quantity: item.quantity - 1} : item)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
})


export const CartContextProvider = ({children}) => {

    const [ isCartOpen,setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, currentValue) => acc + currentValue.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])
    //= Add Item to Cart ==//

    const addItemToCart = (productToAdd) => {
        setCartItems(addItemToCartHelperFn(cartItems, productToAdd));
    }

    //= Remove Item from Cart ==//

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeItemFromCartHelper(cartItems, productToRemove))
    }

    //== Exporting Context Values ==//
    const value = {isCartOpen,setIsCartOpen,cartItems, addItemToCart, removeItemFromCart,cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
