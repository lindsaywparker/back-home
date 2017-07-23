import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // const right side button to Styles or Favorites based on page..
  // location, etc.
  // both buttons render conditionally, not on Home.

  return (
    <div className='header'>
      {/* back button that uses history to go back */}
      <NavLink to='/'>
        <h1>BACK HOME</h1>
      </NavLink>
      {/* right side button */}
    </div>
  );
};

export default Header;