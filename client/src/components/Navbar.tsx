// @ts-nocheck
export function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-bar">
        <div className="logo-left">
          <button id="hamburger">Cart</button>
          {/* Todo: Insert logo here */}
        </div>
        <div className="logo-right">
          <button id="cart">Ham</button>
        </div>
      </div>
      <form className="search">
        <input name="search" />
        <button>Magnifier</button>
      </form>
      <div className="cat-bar">
        <ul>
          <li>Best sellers</li>
        </ul>
      </div>
    </div>
  );
}
