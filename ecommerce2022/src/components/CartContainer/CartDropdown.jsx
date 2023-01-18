import React from 'react';
import './cart-container.styles.scss';
import Button from '../Button/button-component'
import CartItems from '../CartItems/cartItems.component';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        {/* <CartItems cartItems={} /> */}
      {/* [].map(item => <CartItems cartItems={item}/>)   */}
      </div>
      <Button>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown