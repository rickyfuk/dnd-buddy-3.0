import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css';
import axios from 'axios';

function ThievesCantAPI () {

    const [ThievesCant, setThievesCant] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/features/thieves-cant`)
            .then(res => {
                setThievesCant({ThievesCant: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Thieves' Cant:</h2> 
            <p className='modalP'>{ThievesCant.ThievesCant}</p>
        </div>
        );
    
}

export default ThievesCantAPI;