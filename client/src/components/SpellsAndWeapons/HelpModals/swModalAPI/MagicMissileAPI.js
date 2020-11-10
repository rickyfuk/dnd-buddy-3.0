import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function MagicMissileAPI () {

    const [MagicMissile, setMagicMissile] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/magic-missile`)
            .then(res => {
                setMagicMissile({MagicMissile: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Magic Missile:</h2> 
            <p className='modalP'>{MagicMissile.MagicMissile}</p>
        </div>
        );
    
}

export default MagicMissileAPI;