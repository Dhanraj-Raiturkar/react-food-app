import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import classes from './CartButton.module.css'

const CartButton = () => {
  return <button className={classes.CartButton}>
      Your Cart
  </button>

};

export default CartButton;
