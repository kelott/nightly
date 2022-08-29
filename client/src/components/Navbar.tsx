// @ts-nocheck

import style from './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToggleDarkMode } from './ToggleDarkMode';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from '../assets/nighly-logo.svg';

export function Navbar({
  darkState,
  setDarkState,
  categories,
  searchParams,
  setSearchParams,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div style={style} className='navbar'>
      <div className='logo-bar'>
        <div className='logo-left'>
          <Menu onOpen={handleOpen} onClose={handleOpen} isOpen={isOpen}>
            <div className={darkState.status ? 'home-dark' : 'home'}>
              <Link
                onClick={handleOpen}
                id='home'
                className='menu-item'
                to={'/'}
              >
                Home
              </Link>
            </div>
            <div className={darkState.status ? 'b-menu-dark' : 'b-menu'}>
              {categories.map((entry) => (
                <Link
                  onClick={handleOpen}
                  key={entry.id}
                  className='menu-item'
                  to={`product/category/${entry.category}`}
                >
                  {entry.category}
                </Link>
              ))}
              <ToggleDarkMode
                darkState={darkState}
                setDarkState={setDarkState}
              />
            </div>
          </Menu>
          {/* Todo: Insert logo here */}
        </div>
        <div className='logo-center'>
          <img src={logo} alt='nightly logo' />
        </div>
        <div className='logo-right'>
          <Link id='cart' to={'shoppingcart'}>
            <ShoppingCartOutlinedIcon
              style={{ paddingInline: '15px' }}
              fontSize='large'
              sx={{ color: 'white' }}
            />
          </Link>
        </div>
      </div>
      <form
        className='search-form'
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className={darkState.status ? 'search-input-dark' : 'search-input'}
          placeholder='Search Nightly'
          autoComplete='off'
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
        <div className='search-btn'>
          <SearchOutlinedIcon fontSize='large' sx={{ color: 'white' }} />
        </div>
      </form>
      {/* style-bar is only for styling purposes */}
      <div className='style-bar'></div>
    </div>
  );
}
