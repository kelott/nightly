// @ts-nocheck

import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { addToCart, getCart, removeFromCart } from '../utils/ShoppingCartStorage';
import { ShoppingCartItem } from './ShoppingCartItem';

export function ShoppingCart() {
  const { shoppingCart, setShoppingCart } = useOutletContext();

  useEffect(() => {
    const productsInCart = getCart();
    setShoppingCart(productsInCart);
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    return;
  }

  function handleClick(e, key) {
    e.preventDefault();
    if (e.target.name === 'plus') return setShoppingCart(addToCart({ id: key }));
    else return setShoppingCart(removeFromCart({ id: key }));
  }

  return (
    <div>
      <h2>Subtotal</h2>
      {Object.keys(shoppingCart).length === 0 ? (
        <p>Shopping cart is empty</p>
      ) : (
        <ul>
          {Object.keys(shoppingCart).map((key) => (
            <li key={key}>
              <ShoppingCartItem cartItem={shoppingCart[key]} />
              <form onSubmit={(e) => handleSubmit(e)}>
                <button onClick={(e) => handleClick(e, key)} name="plus">
                  +
                </button>
                <label>Items</label>
                <input name="items" className="inputs"></input>
                <button onClick={(e) => handleClick(e, key)} name="minus">
                  -
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
