import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <container className='homepage-btns-container'>
        <NavLink to='/styles'>
          <button className='homepage-btns styles'>
            <h2 className='btn-title'>Compare Styles</h2>
          </button>
        </NavLink>
        <NavLink to='/favorites'>
          <button className='homepage-btns favorites'>
            <h2 className='btn-title'>View Favorites</h2>
          </button>
        </NavLink>
      </container>
    </div>
  );
};

export default Home;