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
import playerSheet from './pages/playerSheet';
import CharacterSheet from './pages/characterSheet';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <Router>
      <div className='body'>
        <NavBlank />
        <div className='mainContainer'>
          <Route exact path='/player' component={playerSheet} />
          <Route exact path='/wizard' component={wizardCharacterSheet} />
          <Route exact path='/rogue' component={rogueCharacterSheet} />
          <Route exact path='/fighter' component={fighterCharacterSheet} />
          <Route exact path='/main' component={CharacterSheet} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/' component={InitialModal} />
        </div>
        <NavBot />
      </div>
    </Router>  
  );
}

export default App;
