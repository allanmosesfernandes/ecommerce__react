import React from 'react';
import "./checkout.styles.scss";
import { CartContext } from '../../contexts/cartContext';
import { useContext } from 'react';


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
    <div className='checkout-item-box'>
       
        {
            cartItems.map(item => {
                  const { name, quantity, imageUrl, price } = item;
                return <div key={item.id} className="checkout-item">
                        <h2>{name}</h2>
                        <button onClick={() => decreaseQty(item)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => increaseCartQty(item)}>+</button>
                        <p>{price}</p>
                    </div>
            })
        }
    </div>
  )
}

export default Checkout