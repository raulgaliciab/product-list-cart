/* eslint-disable react/prop-types */
export const ProductItem = ({ item }) => {

  const { image, category, name, price } = item;
  const imgURL = image.mobile;

  return (

    <div className="product-item">

      <img src={`src/${imgURL}`} alt={name} />

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
