import React,{useContext} from 'react';
import classes from '../UI/Navbar.module.css';
import CartButton from './CartButton';
import { FaShoppingCart } from 'react-icons/fa'
import Context from '../store/cart-context';

const Navbar = (props) => {

  const cartCtx = useContext(Context);
  const amount = cartCtx.items.length;

  const openCart = () => {
    props.viewCart();
  }

  return <div className={classes.navbar}>
    <p>{props.title}</p>
    <button onClick={openCart}><FaShoppingCart style={{margin:'0px 5%', height:'1em', padding:'0px'}}/>Your Order<div>{amount}</div></button>
  </div>;
};

export default Navbar;
