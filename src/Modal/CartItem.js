import React, {useContext} from 'react';
import classes from './CartItem.module.css'
import Context from '../store/cart-context';

const CartItem = () => {

    const cartCtx = useContext(Context);

    const incrementItem = (item) => {
        cartCtx.addItem({...item, amount: 1});
    } 

    const decrementItem = (item) => {
        cartCtx.removeItem({...item, amount: 1});
    } 

    const cartItems = cartCtx.items.map(
        item => 
            <>
                <li key={item.id} className={classes.listItem}>
                    <div className={classes.info}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                        <span>x{item.amount}</span>
                    </div>
                    <div className={classes.buttons}>
                        <button onClick={decrementItem.bind(null, item)}>-</button>
                        <button onClick={incrementItem.bind(null, item)}>+</button>
                    </div>
                </li>
            </>
            
    );

    return <ul className={classes.container}>
        {cartItems}
    </ul>
};

export default CartItem;
