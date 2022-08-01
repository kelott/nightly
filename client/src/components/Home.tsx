// @ts-nocheck

import { useOutletContext, useSearchParams } from 'react-router-dom';
import { ProductList } from './ProductList';
import { Search } from './Search';

export function Home() {
  const { products } = useOutletContext();
  const [searchParams] = useSearchParams();

  return <div>{searchParams.get('filter') ? <Search products={products} /> : <ProductList products={products} />}</div>;
}
