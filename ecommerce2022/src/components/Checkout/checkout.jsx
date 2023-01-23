import React from 'react';
import "./checkout.styles.scss";
import { CartContext } from '../../contexts/cartContext';
import { useContext } from 'react';
import CheckoutItems from './checkout-items/checkoutItems';

const Checkout = () => {
      const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext);

      const increaseCartQty = (item) => {
        addItemToCart(item);
      }

      const decreaseQty = (item) => {
        removeItemFromCart(item);
      }

    console.log(cartItems)
  return (
    <div className='checkout-container'>
        <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>
        </div>
        {
            cartItems.map(item => <CheckoutItems key={item.id} item={item} />)
        }

        <span className='total'>Total : </span>
    </div>
  )
}

export default Checkout