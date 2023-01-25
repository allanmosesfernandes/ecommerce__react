import React from 'react';
import './cart-preview.scss';
import ProductCard from '../product-card-component/product.card.component';


const CartPreview = ({title, products}) => {
  return (
    <div className='category-preview-container'>
        <h2>
            <span>{title.toUpperCase()}</span>
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