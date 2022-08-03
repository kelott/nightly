// @ts-nocheck

import { useEffect, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { addCartItem, getOneProduct, modifyCartItem } from '../utils/apiService';
import ProductStyling from './Product.css';
import { StarRating } from './StarRating';

export function Product() {
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});
  const { shoppingCart, setShoppingCart, darkState } = useOutletContext();
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
      const added = addToCart(product.id);
      if (added.cartcount === 1) {
        await addCartItem(added);
      } else {
        await modifyCartItem(added);
      }
      setShoppingCart(added);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div style={ProductStyling} className={darkState.status ? 'product-dark' : 'product'}>
      <div className={darkState.status ? 'block-dark top' : 'block top'}>
        <div className="rating">
          <StarRating rate={rating.rate} />
          <span>{rating.count}</span>
        </div>
        <p>{product.title}</p>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={darkState.status ? 'block-dark last' : 'block last'}>
        <p>€{product.price}</p>
        <Link onClick={handleClick} to={'../shoppingcart'}>
          <button>Add to Cart</button>
        </Link>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
