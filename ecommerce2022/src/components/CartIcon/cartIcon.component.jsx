import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';




const CartIcon = () => {

    const cartToggler = () => setIsCartOpen(!isCartOpen)
    const {isCartOpen, setIsCartOpen, cartItems, cartCount} = useContext(CartContext);

  return (
    <div className="cart-icon-container" onClick={cartToggler}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
    
  )
}

export default CartIcon