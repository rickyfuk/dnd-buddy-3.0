import React from 'react';

function ClassEditor (props) {
  
  return (
    <ul className='menu' type='text' value={props.charClass} onChange={props.handleClassChange}></ul>

  );
    
}

export default ClassEditor;