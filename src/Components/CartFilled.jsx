import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from './CartItem';

export const CartFilled = () => {

  const { cartState } = useContext(CartContext);

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
        <span>$46.50</span>
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
