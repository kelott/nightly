// @ts-nocheck

import { Link, useLocation } from 'react-router-dom';
import { ProductListItem } from './ProductListItem';
import './ProductList.css';

export function ProductList({ products, darkState }) {
  const location = useLocation();

  return (
    <ul className={darkState.status ? 'product-list-dark' : 'product-list'}>
      {products.map((product) => (
        <Link to={location.pathname === '/' ? `product/${product.id}` : `../product/${product.id}`} key={product.id}>
          <li>
            <ProductListItem product={product} darkState={darkState} />
          </li>
        </Link>
      ))}
    </ul>
  );
}
