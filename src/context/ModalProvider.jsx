/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }) => {

  const [ modalState, setModalState ] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
  }

  return (
    <ModalContext.Provider value={ {modalState, toggleModal} }>
      { children }
    </ModalContext.Provider>
  )
}
