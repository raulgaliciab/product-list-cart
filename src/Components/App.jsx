import data from '../data/data.json';
import { CartProvider } from '../context/CartProvider';
import { ModalProvider } from '../context/ModalProvider';
import { Cart } from './cart/Cart';
import { ProductItem } from './product-item/ProductItem';
import { ModalRender } from './modal/ModalRender';

export const App = () => {

  return (
    <ModalProvider>
      <CartProvider>
        <main>

          <ModalRender/>

          <h1>Desserts</h1>

          <Cart />

          <section className='items-container'>
            {
              data.map( item => (
                <ProductItem
                  key={ item.id }
                  item={ item }
                />
              ))
            }
          </section>

        </main>
      </CartProvider>
    </ModalProvider>
  )
}
