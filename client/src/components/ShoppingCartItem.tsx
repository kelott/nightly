// @ts-nocheck

import { useState } from 'react';
import { addCartItem, deleteCartItem } from '../utils/apiService';
import sciStyle from './ShoppingCartItem.css';

export function ShoppingCartItem({ cartItem, itemId, shoppingCart, setShoppingCart }) {
  const [inputVal, setInputVal] = useState(1);

  async function handleClick(e, productId) {
    e.preventDefault();
    const cartItem = shoppingCart[productId];
    try {
      if (e.target.name === 'plus') {
        await addCartItem({ productId, cartcount: 1 });
        setShoppingCart({ ...shoppingCart, [productId]: { ...cartItem, cartcount: (cartItem.cartcount += 1) } });
        setInputVal(inputVal + 1);
      } else {
        await deleteCartItem({ productId });
        const updatedCart = { ...shoppingCart };
        delete updatedCart[productId];
        setShoppingCart(updatedCart);
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
        <button onClick={(e) => handleClick(e, itemId)} name="plus">
          +
        </button>
        <input name="items" className="inputs" val={inputVal} onChange={handleChange} defaultValue={inputVal}></input>
        <button onClick={(e) => handleClick(e, itemId)} name="minus">
          -
        </button>
      </form>
    </div>
  );
}
