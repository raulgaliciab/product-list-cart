import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import { ModalContext } from '../../context/ModalContext';

import { ModalItem } from './ModalItem';
import { OrderTotal } from '../OrderTotal';


export const CheckOutModal = () => {

  const { cartState, clearCart } = useContext(CartContext);
  const { toggleModal } = useContext(ModalContext);

  const handleClick = () => {
    clearCart();
    toggleModal();
  }

  return (
    <div className="modal-page">
      <section className="modal-container animate__animated animate__slideInUp">
        <img src="assets/images/icon-order-confirmed.svg" alt="Order confirmed" />
        <h1 className="text-preset-1">Order Confirmed</h1>
        <p className='modal-subtitle'>We hope you enjoy your food!</p>

      <ul>
        {
          cartState.map( item => (
            <ModalItem
              key={item.id}
              cartItem={item}
            />
          ))
        }

      <OrderTotal/>

      </ul>


      <button
        onClick={ handleClick }
        className="text-preset-3"
      >
        Start New Order
      </button>

      </section>
    </div>
  )
}
