import { React , useContext } from 'react';
import { ProductsContext } from '../../contexts/productsContext';
import ProductCard from '../product-card-component/product.card.component'
import './products.scss'
const Products = () => {

  const { products }  = useContext(ProductsContext);
  
  return (
    <div className='product-container'>
      {
        products.map(product => {
          return <ProductCard key={product.id} product={product}/>
        })
      }
   
    </div>
  )
}

export default Products