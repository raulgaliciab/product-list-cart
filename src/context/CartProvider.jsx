/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { CartContext } from './CartContext';
import { cartReducer } from './CartReducer';

const initialCartState = [];

export const CartProvider = ({ children }) => {
  const [ cartState, dispatch ] = useReducer( cartReducer, initialCartState);

  const increaseItem = ( item ) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const decreaseItem = ( item ) => {
    dispatch({ type: "DECREASE_ITEM", payload: item });
  };

  const removeItem = ( item ) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }


  return (
    <CartContext.Provider value={{ cartState, increaseItem, decreaseItem, removeItem }}>
      { children }
    </CartContext.Provider>
  );
};
