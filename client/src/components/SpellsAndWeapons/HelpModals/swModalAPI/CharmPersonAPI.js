import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function CharmPersonAPI () {

    const [CharmPerson, setCharmPerson] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/charm-person`)
            .then(res => {
                setCharmPerson({CharmPerson: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Charm Person:</h2> 
            <p className='modalP'>{CharmPerson.CharmPerson}</p>
        </div>
        );
    
}

export default CharmPersonAPI;