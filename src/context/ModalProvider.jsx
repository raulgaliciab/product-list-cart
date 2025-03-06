/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }) => {

  const [ modalState, setModalState ] = useState(false);

  const toggleModal = () => {
    setModalState( (prev) => {
      const newState = !prev;

      if (newState) {
        document.body.classList.add("body-no-scroll");
      } else {
        document.body.classList.remove("body-no-scroll");
      }

      return newState;
    });
  }

  return (
    <ModalContext.Provider value={ {modalState, toggleModal} }>
      { children }
    </ModalContext.Provider>
  )
}
