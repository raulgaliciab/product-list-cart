/* eslint-disable react/jsx-key */
import data from '../assets/data.json';
import { ProductItem } from './ProductItem';

export const App = () => {


  return (
    <main>
      <h1>Desserts</h1>

      {
        data.map( item => (
          <ProductItem
            img={ item.image.mobile }
            category={ item.category }
            name={ item.name }
            price={ item.price }
          />
        ))
      }
    </main>
  )
}
