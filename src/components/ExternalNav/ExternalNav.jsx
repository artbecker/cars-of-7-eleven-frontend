import React from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../../images/logo-white.svg';

function ExternalNav() {
  return (
    <nav className='nav'>
      <span className='nav__title'>Official 7-Eleven websites:</span>
      <div className='nav__links'>
        <Link to='https://www.7-eleven.com/' className='nav__link'>
          7-eleven.com
        </Link>
        <Link to='https://7collection.com/' className='nav__link'>
          7collection.com
        </Link>
      </div>
      <img className='nav__logo' src={whiteLogo} alt='7-Eleven logo' />
    </nav>
  );
}

export default ExternalNav;
