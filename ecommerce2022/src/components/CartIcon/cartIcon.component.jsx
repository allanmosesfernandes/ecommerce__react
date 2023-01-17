import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>100</span>

    </div>
    
  )
}

export default CartIcon