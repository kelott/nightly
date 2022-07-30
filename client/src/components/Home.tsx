// @ts-nocheck

import { useOutletContext } from 'react-router-dom';
import { ProductList } from './ProductList';

export function Home() {
  const { products } = useOutletContext();
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
