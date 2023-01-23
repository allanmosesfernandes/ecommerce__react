import React from 'react';
import './cart-container.styles.scss';
import Button from '../Button/button-component'
import CartItems from '../CartItems/cartItems.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  //==navigation==//
  const navigate = useNavigate();
  const goToNavigate = () => {
    navigate('/checkout')
    setIsCartOpen(!isCartOpen)

  };

  const {cartItems} = useContext(CartContext);
  
  //==Toggling Cart Open State ===//

  const {isCartOpen, setIsCartOpen} = useContext(CartContext);

  console.log(cartItems);
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
      { cartItems.map((item,index) => {return <CartItems key={index} cartItems={item}/>})}
      </div>
      <Button onClick={goToNavigate} >Go to checkout</Button>
    </div>
  )
}

export default CartDropdown