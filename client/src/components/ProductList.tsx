// @ts-nocheck

import { ProductListItem } from './ProductListItem';

export function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li id={product.id}>
            <ProductListItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
