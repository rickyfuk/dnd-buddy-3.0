import React from 'react';
import Stats from './components/Stats/stats';
import NavTop from './components/NavTop/NavTop';
import NavBot from './components/NavBottom/NavBot';
import Dice from './components/Dice/dice';
import './pages/css/style.css';

function App() {
  return (
    <div>
      <NavTop />
      <div className='body'>
        <Stats />
        <div className='dice'>
          <Dice />
        </div>
      </div>
      <NavBot />
    </div>
  );
}

export default App;
