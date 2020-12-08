import React from 'react';
import './NavBot.css';

function NavBotAlt() {

  return (

    <div className='mobileBotNav'>
        <nav className='navbarBottom navbar fixed-bottom navbar-light'>
            <a className='navbar-brand' href='/main'>
            <button className='botNav-icon fa fa-home'></button>
            </a>
            <a className='navbar-brand' href='/attack'>
            <button className='botNav-icon fa fa-bomb'></button>
            </a>
            <a className='navbar-brand' href='/defense'>
            <button className='botNav-icon fa fa-shield'></button>
            </a>
            <a className='navbar-brand' href='/utility'>
            <button className='botNav-icon fa fa-cogs'></button>
            </a>
            <a href='/rp' className='navbar-brand'>
            <button className='botNav-icon fa fa-commenting-o'></button>
            </a>
        </nav>
    </div>
  );
}

export default NavBotAlt;