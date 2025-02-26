/* eslint-disable react/jsx-key */
import data from '../assets/data.json';
import { CartProvider } from '../context/CartProvider';
import { Cart } from './Cart';
import { ProductItem } from './ProductItem';

export const App = () => {


  return (
    <CartProvider>
      <main>
        <h1>Desserts</h1>

        <Cart />

        {
          data.map( item => (
            <ProductItem
              item={ item }
            />
          ))
        }
      </main>
    </CartProvider>
  )
}
