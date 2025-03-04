/* eslint-disable react/prop-types */
export const ModalItem = ({ cartItem }) => {

  return (
    <li>
      <img src={`src/${cartItem.image.thumbnail}`} alt={cartItem.name} />
      <div>
        <h3>{ cartItem.name }</h3>
        <p>{ cartItem.quantity }x</p>
        <p>@ ${ cartItem.price }</p>
      </div>
      <p>${ cartItem.price * cartItem.quantity }</p>
    </li>
  )
}
