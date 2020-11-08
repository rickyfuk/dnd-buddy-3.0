import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './pages/css/reset.css';
import './pages/css/style.css';
import InitialModal from './components/WelcomeModal/setupModal';
import NavBlank from './components/NavBlank/NavBlank';
import NavBot from './components/NavBottom/NavBot';
import wizardCharacterSheet from './pages/wizardcharactersheet';
import rogueCharacterSheet from './pages/roguecharactersheet';
import fighterCharacterSheet from './pages/fightercharactersheet';

function App() {
  return (
    <Router>
      <div className='body'>
        <NavBlank />
        <div className='mainContainer'>
          <Route exact path='/wizard' component={wizardCharacterSheet} />
          <Route exact path='/rogue' component={rogueCharacterSheet} />
          <Route exact path='/fighter' component={fighterCharacterSheet} />
          <Route exact path='/' component={InitialModal} />
          {/* <InitialModal /> */}
        </div>
        <NavBot />
      </div>
    </Router>  
  );
}

export default App;
