import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CounterButton } from './CounterButton';
import { AddToCart } from './AddToCart';

/* eslint-disable react/prop-types */
export const ProductItem = ({ item }) => {

  const { image, category, name, price } = item;

  // Cart Context
  const { cartState } = useContext(CartContext);

  // Item quantity in Cart
  const cartItem = cartState.find( (element) => element.id === item.id );
  const itemQuantity = (cartItem) ? cartItem.quantity : 0;

  return (

    <div className="product-item">

      <picture>
        <source srcSet={image.desktop} media="(min-width: 1024px)" />
        <source srcSet={image.tablet} media="(min-width: 712px)" />
        <img
          className="product-img"
          src={image.mobile}
          alt={name}
        />
      </picture>

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
