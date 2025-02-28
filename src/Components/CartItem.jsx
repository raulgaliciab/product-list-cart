/* eslint-disable react/prop-types */
export const CartItem = ({ cartItem }) => {

  return (
    <li className="cart-item">

      <div className="cart-item__text-container">
        <h3>{ cartItem.name }</h3>

        <div className="cart-item__number-container">
          <p className="cart-item__quantity">{ cartItem.quantity }x</p>
          <p className="cart-item__price">@ ${ cartItem.price }</p>
          <p className="cart-item__total-price">${ cartItem.price * cartItem.quantity }</p>
        </div>
      </div>

      <button>

      </button>
    </li>
  )
}
