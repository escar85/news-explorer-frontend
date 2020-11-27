import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const url = useLocation();

  const headerClassName = (
    `header ${url.pathname === '/'
      ? ''
      : 'header_theme-white'}`
  )

  const headerTitleClassName = (
    `header__title ${url.pathname === '/'
      ? ''
      : 'header__title_theme-white'}`
  )

  return (
    <header className={headerClassName}>
      <Link to='/' className={headerTitleClassName}>NewsExplorer</Link>
      <div className='header__navigation-box'>
        <Navigation
          loggedIn={props.loggedIn}
          logout={props.logout}
          redirectTo={props.redirectTo}
        />
      </div>
    </header>
  );
};

export default Header;
