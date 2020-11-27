import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation(props) {

  const url = useLocation();

  const navLinkClassName = (
    `navigation__link ${url.pathname === '/'
      ? ''
      : 'navigation__link_theme-white'}`
  )

  const navLinkActiveClassName = (
    `navigation__link_active ${url.pathname === '/'
      ? ''
      : 'navigation__link_active_theme-white'}`
  )

  const navLogoutIconClassName = (
    `navigation__logout-icon ${url.pathname === '/'
      ? ''
      : 'navigation__logout-icon_theme-white'}`
  )

  const navButtonClassName = (
    `navigation__button ${url.pathname === '/'
    ? ''
    : 'navigation__button_theme-white'}`
  )

  return (
    <nav className='navigation'>
      <NavLink exact to='/' className={navLinkClassName} activeClassName={navLinkActiveClassName}>Главная</NavLink>

      {props.loggedIn ?
        <>
          <NavLink to='/saved-news' className={navLinkClassName} activeClassName={navLinkActiveClassName}>Сохранённые статьи</NavLink>
          <button className={navButtonClassName} onClick={props.logout}>Greta
            <div className={navLogoutIconClassName} />
          </button>
        </> :
        <button className={navButtonClassName} onClick={props.redirectTo}>Авторизоваться</button>
      }
    </nav>
  );
};

export default Navigation;
