import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../images/github.svg';
import facebook from '../../images/facebook.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
      <nav className='footer__navigation'>
        <div className='footer__text-links'>
          <Link to='/' className='footer__link'>Главная</Link>
          <a href='https://praktikum.yandex.ru' target='blank' className='footer__link'>Яндекс.Практикум</a>
        </div>
        <div className='footer__icon-links'>
          <a href='https://github.com/escar85' target='blank' className='footer__link'>
            <img alt='github' src={github} className='footer__social-icon' />
          </a>
          <a href='https://ru-ru.facebook.com/' target='blank' className='footer__link'>
            <img alt='facebook' src={facebook} className='footer__social-icon' />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
