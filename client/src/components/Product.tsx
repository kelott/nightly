// @ts-nocheck

import { useEffect, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { addCartItem, getAllCartItems, getOneProduct } from '../utils/apiService';
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

  async function handleClick() {
    try {
      const cartItems = await addCartItem(product);
      console.log(cartItems);
      setShoppingCart([...shoppingCart, cartItems]);
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
