// @ts-nocheck

import { useOutletContext } from 'react-router-dom';
import { addToCart, removeFromCart } from '../utils/ShoppingCartStorage';
import { ShoppingCartItem } from './ShoppingCartItem';
import ShoppingCartStyle from './ShoppingCart.css';

export function ShoppingCart() {
  const { shoppingCart, setShoppingCart } = useOutletContext();

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
    <div style={ShoppingCartStyle} className="shoppingcart">
      <h2>Subtotal</h2>
      {Object.keys(shoppingCart).length === 0 ? (
        <p>Shopping cart is empty</p>
      ) : (
        <ul>
          {Object.keys(shoppingCart).map((key) => (
            <li key={key}>
              <ShoppingCartItem cartItem={shoppingCart[key]} />
              <form onSubmit={(e) => handleSubmit(e)}>
                <button onClick={(e) => handleClick(e, shoppingCart[key])} name="plus">
                  +
                </button>
                <label>Items</label>
                <input name="items" className="inputs"></input>
                <button onClick={(e) => handleClick(e, shoppingCart[key])} name="minus">
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
