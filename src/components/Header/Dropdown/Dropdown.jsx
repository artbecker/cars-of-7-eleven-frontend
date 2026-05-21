import React from 'react';
import { Link } from 'react-router-dom';
import ExternalNav from '../../ExternalNav/ExternalNav';

function Dropdown({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className='dropdown'>
      <div className='dropdown__links'>
        <span className='dropdown__email'>nightdriver@tokyo.jp</span>
        <span className='dropdown__link'>My garage</span>
        <span className='dropdown__link'>Saved Rides</span>
        <span className='dropdown__link'>Sign Out</span>
      </div>
      <div className='dropdown__nav'>
        <ExternalNav />
      </div>
    </div>
  );
}

export default Dropdown;
