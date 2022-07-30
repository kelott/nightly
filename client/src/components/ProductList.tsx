// @ts-nocheck

import { Link } from 'react-router-dom';
import { ProductListItem } from './ProductListItem';
import './ProductList.css';

export function ProductList({ products }) {
  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <Link to={`product/${product.id}`} key={product.id}>
            <li>
              <ProductListItem product={product} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
