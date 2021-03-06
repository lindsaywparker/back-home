import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ location }) => {
  return (
    <div className='header'>
      <NavLink to='/'>
        <h1>BACK HOME</h1>
      </NavLink>
      <container className='nav-btn-container'>
        {(location.pathname !== '/styles') &&
          <div className='header-btn'>
            <NavLink to='/styles'>
              <h4 className='nav-btn'>Styles</h4>
            </NavLink>
          </div>}
        {(location.pathname !== '/favorites') &&
          <div className='header-btn'>
            <NavLink to='/favorites'>
              <h4 className='nav-btn'>Favorites</h4>
            </NavLink>
          </div>}
        {(location.pathname !== '/search') &&
          <div className='header-btn'>
            <NavLink to='/search'>
              <h4 className='nav-btn'>Search</h4>
            </NavLink>
          </div>}
        {/* <h4 className='nav-btn'>See More</h4> */}
      </container>
    </div>
  );
};

export default Header;