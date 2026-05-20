import { useState } from 'react';
import Stripes from '../Stripes/Stripes';
import Dropdown from './Dropdown/Dropdown';
import logo from '../../images/logo-extended.png';
import compactLogo from '../../images/logo-compact.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNav = () => {
    return (
      <>
        <div className='header__nav'>
          <span className='header__text'>Hello, User</span>
          <button
            className={isMenuOpen ? 'garage-button_active' : 'garage-button'}
            onClick={toggleMenu}
            aria-label='Toggle menu'
          ></button>
        </div>
      </>
    );
  };

  return (
    <>
      <header className='header'>
        <div className='header__stripes-container header__stripes-container_sides'>
          <Stripes />
        </div>
        <div className='header__logo-component'>
          <h1 className='header__title'>Cars of</h1>
          <img className='header__logo' src={logo} alt='7-Eleven logo' />
          <img
            className='header__logo-small'
            src={compactLogo}
            alt='7-Eleven logo'
          />
        </div>
        <div className='header__stripes-container'>
          <Stripes />
        </div>
        {renderNav()}
        <div className='header__stripes-container header__stripes-container_sides'>
          <Stripes />
        </div>
      </header>
      <Dropdown isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}

export default Header;
