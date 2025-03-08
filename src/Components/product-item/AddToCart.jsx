import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

/* eslint-disable react/prop-types */
export const AddToCart = ({ item }) => {

  const { increaseItem } = useContext(CartContext);

  return (
    <button
      onClick={ () => increaseItem(item)}
      className="add-to-cart text-preset-4__semibold"
    >
      <img src="assets/images/icon-add-to-cart.svg" alt="Add to Cart" />
      <span>Add to Cart</span>
    </button>
  )
}
