import React from 'react';
import './NavTop.css';

function NavTop() {
  return (
    
    <nav className='navbarTop navbar fixed-top navbar-light'>
      <a className='navbar-brand' id='index-user-guide' href='/'>User Guide</a>
		  <a className='navbar-brand' href='/'>Character Setup</a>
		  <a id='savetoDB' className='navbar-brand' href='/'>Save</a>
		  <a id='logout' className='navbar-brand' href='/'>Logout</a>
    </nav>

  );
}

export default NavTop;
