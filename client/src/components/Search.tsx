// @ts-nocheck

import { useOutletContext, useSearchParams } from 'react-router-dom';

export function Search(products) {
  const { categories } = useOutletContext();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter');

  function match() {
    const catStr = categories.map((str) => str.category);
    const keyword = searchParams.get('filter');
    const slicedKeyword = keyword?.slice(0, keyword.length);
    return catStr.map((str) => str.slice(0, keyword.length)).filter((str) => str === slicedKeyword);
  }

  return (
    <div>
      <h1>Search: {searchTerm}</h1>
      {match().length ? (
        <ul>
          {match().map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      ) : (
        <p>no</p>
      )}
    </div>
  );
}
