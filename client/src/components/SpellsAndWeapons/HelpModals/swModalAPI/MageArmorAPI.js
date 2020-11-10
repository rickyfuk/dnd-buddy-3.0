import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function MageArmorAPI () {

    const [MageArmor, setMageArmor] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/mage-armor`)
            .then(res => {
                setMageArmor({MageArmor: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Mage Armor:</h2> 
            <p className='modalP'>{MageArmor.MageArmor}</p>
        </div>
        );
    
}

export default MageArmorAPI;