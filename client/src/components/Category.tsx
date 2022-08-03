// @ts-nocheck

import { useEffect, useState } from 'react';
import { useLocation, useOutletContext, useParams } from 'react-router-dom';
import { getProductsOfCategory } from '../utils/apiService';
import { ProductList } from './ProductList';

export function Category() {
  const [productsOfCategory, setProductsOfCategory] = useState([]);
  const params = useParams();
  const location = useLocation();
  const { darkState } = useOutletContext();

  useEffect(() => {
    (async () => {
      try {
        const categoryProds = await getProductsOfCategory(params.categoryName);
        setProductsOfCategory(categoryProds);
      } catch (e) {
        console.log(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      <ProductList products={productsOfCategory} darkState={darkState} />
    </div>
  );
}
