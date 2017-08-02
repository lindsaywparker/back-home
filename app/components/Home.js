import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='tagline'>DISCOVER YOUR DESIGN STYLE</h1>
      <container className='homepage-btns-container'>
        <NavLink to='/styles'>
          <button className='homepage-btns styles'>
            <h4 className='btn-title'>Compare Styles</h4>
          </button>
        </NavLink>
        <NavLink to='/favorites'>
          <button className='homepage-btns favorites'>
            <h4 className='btn-title'>View Favorites</h4>
          </button>
        </NavLink>
        {/* <NavLink to='/search'>
          <button className='homepage-btns search'>
            <h4 className='btn-title'>Search Photos</h4>
          </button>
        </NavLink> */}
      </container>
    </div>
  );
};

export default Home;