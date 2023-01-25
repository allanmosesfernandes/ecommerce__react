import { Fragment, React , useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../product-card-component/product.card.component'
import './products.scss'
const Products = () => {

 const { categoriesMap }  = useContext(CategoriesContext);
  
  return (
 
      <>
      {
        Object.keys(categoriesMap)
        .map(category => <Fragment key={category}>
          <h2>{category}</h2>
          <div className='product-container'>
            {
              categoriesMap[category].map(product => {
                return <ProductCard key={product.id} product={product} />
              })
            }
          </div>
        </Fragment>)
      }
    
    </>
  )
}

export default Products