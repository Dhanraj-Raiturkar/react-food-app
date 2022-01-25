import React from 'react';
import classes from './CardAbout.module.css'
import reactDom from 'react-dom';

const CardAbout = () => {
  return reactDom.createPortal(
    <div className={classes.cardAbout}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favourite meal from our broad selection of available meails and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just in-time and of course by experienced chefs!</p>
    </div>,
    document.getElementById('popupCard')
  );
};

export default CardAbout;
