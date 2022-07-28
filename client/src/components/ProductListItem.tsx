// @ts-nocheck

import { useEffect, useState } from 'react';

export function ProductListItem({ product, ratingData }) {
  const [rating, setRating] = useState({});

  useEffect(() => {
    setRating(ratingData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <img src={product.image} alt="product" />
      </div>
      <div>
        <p>{product.title}</p>
        <p>{rating.rate} Stars</p>
        <p>{rating.count} Counts</p>
        <p>€{product.price}</p>
      </div>
    </div>
  );
}
