import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function FireBoltAPI () {

    const [FireBolt, setFireBolt] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/fire-bolt`)
            .then(res => {
                setFireBolt({FireBolt: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Fire Bolt:</h2> 
            <p className='modalP'>{FireBolt.FireBolt}</p>
        </div>
        );
    
}

export default FireBoltAPI;