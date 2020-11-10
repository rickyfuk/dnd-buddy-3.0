import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function HealingWordAPI () {

    const [HealingWord, setHealingWord] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/healing-word`)
            .then(res => {
                setHealingWord({HealingWord: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Healing Word:</h2> 
            <p className='modalP'>{HealingWord.HealingWord}</p>
        </div>
        );
    
}

export default HealingWordAPI;