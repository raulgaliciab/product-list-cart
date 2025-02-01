/* eslint-disable react/prop-types */
export const ProductItem = ({ img, category, name, price }) => {

  return (

    <div className="product-item">

      <img src={img} alt={name} />

      <div>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>

      <span className="category">{ category }</span>
      <h2>{ name }</h2>
      <span className="price">{ `$${price}` }</span>

    </div>
  )
}
