/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CounterButton = ({ item }) => {

  const { cartState, increaseItem, decreaseItem } = useContext(CartContext);

  // Item quantity in Cart
  const cartItem = cartState.find( (element) => element.id === item.id );
  const itemQuantity = (cartItem) ? cartItem.quantity : 0;

  return (
    <div className='active-button text-preset-4__semibold'>
      <button
        className='minus'
        onClick={ () => decreaseItem(item)}
      >
      </button>
      <span>{ itemQuantity }</span>
      <button
        className='plus'
        onClick={ () => increaseItem(item) }
      >
      </button>
    </div>
  )
}
