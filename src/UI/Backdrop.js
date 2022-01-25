import React from 'react';
import classes from './Backdrop.module.css';
import reactDom from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop}>{props.children}</div>;
};

export default Backdrop;
