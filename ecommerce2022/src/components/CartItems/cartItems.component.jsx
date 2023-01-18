import React from 'react';
import './cartItems.style.scss';

const CartItems = ({cartItems}) => {

  const { name, quantity, imageUrl, price } = cartItems;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>

    </div>
  )
}

export default CartItems