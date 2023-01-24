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


//== Delete Item from Cart ==//

const deleteItemFromCartHelper = (cartItems, item) => {
    return cartItems.filter(cartItem => cartItem.id !== item.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
    deleteItemFromCart: () => {}
})


export const CartContextProvider = ({children}) => {

    const [ isCartOpen,setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);

    //== Setting Cart Quantity Counter ===//
    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, currentValue) => acc + currentValue.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    //== Setting Cart Total Counter ===//
    useEffect(() => {
        const newCartTotal = cartItems.reduce((acc, currentValue) => acc + currentValue.quantity * currentValue.price,  0);
        setCartTotal(newCartTotal);
    }, [cartItems])



    //= Add Item to Cart ==//

    const addItemToCart = (productToAdd) => {
        setCartItems(addItemToCartHelperFn(cartItems, productToAdd));
    }

    //= Remove Item from Cart ==//

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeItemFromCartHelper(cartItems, productToRemove))
    }

    //= Delete Item from Cart ==//

    const deleteItemFromCart = (item) => {
        setCartItems(deleteItemFromCartHelper(cartItems, item))
    }

    //== Exporting Context Values ==//
    const value = {isCartOpen,setIsCartOpen,cartItems, addItemToCart, removeItemFromCart,cartCount, deleteItemFromCart, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
