import { React , useContext } from 'react';
import { ProductsContext } from '../../contexts/productsContext'

const Products = () => {

  const { products }  = useContext(ProductsContext);
    console.log(products);
  return (
    <div>Products</div>
  )
}

export default Products