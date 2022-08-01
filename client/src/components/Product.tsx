// @ts-nocheck

import { useEffect, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { addCartItem, getOneProduct } from '../utils/apiService';
import ProductStyling from './Product.css';

export function Product() {
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});
  const { shoppingCart, setShoppingCart } = useOutletContext();
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const oneProduct = await getOneProduct(params.productId);
        setProduct(oneProduct);
        setRating({ rate: oneProduct.rate, count: oneProduct.count });
      } catch (e) {
        console.log(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addToCart(productId) {
    if (productId in shoppingCart) {
      const item = shoppingCart[productId];
      return { ...shoppingCart, [productId]: { cartcount: (item.cartcount += 1) } };
    }
    return { ...shoppingCart, [productId]: { cartcount: 1 } };
  }

  async function handleClick() {
    try {
      await addCartItem({ productId: product.id, cartcount: 1 });
      setShoppingCart(addToCart(product.id));
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div style={ProductStyling} className="product">
      <div className="top">
        <div className="rating">
          <span>{rating.rate}</span>
          <span>{rating.count}</span>
        </div>
        <p>{product.title}</p>
        <img src={product.image} alt={product.title} />
      </div>
      <p>€{product.price}</p>
      <Link onClick={() => handleClick()} to={'../shoppingcart'}>
        <button>Add to Cart</button>
      </Link>
      <p>{product.description}</p>
    </div>
  );
}
