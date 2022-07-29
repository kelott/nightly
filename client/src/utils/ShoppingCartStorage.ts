// @ts-nocheck

export const cartStorage = {};

export function addToCart({ id, ...rest }) {
  if (id in cartStorage) {
    const currentId = cartStorage[id];
    currentId.cart += 1;
    return cartStorage;
  } else {
    cartStorage[id] = { ...rest, cart: 1 };
    return cartStorage;
  }
}

export function removeFromCart({ id }) {
  if (id in cartStorage) {
    delete cartStorage[id];
    return cartStorage;
  }
}

export function getCart() {
  return cartStorage;
}
