import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function CureWoundsAPI () {

    const [CureWounds, setCureWounds] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/cure-wounds`)
            .then(res => {
                setCureWounds({CureWounds: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Cure Wounds:</h2> 
            <p className='modalP'>{CureWounds.CureWounds}</p>
        </div>
        );
    
}

export default CureWoundsAPI;