// @ts-nocheck

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../utils/apiService';
import { addToCart } from '../utils/ShoppingCartStorage';

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

  function handleClick() {
    return addToCart(product);
  }

  return (
    <div>
      <span>{rating.rate}</span>
      <span>{rating.count}</span>
      <p>{product.title}</p>
      <img src={product.image} alt={product.title} />
      <p>€{product.price}</p>
      <Link onClick={() => handleClick()} to={'../shoppingcart'}>
        <button>Add to Cart</button>
      </Link>
      <p>{product.description}</p>
    </div>
  );
}
