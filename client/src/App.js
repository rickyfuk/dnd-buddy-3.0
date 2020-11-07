import React from 'react';
import './pages/css/reset.css';
import './pages/css/style.css';
import InitialModal from './components/WelcomeModal/setupModal';
import NavBlank from './components/NavBlank/NavBlank';
import NavBot from './components/NavBottom/NavBot';

function App() {
  return (
    <div className='body'>
      <NavBlank />
      <div className='mainContainer'>
        <InitialModal />
      </div>
      <NavBot />
    </div>
  );
}

export default App;
