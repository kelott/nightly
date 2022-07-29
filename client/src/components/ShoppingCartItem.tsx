// @ts-nocheck

import sciStyle from './ShoppingCartItem.css';

export function ShoppingCartItem({ cartItem }) {
  return (
    <div style={sciStyle} className="cart-item">
      <div className="cart-image-container">
        <img id="cart-image" src={cartItem.image} alt={cartItem.title} />
      </div>
      <div className="cart-text">
        <p>{cartItem.title}</p>
        <p>€{cartItem.price}</p>
      </div>
    </div>
  );
}
