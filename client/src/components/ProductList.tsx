// @ts-nocheck

import { Link, useLocation } from 'react-router-dom';
import { ProductListItem } from './ProductListItem';
import './ProductList.css';

export function ProductList({ products }) {
  const location = useLocation();

  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <Link to={location.pathname === '/' ? `product/${product.id}` : `../product/${product.id}`} key={product.id}>
            <li>
              <ProductListItem product={product} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
