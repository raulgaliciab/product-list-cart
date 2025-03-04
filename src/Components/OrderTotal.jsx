import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const OrderTotal = () => {

    const { cartState } = useContext(CartContext);
    const cartTotal = cartState.reduce( (acc, item) => acc + item.price * item.quantity, 0 ).toFixed(2);

  return (
    <div className="order-total">
        <p className="text-preset-4__regular">Order Total</p>
        <span className="text-preset-2">${cartTotal}</span>
    </div>
  )
}
