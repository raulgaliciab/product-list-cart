import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext"
import { CheckOutModal } from "./CheckOutModal";

export const ModalRender = () => {

  const { modalState } = useContext(ModalContext);
  return (
    <>
      {
        modalState && <CheckOutModal/>
      }
    </>
  )
}
