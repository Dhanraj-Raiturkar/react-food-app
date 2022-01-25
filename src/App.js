import classes from './App.module.css';
import Navbar from './UI/Navbar';
import Backdrop from './UI/Backdrop';
import CardAbout from './UI/CardAbout';
import Menu from './UI/Menu';
import React, { useState } from 'react';
import Cart from './Modal/Cart';
import CartContextProvider from './store/CartContextProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const menu = [
    {
      id: 1,
      name:'Sushi',
      info:'Finest fish and veggies',
      price:22.95,
    },
    {
      id: 2,
      name:'Burger',
      info:'Served with fries and coke',
      price:14.75,
    },
    {
      id: 3,
      name:'Pizza',
      info:'Choice of crust available',
      price:19.56,
    },
  ]

  const closeCartHandler = () => {
    setCartIsShown(false);
  }

  const openCartHandler = () => {
    setCartIsShown(true);
  }

  return (
    <CartContextProvider>
      <div className={classes.app}>
        {cartIsShown && <Cart showCart={closeCartHandler} hideCart={closeCartHandler} />}
        <Navbar title="ReactMeals" viewCart={openCartHandler} />
        <Backdrop>
          <CardAbout />
          <Menu list={menu} />
        </Backdrop>
      </div>
    </CartContextProvider>
  );
}

export default App;
