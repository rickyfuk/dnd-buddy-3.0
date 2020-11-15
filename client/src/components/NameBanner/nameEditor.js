import React from 'react';
import './nameBanner.css';

function NameEditor (props) {
  
  return (
    <input className='input' type='text' value={props.charName} onChange={props.handleNameChange}></input>

  );
    
}
  
export default NameEditor;