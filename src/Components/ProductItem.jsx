import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

/* eslint-disable react/prop-types */
export const ProductItem = ({ item }) => {

  const { image, category, name, price } = item;
  const imgURL = image.mobile;

  const { increaseItem, decreaseItem } = useContext(CartContext);

  return (

    <div className="product-item">

      <img src={`src/${imgURL}`} alt={name} />

      <div className='active-button'>
        <button
          className='minus'
          onClick={ () => decreaseItem(item)}
        >
        </button>
        <span>1</span>
        <button
          className='plus'
          onClick={ () => increaseItem(item) }
        >
        </button>
      </div>

      <span className="category">{ category }</span>
      <h2>{ name }</h2>
      <span className="price">{ `$${price}` }</span>

    </div>
  )
}
