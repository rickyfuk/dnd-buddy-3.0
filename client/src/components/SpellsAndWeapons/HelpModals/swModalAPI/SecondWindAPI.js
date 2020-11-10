import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function SecondWindAPI () {

    const [SecondWind, setSecondWind] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/features/second-wind`)
            .then(res => {
                setSecondWind({SecondWind: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Second Wind:</h2> 
            <p className='modalP'>{SecondWind.SecondWind}</p>
        </div>
        );
    
}

export default SecondWindAPI;