import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({}) => {
  return (
    <div>
      <nav>
        <div className='nav-wrapper #80cbc4 teal lighten-3'>
          <a href='/' className='brand-logo'>
            <b
              className='#004d40 teal-text text-darken-4'
              style={{ fontSize: '70px' }}
            >
              IDE
            </b>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <button type='submit' className='btn waves-effect waves-light'>
                C++
              </button>
            </li>
            <li>
              <button type='submit' className='btn waves-effect waves-light'>
                Python
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
