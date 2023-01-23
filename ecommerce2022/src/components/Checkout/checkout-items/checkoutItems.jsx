import React from 'react';
import './checkout-items.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../../contexts/cartContext';


const CheckoutItems = ({item}) => {

  const {cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext);

  const increaseCartQty = (item) => {
    addItemToCart(item);
  }

  const decreaseQty = (item) => {
    removeItemFromCart(item);
  }

  const deleteItem = (item) => {
    console.log(item);
    deleteItemFromCart(item);
  }

  const { name, quantity, imageUrl, price } = item;

  return ( 
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`$(name)`} />
      </div>
      
      <span className="name">{name}</span>
      <button onClick={() => decreaseQty(item)}>-</button>
      <span className="quantity">{quantity}</span>
      {/* <button onClick={() => increaseCartQty(item)}>+</button> */}
      <span className="price">{price}</span>
      <button className="remove" onClick={() => deleteItem(item)}>&#10005;</button>
    </div>
  )
}

export default CheckoutItems