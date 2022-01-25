import Context from './cart-context';
import React,{ useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const reducer = (state, action) => {
    if(action.type === 'ADD'){
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        if(existingItem){
            let item = {...existingItem, amount: existingItem.amount + action.item.amount};
            var updatedCart = [...state.items];
            updatedCart[existingItemIndex] = item;
            //console.log(updatedCart);
            const updatedAmount = +state.totalAmount + action.item.price * action.item.amount;
            return {
                items: updatedCart,
                totalAmount: updatedAmount.toFixed(2),
            }
        }
        else{
            const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
            const updatedCart = state.items.concat(action.item);
            return {
                items: updatedCart,
                totalAmount: updatedAmount,
            }
        }      
    }
    if(action.type==='REMOVE'){
        const itemIndex = state.items.findIndex(item => item.id === action.item.id);
        var itemToRemove = state.items[itemIndex];
        if(itemToRemove.amount > 1){
            const updatedCart = [...state.items];
            var item = { ...itemToRemove, amount: itemToRemove.amount - action.item.amount };
            updatedCart[itemIndex] = item;
            const updatedAmount = (state.totalAmount - action.item.amount * action.item.price);
            return {
                items: updatedCart,
                totalAmount: updatedAmount.toFixed(2),
            }
        }else{
            const updatedCart = state.items.filter(item => item.id !== action.item.id)
            const updatedAmount = (state.totalAmount - action.item.price).toFixed(2);
            return {
                items: updatedCart,
                totalAmount: updatedAmount,
            }
        }
        
    }
    return defaultCartState;
}

const CartContextProvider = (props) => {

    const [cartState, dispatchCartState] = useReducer(reducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartState({
            type: 'ADD',
            item: item,
        })
    };
    const removeItemFromCart = (item) => {
        dispatchCartState({
            type:"REMOVE",
            item:item,
        })
    };

    return <Context.Provider value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }}>
        {props.children}
    </Context.Provider>
}

export default CartContextProvider;