import React from 'react';
import "./checkout.styles.scss";
import { CartContext } from '../../contexts/cartContext';
import { useContext } from 'react';


const Checkout = () => {
      const {cartItems, addItemToCart} = useContext(CartContext);

      const increaseCartQty = (item) => {
        addItemToCart(item);
      }
    console.log(cartItems)
  return (
    <div className='checkout-item-box'>
       
        {
            cartItems.map(item => {
                  const { name, quantity, imageUrl, price } = item;
                return <div key={item.id} className="checkout-item">
                        <h2>{name}</h2>
                        <button>-</button>
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