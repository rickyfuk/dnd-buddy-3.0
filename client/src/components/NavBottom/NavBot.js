import React from 'react';
import './NavBot.css';
import DiceRoll4 from '../Dice/dice4Modal';
import DiceRoll6 from '../Dice/dice6Modal';
import DiceRoll8 from '../Dice/dice8Modal';
import DiceRoll10 from '../Dice/dice10Modal';
import DiceRoll12 from '../Dice/dice12Modal';
import DiceRoll20 from '../Dice/dice20Modal';
import useSound from 'use-sound';
import DiceSound from '../Dice/dicesound.mp3';

function NavBot() {

  const [play] = useSound(DiceSound);

  return (

    <nav className='navbarBottom navbar dice-nav fixed-bottom navbar-light' onClick={play}>
      <DiceRoll4 />
      <DiceRoll6 />
      <DiceRoll8 />
      <DiceRoll10 />
      <DiceRoll12 />
      <DiceRoll20 />

    </nav>

  );
}

export default NavBot;