import React from 'react';
import './cart-container-styles.jsx';
import Button from '../Button/button-component'
import CartItems from '../CartItems/cartItems.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer,
EmptyMessage,CartItemDiv} from './cart-container-styles.jsx';
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

  return (
    <CartDropDownContainer>
      <CartItemDiv>
        {
          cartItems.length ? (
            cartItems.map((item,index) => {return <CartItems key={index} cartItems={item}/>})
          ): (<EmptyMessage>Your cart is empty!</EmptyMessage>)
        }

      </CartItemDiv>
      <Button onClick={goToNavigate} >Go to checkout</Button>
    </CartDropDownContainer>
  )
}

export default CartDropdown