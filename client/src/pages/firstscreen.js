import React from 'react';
import InitialModal from '../components/WelcomeModal';
import NavBot from '../components/NavBottom/NavBot';
import NavBlank from '../components/NavBlank/NavBlank';
import './css/reset.css';
import './css/style.css';

function FirstScreen() {
  return (
    <div className='body'>
      <NavBlank/>
      <div className='mainContainer'>
        <InitialModal />
      </div>
      <NavBot />
    </div>
  );
}

export default FirstScreen;