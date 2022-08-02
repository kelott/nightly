// @ts-nocheck

import { useEffect, useState } from 'react';
import { deleteCartItem, modifyCartItem } from '../utils/apiService';
import sciStyle from './ShoppingCartItem.css';

export function ShoppingCartItem({ cartItem, itemId, shoppingCart, setShoppingCart }) {
  const [inputVal, setInputVal] = useState(1);

  useEffect(() => {
    setInputVal(cartItem.cartcount);
  }, [cartItem.cartcount]);

  async function handleClickPlus(e, productId) {
    e.preventDefault();
    const cartItem = shoppingCart[productId];
    try {
      setShoppingCart({ ...shoppingCart, [productId]: { ...cartItem, cartcount: (cartItem.cartcount += 1) } });
      await modifyCartItem({ productId, cartcount: cartItem.cartcount });
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
      }
    } catch (e) {
      console.log(e.message);
    }
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
        <input name="items" className="inputs" defaultValue={inputVal} key={inputVal} type="number" readOnly={true}></input>
        <button onClick={(e) => handleClickMinus(e, itemId)} name="minus">
          -
        </button>
      </form>
    </div>
  );
}
