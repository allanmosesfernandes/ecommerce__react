import React from 'react'

const CartItems = ({cartItems}) => {

    const {name, quantity} = cartItems;

  return (
    <div className='cart-items-container'>
        <h2>{name}</h2>
        <span>{quantity}</span>
    </div>
  )
}

export default CartItems