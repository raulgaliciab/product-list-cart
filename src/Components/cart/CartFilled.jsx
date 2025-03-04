import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from './CartItem';
import { OrderTotal } from '../OrderTotal';
import { ModalContext } from '../../context/ModalContext';

export const CartFilled = () => {

  const { cartState } = useContext(CartContext);
  const { toggleModal } = useContext(ModalContext);

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

      <OrderTotal/>

      <div className="carbon-neutral">
        <img src="src/assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
        <span>This a <b>carbon-neutral</b> delivery</span>
      </div>

      <button
        onClick={ () => toggleModal() }
        className="confirm-order text-preset-3"
      >
        Confirm Order
      </button>
    </section>
  )
}
