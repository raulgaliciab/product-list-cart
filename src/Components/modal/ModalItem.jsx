/* eslint-disable react/prop-types */
export const ModalItem = ({ cartItem }) => {

  return (
    <li className="modal-item">
      <img src={cartItem.image.thumbnail} alt={cartItem.name} />
      <div className="modal-item__text">
        <h3 className="text-preset-4__semibold">{ cartItem.name }</h3>
        <div>
          <p className="modal-item__quantity text-preset-4__semibold">{ cartItem.quantity }x</p>
          <p className="modal-item__price text-preset-4__regular">@ ${ cartItem.price.toFixed(2) }</p>
        </div>
      </div>
      <p className="modal-item__total-price text-preset-3">${ (cartItem.price * cartItem.quantity).toFixed(2) }</p>
    </li>
  )
}
