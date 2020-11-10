import React from 'react';
import './NavBot.css';
import './dicesound.mp3';

// // function diceRoll(props) {

//   // const diceSound = new Audio('./dicesound.mp3');
//   // diceSound.play();

//   let diceClassName= 'df-d4-4';

//   let dSides = 4;

//   let num = Math.floor(Math.random() * dSides + 1);

//   console.log(num);

//   let diceClassName = 'df-d4-' + num;

//   console.log(diceClassName);

// }

function NavBot() {
  return (

    <nav className='navbarBottom navbar fixed-bottom navbar-light'>
        <i id='dice4' className='df-d4-4 dice-nav'></i>
        <i className="df-d6-6 dice-nav"></i>
        <i className="df-d8-8 dice-nav"></i>
        <i className="df-d10-10 dice-nav"></i>
        <i className="df-d12-12 dice-nav"></i>
        <i className="df-d20-20 dice-nav"></i>
	</nav>

  );
}

export default NavBot;