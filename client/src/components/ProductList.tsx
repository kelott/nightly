// @ts-nocheck

import { Link } from 'react-router-dom';
import { ProductListItem } from './ProductListItem';

export function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <li key={product.id}>
              <ProductListItem product={product} ratingData={product.rating} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
