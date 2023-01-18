import React from 'react';
import './cart-container.styles.scss';
import Button from '../Button/button-component'
import CartItems from '../CartItems/cartItems.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';



const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
      { cartItems.map((item,index) => {return <CartItems key={index} cartItems={item}/>})}
      </div>
      <Button>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown