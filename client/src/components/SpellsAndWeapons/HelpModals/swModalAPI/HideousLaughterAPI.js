import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function HideousLaughterAPI () {

    const [HideousLaughter, setHideousLaughter] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/hideous-laughter`)
            .then(res => {
                setHideousLaughter({HideousLaughter: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Hideous Laughter:</h2> 
            <p className='modalP'>{HideousLaughter.HideousLaughter}</p>
        </div>
        );
    
}

export default HideousLaughterAPI;