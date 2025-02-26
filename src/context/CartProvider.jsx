/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {

  const [ cartState, setCartState ] = useState([]);

  const increaseItem = ( item ) => {
    // Missing logic
    console.log("+1", item);
  }

  const decreaseItem = ( item ) => {
    // Missing logic
    console.log("-1", item);
  }

  return (
    <CartContext.Provider value={ { cartState, increaseItem, decreaseItem } }>
      { children }
    </CartContext.Provider>
  )
}
