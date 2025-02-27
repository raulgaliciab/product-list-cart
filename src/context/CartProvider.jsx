/* eslint-disable react/prop-types */
import { useReducer, useEffect } from 'react';
import { CartContext } from './CartContext';
import { cartReducer } from './CartReducer';

const initialCartState = [];

export const CartProvider = ({ children }) => {
  const [ cartState, dispatch ] = useReducer( cartReducer, initialCartState);

  const increaseItem = ( item ) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const decreaseItem = ( item ) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  useEffect(() => {
    console.log("Cart actualizado:", cartState);
  }, [ cartState ]);

  return (
    <CartContext.Provider value={{ cartState, increaseItem, decreaseItem }}>
      { children }
    </CartContext.Provider>
  );
};
