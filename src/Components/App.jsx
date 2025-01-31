/* eslint-disable react/jsx-key */
import data from '../../data.json';
import { ProductItem } from './ProductItem';

export const App = () => {


  return (
    <>
      <h1>Desserts</h1>

      {
        data.map( item => (
          <ProductItem
            img={`src${item.image.mobile.replace('./', '/')}`}
            category={item.category}
            name={item.name}
            price={item.price}
          />
        ))
      }
    </>
  )
}
