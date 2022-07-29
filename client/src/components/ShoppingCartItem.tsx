// @ts-nocheck

import './ShoppingCartItem.css';

export function ShoppingCartItem({ cartItem }) {
  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div className="cart-text">
        <p>{cartItem.title}</p>
        <p>€{cartItem.price}</p>
      </div>
    </div>
  );
}
