// @ts-nocheck

import NavbarStyle from './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export function Navbar({ categories }) {
  return (
    <div style={NavbarStyle} className="navbar">
      <div className="logo-bar">
        <div className="logo-left">
          <Menu>
            <Link id="home" className="menu-item" to={'/'}>
              Home
            </Link>
            <hr />
            {categories.map((category) => (
              <Link key={category} className="menu-item" to={`product/category/${category}`}>
                {category}
              </Link>
            ))}
          </Menu>
          {/* Todo: Insert logo here */}
        </div>
        <div className="logo-right">
          <Link id="cart" to={'shoppingcart'}>
            <button>Cart</button>
          </Link>
        </div>
      </div>
      <form className="search">
        <input name="search" />
        <button>Magnifier</button>
      </form>
      {/* cat-bar is only for styling purposes */}
      <div className="cat-bar"></div>
    </div>
  );
}
