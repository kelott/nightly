// @ts-nocheck

import NavbarStyle from './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navbar({ categories, searchParams, setSearchParams }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div style={NavbarStyle} className="navbar">
      <div className="logo-bar">
        <div className="logo-left">
          <Menu onOpen={handleOpen} onClose={handleOpen} isOpen={isOpen}>
            <Link onClick={handleOpen} id="home" className="menu-item" to={'/'}>
              Home
            </Link>
            <hr />
            {categories.map((entry) => (
              <Link onClick={handleOpen} key={entry.id} className="menu-item" to={`product/category/${entry.category}`}>
                {entry.category}
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
      <form className="search-form">
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <button type="submit">Magnifier</button>
      </form>
      {/* style-bar is only for styling purposes */}
      <div className="style-bar"></div>
    </div>
  );
}
