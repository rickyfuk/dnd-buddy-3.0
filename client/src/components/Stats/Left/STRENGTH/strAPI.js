import React, { useState, useEffect } from 'react';
import '../leftStatsModal.css'
import axios from 'axios';

function StrengthText () {

    const [strength, setstrength] = useState('');
    const [strengthCheck, setstrengthCheck] = useState('');

        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/ability-scores/str`)
            .then(res => {
                setstrength({strength: res.data.desc[0]});
                setstrengthCheck({strengthCheck: res.data.desc[1]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Strength:</h2> 
            <p className='modalP'>{strength.strength}</p>
            <p className='modalP'>{strengthCheck.strengthCheck}</p>
        </div>
        );
    
}

export default StrengthText;