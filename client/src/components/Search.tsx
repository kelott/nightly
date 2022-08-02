// @ts-nocheck

import { Link, useOutletContext, useSearchParams } from 'react-router-dom';
import { ProductList } from './ProductList';

export function Search({ products }) {
  const { categories } = useOutletContext();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter');

  function match() {
    return categories.filter((cat) => cat.category.slice(0, searchTerm.length) === searchTerm);
  }

  function productMatch() {
    return products.filter((product) => product.title.toLowerCase().includes(searchTerm?.toLowerCase()));
  }

  return (
    <div>
      <p>Search: {searchTerm}</p>
      {match().length ? (
        <>
          <ul>
            {match().map((el, index) => (
              <li key={index}>
                <Link to={`product/category/${el.category}`}>{el.category}</Link>
              </li>
            ))}
          </ul>
          <ProductList products={productMatch()} />
        </>
      ) : (
        <ProductList products={productMatch()} />
      )}
    </div>
  );
}
