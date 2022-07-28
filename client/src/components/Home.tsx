// @ts-nocheck

import { ProductList } from './ProductList';

export function Home({ products, setProducts }) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
