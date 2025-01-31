export const ProductItem = ({ img, category, name, price }) => {

  return (

    <div>

      <img src={img} alt={name} />

      <div>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>

      <span>{ category }</span>
      <h2>{ name }</h2>
      <span>{ price }</span>

    </div>
  )
}
