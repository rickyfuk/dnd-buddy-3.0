import React from 'react';
import './NavTop.css';

function NavTop() {
  return (
    
    <nav className='navbarTop navbar fixed-top navbar-light'>
      <a className='navbar-brand' href='/savedcharacters'>Saved Characters</a>
		  <a className='navbar-brand' href='/create'>Character Creation</a>
      <a className='navbar-brand' href='/dungeonmaster'>Dungeon Master</a>
		  <a id='logout' className='navbar-brand' href='/'>Logout</a>
    </nav>

  );
}

export default NavTop;
