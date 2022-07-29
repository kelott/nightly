// @ts-nocheck
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu';

export function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-bar">
        <div className="logo-left">
          <Menu>
            {/* Todo: put react-router links in href */}
            <a id="home" className="menu-item" href="/">
              Home
            </a>
            <hr />
            <a id="cat" className="menu-item" href="/">
              Category
            </a>
          </Menu>
          {/* Todo: Insert logo here */}
        </div>
        <div className="logo-right">
          <button id="cart">Cart</button>
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
