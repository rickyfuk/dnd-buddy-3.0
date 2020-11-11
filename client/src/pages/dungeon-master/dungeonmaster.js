import React from 'react';
import './dungeonmaster.css'
import '../css/reset.css';
import '../css/style.css';
import NavTop from '../../components/NavTop/NavTop';
import NavBot from '../../components/NavBottom/NavBot';


function DungeonMaster() {

  let small = Math.floor(Math.random()*200);

  setInterval(function() {

    const dice = 'df-d20-';

    let num = Math.floor(Math.random() * 20 + 1);

    const diceClassName = dice+num;

  }, {small});

  return (
      <div className='body'>
        <NavTop />
        <div className='mainContainer'>
          <div>
            <p className='bigCentered'><i className={small}></i></p>
            <p className='lilCentered'>Under Construction</p>
          </div>
        </div>
        <NavBot />
      </div>
  );
}

export default DungeonMaster;