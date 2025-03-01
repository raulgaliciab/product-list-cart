import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CounterButton } from './CounterButton';
import { AddToCart } from './AddtoCart';

/* eslint-disable react/prop-types */
export const ProductItem = ({ item }) => {

  const { image, category, name, price } = item;
  const imgURL = image.mobile;

  // Cart Context
  const { cartState } = useContext(CartContext);

  // Item quantity in Cart
  const cartItem = cartState.find( (element) => element.id === item.id );
  const itemQuantity = (cartItem) ? cartItem.quantity : 0;

  return (

    <div className="product-item">

      <img src={`src/${imgURL}`} alt={name} />

      {/* Button */}
      {
        ( itemQuantity >= 1 )
          ? <CounterButton item={ item } />
          : <AddToCart item={ item }/>
      }

      <span className="category text-preset-4__regular">
        { category }
      </span>
      <h2 className="text-preset-3">{ name }</h2>
      <span className="price text-preset-3">
        { `$${price}` }
      </span>

    </div>
  )
}
