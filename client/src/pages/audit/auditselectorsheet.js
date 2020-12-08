import React from 'react';
import Selector from '../../components/AuditModal/app';
import NavBot from '../../components/NavBottom/NavBot';
import NavBlank from '../../components/NavBlank/NavBlank';
import '../css/reset.css';
import '../css/style.css';

function AuditSelector() {
  return (
    <div className='body'>
      <NavBlank/>
      <div className='mainContainer'>
        <Selector />
      </div>
      <NavBot />
    </div>
  );
}

export default AuditSelector;