import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/CategoriesContext';
import CartPreview from '../../components/CartPreviewComponent/CartPreview.component';
import { useContext, useState, useEffect } from 'react';
import ProductCard from '../../components/product-card-component/product.card.component';
const Category = () => {
    const {category} = useParams();
    console.log(category);
    const { categoriesMap }  = useContext(CategoriesContext);
    console.log(categoriesMap)
    const [products, setProducts] = useState( [] );
    
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
  return (
        <div className='category-container'>
           {
            products && 

            products.map(product => <ProductCard key={product.id} product={product} />)
           }
        </div>
  )
}

export default Category