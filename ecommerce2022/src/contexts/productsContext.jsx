import { createContext, useState } from "react";
import PRODUCT_DATA from './products.json'


export const ProductsContext = createContext({
    products: [],
})


export const ProductsContextProvider = ({children}) => {

    const [ products,setProducts ] = useState(PRODUCT_DATA);
    const value = {products}
    
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}