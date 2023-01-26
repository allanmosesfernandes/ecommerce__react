import React from 'react';
import './cart-preview.scss';
import ProductCard from '../product-card-component/product.card.component';
import { Link } from 'react-router-dom';


const CartPreview = ({title, products}) => {
  return (
    <div className='category-preview-container'>
        <h2>
            <span>

              {/* <Link to=linkURL /> */}
              <Link to={title}>{title.toUpperCase()} </Link>
              
            </span>
        </h2>
        <div className="preview">
            {
                products.filter((_,idx) => idx < 4)
                .map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    </div>
  )
}

export default CartPreview