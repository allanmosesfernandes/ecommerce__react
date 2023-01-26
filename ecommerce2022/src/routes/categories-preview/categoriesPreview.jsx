import { Fragment, React , useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';

import CartPreview from '../../components/CartPreviewComponent/CartPreview.component';


const CategoriesPreview = () => {
 const { categoriesMap }  = useContext(CategoriesContext);


  return (
 
      <div className='category-preview-container'>
      {
        Object.keys(categoriesMap)
        .map(category => <Fragment key={category}>
          <CartPreview title={category} products={categoriesMap[category]} />
        </Fragment>)
      }
    
    </div>
  )
}

export default CategoriesPreview