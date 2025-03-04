import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import { ModalContext } from '../../context/ModalContext';

import { ModalItem } from './ModalITem';
import { OrderTotal } from '../OrderTotal';


export const CheckOutModal = () => {

  const { cartState } = useContext(CartContext);
  const { toggleModal } = useContext(ModalContext);

  return (
    <section>
      <img src="src/assets/images/icon-order-confirmed.svg" alt="" />
      <h1>Order Confirmed</h1>
      <p>We hope you enjoy your food!</p>

    <ul>
      {
        cartState.map( item => (
          <ModalItem
            key={item.id}
            cartItem={item}
          />
        ))
      }
    </ul>

    <OrderTotal/>

    <button onClick={ toggleModal }>
      Start New Order
    </button>

    </section>
  )
}
