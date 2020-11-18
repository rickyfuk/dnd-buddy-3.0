import React from 'react';
import './dungeonmaster.css';
import '../css/reset.css';
import '../css/style.css';
import NavTop from '../../components/NavTop/NavTop';
import NavBot from '../../components/NavBottom/NavBot';

function DungeonMaster() {

  return (
      <div className='body'>
        <NavTop />
        <div className='mainContainer'>
          <div className='bigCentered'>
            <i className='df-d20-20'></i>
            <p className='lilCentered'>Under Construction</p>
          </div>
        </div>
        <NavBot />
      </div>
  );
}

export default DungeonMaster;