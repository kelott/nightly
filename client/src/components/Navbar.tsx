// @ts-nocheck

import NavbarStyle from './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToggleDarkMode } from './ToggleDarkMode';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export function Navbar({ darkState, setDarkState, categories, searchParams, setSearchParams }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div style={NavbarStyle} className="navbar">
      <div className="logo-bar">
        <div className="logo-left">
          <Menu onOpen={handleOpen} onClose={handleOpen} isOpen={isOpen}>
            <div className="home">
              <Link onClick={handleOpen} id="home" className="menu-item" to={'/'}>
                Home
              </Link>
            </div>
            {categories.map((entry) => (
              <Link onClick={handleOpen} key={entry.id} className="menu-item" to={`product/category/${entry.category}`}>
                {entry.category}
              </Link>
            ))}
            <ToggleDarkMode darkState={darkState} setDarkState={setDarkState} />
          </Menu>
          {/* Todo: Insert logo here */}
        </div>
        <div className="logo-right">
          <Link id="cart" to={'shoppingcart'}>
            <ShoppingCartOutlinedIcon style={{ paddingInline: '15px' }} fontSize="large" sx={{ color: 'white' }} />
          </Link>
        </div>
      </div>
      <form
        className="search-form"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="Search Nightly"
          autoComplete="off"
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
        <div className="search-btn">
          <SearchOutlinedIcon fontSize="large" sx={{ color: 'white' }} />
        </div>
      </form>
      {/* style-bar is only for styling purposes */}
      <div className="style-bar"></div>
    </div>
  );
}
