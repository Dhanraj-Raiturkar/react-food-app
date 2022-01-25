import React, {useContext, useRef} from 'react';
import classes from './MenuItem.module.css';
import Context from '../store/cart-context';

const MenuItem = (props) => {

    const enteredAmount = useRef();
    const cartCtx = useContext(Context);

    
    const clickHandler = () => {
        cartCtx.addItem({
            id: props.data.id,
            name: props.data.name,
            amount: +enteredAmount.current.value,
            price: props.data.price,
        });
    }

    return <div className={classes.menuItem}>
        <div>
            <h4>{props.data.name}</h4>

            <i>{props.data.info}</i>
            <p>${props.data.price}</p>
        </div>
        <div className={classes.add}>
            <input className={classes.input} type='number' step='1' min='1' max='5' ref={enteredAmount} defaultValue='1'/>
            <label><b>Amount</b></label>
            <button onClick={clickHandler}> + Add</button>
        </div>
        <hr />
    </div>;
};

export default MenuItem;
