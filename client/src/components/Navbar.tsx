// @ts-nocheck

import './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export function Navbar({ categories }) {
  return (
    <div className="navbar">
      <div className="logo-bar">
        <div className="logo-left">
          <Menu>
            {/* Todo: put react-router links in */}
            <Link id="home" className="menu-item" to={'/'}>
              Home
            </Link>
            <hr />
            {categories.map((category) => (
              <Link id={category} className="menu-item" to={`product/category/${category}`}>
                {category}
              </Link>
            ))}
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
