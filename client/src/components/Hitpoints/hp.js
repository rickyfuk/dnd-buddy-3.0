import React, { useState } from 'react';
import './hp.css';

function Counter () {

    const [count, setCount]= useState(12);
    
    return (
    
        <div className='hpStat'>
            <div className='hpHelpButton'>
                <a className='fa fa-question-circle' id='hp-guide' data-reveal-id='hp-modal'> </a>
            </div>
            <div className='hpTextNum'>
                <button className='hpBold' onClick={() => setCount(count +1)}>+</button>
                
                <p>{count}</p>
                
                <button className='hpBold' onClick={() => setCount(count -1)}>-</button>
            </div>
            <h4>Hitpoints</h4>
        </div>
        
    );
}

export default Counter;