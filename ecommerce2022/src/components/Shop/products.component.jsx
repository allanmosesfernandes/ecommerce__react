import { Fragment, React , useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../product-card-component/product.card.component'
import './products.scss';
import CartPreview from '../CartPreviewComponent/CartPreview.component';
const Products = () => {

 const { categoriesMap }  = useContext(CategoriesContext);
  
  return (
 
      <>
      {
        Object.keys(categoriesMap)
        .map(category => <Fragment key={category}>
          <CartPreview title={category} products={categoriesMap[category]} />
        </Fragment>)
      }
    
    </>
  )
}

export default Products