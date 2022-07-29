// @ts-nocheck

import { useOutletContext } from 'react-router-dom';
import { ProductList } from './ProductList';

export function Home() {
  const { products, setShoppingCart } = useOutletContext();
  return (
    <div>
      <ProductList products={products} setShoppingCart={setShoppingCart} />
    </div>
  );
}
