import React from 'react';
import './NavBot.css'

function NavBot() {
  return (

    <nav className='navbar fixed-bottom navbar-light navBottom'>
      <a className='navBottom' href='/'>Offense</a>
      <a className='navBottom' href='/'>Defense</a>
      <a className='navBottom' href='/'>Utility</a>
      <a className='navBottom' href='/'>Role Play</a>
	</nav>

  );
}

export default NavBot;
