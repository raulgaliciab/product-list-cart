import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from './CartItem';

export const Cart = () => {

  const { cartState } = useContext(CartContext);

  return (
    <section className="cart">
      <h2>Your Cart ({ cartState.length })</h2>

      <figure>
        <img src="src/assets/images/illustration-empty-cart.svg" alt="Empty cart" />
        <figcaption>Your added items will appear here</figcaption>
      </figure>

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
        <div>
          <p>Order Total</p>
          <span>$46.50</span>
        </div>

        <div>
          <img src="../assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
          <span>This a carbon-neutral delivery</span>
        </div>

        <button>
          Confirm Order
        </button>
      </section>

    </section>
  )
}
