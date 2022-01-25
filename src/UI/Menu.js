import React,{useContext} from 'react';
import classes from './Menu.module.css'
import MenuItem from './MenuItem';
import Context from '../store/cart-context';

const Menu = (props) => {

    
    return <div className={classes.menu}>
        {props.list.map(item => (
            <MenuItem key={item.id} data={item}/>
        ))}
    </div>;
};

export default Menu;
  