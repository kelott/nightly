// @ts-nocheck

import { useEffect, useState } from 'react';
import ProductListItemStyle from './ProductListItem.css';

export function ProductListItem({ product }) {
  const [rating, setRating] = useState({});
  // const ratingData = { rate: product.rate, count: product.rate };
  useEffect(() => {
    setRating({ rate: product.rate, count: product.rate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={ProductListItemStyle} className="p-list-item">
      <div className="product-img-container">
        <img className="product-img" src={product.image} alt="product" />
      </div>
      <div className="p-description">
        <p>{product.title}</p>
        <p>{rating.rate} Stars</p>
        <p>{rating.count} Counts</p>
        <p>€{product.price}</p>
      </div>
    </div>
  );
}
