import { useEffect } from "react";
import { createContext, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import PRODUCT_DATA from './products.json'
import SHOP_DATA from './shop-data.js'


console.log(SHOP_DATA)
export const ProductsContext = createContext({
    products: [],
})


export const ProductsContextProvider = ({children}) => {

    const [ products,setProducts ] = useState([]);

    useEffect(() => {
        const getCatDoc = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }

        getCatDoc();
    },[])
    const value = {products}
    
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}