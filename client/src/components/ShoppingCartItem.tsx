// @ts-nocheck

import { useState } from 'react';
import { deleteCartItem, modifyCartItem } from '../utils/apiService';
import sciStyle from './ShoppingCartItem.css';

export function ShoppingCartItem({ cartItem, itemId, shoppingCart, setShoppingCart }) {
  const [inputVal, setInputVal] = useState(1);

  async function handleClickPlus(e, productId) {
    e.preventDefault();
    const cartItem = shoppingCart[productId];
    try {
      setShoppingCart({ ...shoppingCart, [productId]: { ...cartItem, cartcount: (cartItem.cartcount += 1) } });
      await modifyCartItem({ productId, cartcount: cartItem.cartcount });
      setInputVal(cartItem.cartcount);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function handleClickMinus(e, productId) {
    e.preventDefault();
    const cartItem = shoppingCart[productId];
    try {
      if (cartItem.cartcount < 2) {
        await deleteCartItem({ productId });
        const updatedCart = { ...shoppingCart };
        delete updatedCart[productId];
        setShoppingCart(updatedCart);
      } else {
        setShoppingCart({ ...shoppingCart, [productId]: { ...cartItem, cartcount: (cartItem.cartcount -= 1) } });
        await modifyCartItem({ productId, cartcount: cartItem.cartcount });
        setInputVal(cartItem.cartcount);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  function handleChange(e) {
    console.log(e.target.value);

    setInputVal(e.target.value);
  }

  return (
    <div>
      <div style={sciStyle} className="cart-item">
        <div className="cart-image-container">
          <img id="cart-image" src={cartItem.image} alt={cartItem.title} />
        </div>
        <div className="cart-text">
          <p>{cartItem.title}</p>
          <p>€{cartItem.price}</p>
        </div>
      </div>
      <form>
        <button onClick={(e) => handleClickPlus(e, itemId)} name="plus">
          +
        </button>
        <input name="items" className="inputs" on={handleChange} defaultValue={inputVal} key={inputVal} type="number" value={inputVal}></input>
        <button onClick={(e) => handleClickMinus(e, itemId)} name="minus">
          -
        </button>
      </form>
    </div>
  );
}
