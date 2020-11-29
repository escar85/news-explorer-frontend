import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const url = useLocation();
  const [headerNavigationBoxClassName, setHeaderNavigationBoxClassName] = React.useState('header__navigation-box');
  const [headerOpenedMenuClassName, setHeaderOpenedMenuClassName] = React.useState('');

  const headerClassName = (
    `header ${url.pathname === '/'
      ? ''
      : 'header_theme-white'}`
  )

  const headerTitleClassName = (
    `header__title ${url.pathname === '/'
      ? ''
      : 'header__title_theme-white'} `
  )

  const headerBurgerMenuClassName = (
    `header__burger-menu ${url.pathname === '/'
      ? ''
      : 'header__burger-menu_theme-white'}`
  )

  function toggleMenu() {
    headerNavigationBoxClassName === 'header__navigation-box'
    ? setHeaderNavigationBoxClassName('header__navigation-box header__navigation-box_opened')
    : setHeaderNavigationBoxClassName('header__navigation-box');

    headerNavigationBoxClassName === 'header__navigation-box'
    ? setHeaderOpenedMenuClassName('header__menu-opened')
    : setHeaderOpenedMenuClassName('');
  }

  return (
    <header className={headerClassName + ' ' + headerOpenedMenuClassName}>
      <div className='header__mobile-menu'>
        <Link to='/' className={headerTitleClassName}>NewsExplorer</Link>
        <button type='button' aria-label='menu' className={headerBurgerMenuClassName} onClick={toggleMenu} />
      </div>
      <div className={headerNavigationBoxClassName}>
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
