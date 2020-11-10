import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function MageHandAPI () {

    const [MageHand, setMageHand] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/mage-hand`)
            .then(res => {
                setMageHand({MageHand: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Mage Hand:</h2> 
            <p className='modalP'>{MageHand.MageHand}</p>
        </div>
        );
    
}

export default MageHandAPI;