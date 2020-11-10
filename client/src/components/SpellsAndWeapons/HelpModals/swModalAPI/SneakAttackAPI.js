import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css';
import axios from 'axios';

function SneakAttackAPI () {

    const [SneakAttack, setSneakAttack] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/features/sneak-attack`)
            .then(res => {
                setSneakAttack({SneakAttack: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Sneak Attack:</h2> 
            <p className='modalP'>{SneakAttack.SneakAttack}</p>
        </div>
        );
    
}

export default SneakAttackAPI;