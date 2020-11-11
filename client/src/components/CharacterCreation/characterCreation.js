import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../pages/css/reset.css';
import '../../pages/css/style.css';
import './creationModal.css';
import NavTop from '../NavTop/NavTop';
import NavBot from '../NavBottom/NavBot';


function CharacterCreation() {
  return (
    <Router>
      <div className='body'>
        <NavTop />
        <div className='mainContainer'>
     
        </div>
        <NavBot />
      </div>
    </Router>  
  );
}

export default CharacterCreation;