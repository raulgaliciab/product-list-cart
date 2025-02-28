import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from './CartItem';

export const CartFilled = () => {

  const { cartState } = useContext(CartContext);
  const cartTotal = cartState.reduce( (acc, item) => acc + item.price * item.quantity, 0 ).toFixed(2);

  return (
    <section>
      <ul>
        {
          cartState.map( (cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))
        }
      </ul>

      <div className='order-total'>
        <p>Order Total</p>
        <span>${cartTotal}</span>
      </div>

      <div className='carbon-neutral'>
        <img src="src/assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
        <span>This a <b>carbon-neutral</b> delivery</span>
      </div>

      <button className='confirm-order'>
        Confirm Order
      </button>
    </section>
  )
}
