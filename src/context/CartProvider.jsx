/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {

  const [ cartState, setCartState ] = useState([]);

  const increaseItem = ( item ) => {
    // Missing logic
    setCartState(item)
  }

  const decreaseItem = ( item ) => {
    // Missing logic
    setCartState(item)
  }

  return (
    <CartContext.Provider value={ { cartState, increaseItem, decreaseItem } }>
      { children }
    </CartContext.Provider>
  )
}
