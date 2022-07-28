// @ts-nocheck

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../utils/apiService';

export function Product() {
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const oneProduct = await getOneProduct(params.productId);
        setProduct(oneProduct);
        setRating(oneProduct.rating);
      } catch (e) {
        console.log(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <span>{rating.rate}</span>
      <span>{rating.count}</span>
      <p>{product.title}</p>
      <img src={product.image} alt="product" />
      <p>€{product.price}</p>
      <button>Add to Cart</button>
      <p>{product.description}</p>
    </div>
  );
}
