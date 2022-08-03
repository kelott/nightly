// @ts-nocheck

import { useEffect, useState } from 'react';
import ProductListItemStyle from './ProductListItem.css';
import { StarRating } from './StarRating';

export function ProductListItem({ product, darkState }) {
  const [rating, setRating] = useState({});
  useEffect(() => {
    setRating({ rate: product.rate, count: product.count });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={ProductListItemStyle} className="p-list-item">
      <div className="product-img-container">
        <img className="product-img" src={product.image} alt="product" />
      </div>
      <div className={darkState.status ? 'p-description-dark' : 'p-description'}>
        <p>{product.title}</p>
        <div className="item-rating">
          <StarRating rate={rating.rate} />
          <span>{rating.count}</span>
        </div>
        <p>€{product.price}</p>
      </div>
    </div>
  );
}
