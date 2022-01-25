import React from 'react';
import BackShadow from './BackShadow';
import ReactDom from 'react-dom';
import Modal from './Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    return <div className={classes.cart}>
        {ReactDom.createPortal(<BackShadow showCart={props.hideCart}/>, document.getElementById("popupCard"))}
        {ReactDom.createPortal(<Modal showCart={props.showCart}/>, document.getElementById('popupCard'))}
    </div>;
};

export default Cart;
