import React from 'react';
import './cart-container.styles.scss';
import Button from '../Button/button-component'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items"></div>
      <Button>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown