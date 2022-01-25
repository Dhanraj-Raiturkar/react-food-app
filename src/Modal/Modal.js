import React,{useContext} from 'react';
import classes from './Modal.module.css';
import CartItem from './CartItem';
import Context from '../store/cart-context';

const Modal = (props) => {

    const cartCtx = useContext(Context);

    const closeCartHandler = (event) => {
        props.showCart();
    }

    return <div className={classes.modal}>
        <CartItem />
        <div className={classes.footer}>
            <h3>Total Amount <span>${cartCtx.totalAmount}</span></h3>
            <button>Order</button>
            <button onClick={closeCartHandler}>Close</button>
        </div>
    </div>;
};

export default Modal;
