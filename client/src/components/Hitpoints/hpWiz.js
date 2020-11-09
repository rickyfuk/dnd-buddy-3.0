import React, { useState } from 'react';
import HPModal from './hpModal';
import './hp.css';

function Counter () {

    const [count, setCount]= useState(10);
    
    return (
    
        <div className='hpStat'>
            <HPModal />
            <div className='hpTextNum'>
                <button className='hpBold' onClick={() => setCount(count +1)}>+</button>
                
                <p className='hp'>{count}</p>
                
                <button className='hpBold' onClick={() => setCount(count -1)}>-</button>
            </div>
            <h4>Hitpoints</h4>
        </div>
        
    );
}

export default Counter;