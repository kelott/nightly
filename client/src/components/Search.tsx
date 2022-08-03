// @ts-nocheck

import { Link, useOutletContext, useSearchParams } from 'react-router-dom';
import { ProductList } from './ProductList';

export function Search({ products }) {
  const { categories, darkState } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter');

  function categoryMatch() {
    return categories.filter((cat) => cat.category.slice(0, searchTerm.length) === searchTerm);
  }

  function productMatch() {
    return products.filter((product) => product.title.toLowerCase().includes(searchTerm?.toLowerCase()));
  }

  return (
    <div className={darkState.status ? 'search-results-dark' : 'search-results'}>
      <span>Filter: {searchTerm}</span>
      <button onClick={() => setSearchParams('')}>clear</button>
      {categoryMatch().length ? (
        <>
          <ul>
            {categoryMatch().map((el, index) => (
              <li key={index}>
                <Link to={`product/category/${el.category}`}>{el.category}</Link>
              </li>
            ))}
          </ul>
          <ProductList products={productMatch()} darkState={darkState} />
        </>
      ) : (
        <ProductList products={productMatch()} darkState={darkState} />
      )}
    </div>
  );
}
