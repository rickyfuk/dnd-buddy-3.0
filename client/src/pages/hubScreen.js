import React from 'react';
import HubModal from '../components/HubModal/app';
import NavBot from '../components/NavBottom/NavBot';
import NavBlank from '../components/NavBlank/NavBlank';
import './css/reset.css';
import './css/style.css';

function HubScreen() {
  return (
    <div className='body'>
      <NavBlank/>
      <div className='mainContainer'>
        <HubModal />
      </div>
      <NavBot />
    </div>
  );
}

export default HubScreen;