/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartItem = ({ cartItem }) => {

  const { removeItem } = useContext(CartContext);

  return (
    <li className="cart-item">

      <div>
        <h3 className="text-preset-4__regular">{ cartItem.name }</h3>

        <div className="number-container">
          <p className="quantity text-preset-4__semibold">{ cartItem.quantity }x</p>
          <p className="price text-preset-4__regular">@ ${ cartItem.price }</p>
          <p className="total-price text-preset-4__semibold">${ cartItem.price * cartItem.quantity }</p>
        </div>
      </div>

      <button
        onClick={ () => removeItem(cartItem) }
      >

      </button>
    </li>
  )
}
