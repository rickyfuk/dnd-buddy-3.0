import React, { useState } from 'react';
import HPModal from './hpModal';
import './hp.css';

function Counter () {

    const [count, setCount]= useState(12);

    localStorage.setItem('charName', 'Hobert');
    localStorage.setItem('name1', 'Elizabeth');
    localStorage.setItem('gender1', 'Female');
    localStorage.setItem('race1','Tiefling');
    localStorage.setItem('charClass1','Fighter')
    localStorage.setItem('name2', 'Dane');
    localStorage.setItem('gender2', 'Male');
    localStorage.setItem('race2','Dwarf');
    localStorage.setItem('charClass2','Bard')
    
    
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