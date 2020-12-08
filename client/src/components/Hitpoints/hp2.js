import React, { useState } from 'react';
import HPModal from './hpModal';
import './hp.css';

function Counter2 () {

    const [count, setCount]= useState(12);    
    
    return (
    
        <div className='hp2Stat'>
            <HPModal />
            <div className='hp2TextNum'>
                <button className='hp2Bold' onClick={() => setCount(count +1)}>+</button>
                
                <p className='hp2'>{count}</p>
                
                <button className='hp2Bold' onClick={() => setCount(count -1)}>-</button>
            </div>
            <h4 className='mobileFontSize2'>Hitpoints</h4>
        </div>
        
    );
}

export default Counter2;