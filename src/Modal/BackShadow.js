import React from 'react';
import classes from './BackShadow.module.css';

const BackShadow = (props) => {

    const showCart = () => {
        props.showCart()
    }

    return <div className={classes.backshadow} onClick={showCart}>

    </div>;
};

export default BackShadow;
