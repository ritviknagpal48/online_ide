import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({}) => {
  return (
    <div>
      <nav className='#616161 grey darken-2'>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo center'>
            <b
              className='#f9a825 yellow-text text-darken-3'
              style={{ fontSize: '70px' }}
            >
              IDE
            </b>
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <a href='/c++'>C++</a>
            </li>
            <li>
              <a href='/python'>Python</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
