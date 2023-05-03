import { createContext, useReducer } from "react";
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



const INITIAL_STATE = {
    isCartOpen: false,
    cartCount: 0,
    cartTotal: 0,
    cartItems: []
}
//== Reducer Init ===//
const CartReducer = (state, action) => {

    const {type, payload} = action;
    
    switch(type){

        case "SET_CART_ITEMS":
        return {
            ...state,
            ...payload
        }

        case "SET_CART_OPEN":
            return {
                ...state,
                isCartOpen: payload 
            }
        default:
            throw new Error("Unhandled type in CartReducer");
    }
}
///====== COMPONENT STARTS HERE ====///
export const CartContextProvider = ({children}) => {

    const [{cartCount,cartTotal,cartItems,isCartOpen}, dispatch ] = useReducer(CartReducer, INITIAL_STATE);
    //==== REDUCER UPDATER ===//
    /* 
    helps send updated payload to reducer 
    so no business logic inside the reducer
    */

    const updateCartReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((acc, currentValue) => acc + currentValue.quantity, 0);
        const newCartTotal = newCartItems.reduce((acc, currentValue) => acc + currentValue.quantity * currentValue.price,  0);

        dispatch({type: "SET_CART_ITEMS", payload: {
            cartCount: newCartCount,
            cartTotal: newCartTotal,
            cartItems: newCartItems
        }})
    /* 
    dispatch payload with shape of state = {
        newCartItems,
        newCartCount,
        newCartTotal
    }
    
    */
    }
    //= Add Item to Cart ==//

    const addItemToCart = (productToAdd) => {
        // setCartItems(addItemToCartHelperFn(cartItems, productToAdd));
        const newCartItems = addItemToCartHelperFn(cartItems, productToAdd);
        updateCartReducer(newCartItems);
    }

    //= Remove Item from Cart ==//

    const removeItemFromCart = (productToRemove) => {
        // setCartItems(removeItemFromCartHelper(cartItems, productToRemove))
        const newCartItems = removeItemFromCartHelper(cartItems, productToRemove);
        updateCartReducer(newCartItems);

    }

    //= Delete Item from Cart ==//

    const deleteItemFromCart = (item) => {
        // setCartItems(deleteItemFromCartHelper(cartItems, item))
        const newCartItems = deleteItemFromCartHelper(cartItems, item);
        updateCartReducer(newCartItems);

    }

    const setIsCartOpen = (bool) => {
        dispatch({type: "SET_CART_OPEN", payload: bool})
    }
    //== Exporting Context Values ==//
    const value = {isCartOpen,setIsCartOpen,cartItems, addItemToCart, removeItemFromCart,cartCount, deleteItemFromCart, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
