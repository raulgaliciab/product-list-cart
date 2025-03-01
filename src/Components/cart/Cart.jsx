import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartFilled } from './CartFilled';
import { CartEmpty } from './CartEmpty';

export const Cart = () => {

  const { cartState } = useContext(CartContext);

  return (
    <section className="cart">
      <h2 className="text-preset-2">Your Cart ({ cartState.length })</h2>

      {
        ( cartState.length >= 1 )
          ? <CartFilled />
          : <CartEmpty />
      }

    </section>
  )
}
