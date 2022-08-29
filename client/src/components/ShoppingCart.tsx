// @ts-nocheck

import { useOutletContext } from 'react-router-dom';
import { ShoppingCartItem } from './ShoppingCartItem';
import ShoppingCartStyle from './ShoppingCart.css';
import { useEffect, useState } from 'react';

export function ShoppingCart() {
  const { shoppingCart, setShoppingCart } = useOutletContext();
  const { products } = useOutletContext();
  const [cartProduct, setCartProduct] = useState({});

  function generateCartProducts() {
    const cartProducts = { sum: 0 };
    products
      .filter((product) => product.id in shoppingCart)
      .map((item) => {
        const { id, ...rest } = item;
        const currentItem = shoppingCart[id];
        cartProducts.sum += currentItem.cartcount * rest.price;
        return (cartProducts[id] = {
          ...rest,
          cartcount: currentItem.cartcount,
        });
      });
    return cartProducts;
  }

  useEffect(() => {
    setCartProduct(generateCartProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart]);

  return (
    <div style={ShoppingCartStyle} className='shoppingcart'>
      <span>Sum €{cartProduct.sum}</span>
      {Object.keys(shoppingCart).length === 0 ? (
        <p>Shopping cart is empty</p>
      ) : (
        <ul>
          {Object.keys(cartProduct)
            .filter((prop) => prop !== 'sum')
            .map((key) => (
              <li key={key}>
                <ShoppingCartItem
                  cartItem={cartProduct[key]}
                  itemId={key}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
