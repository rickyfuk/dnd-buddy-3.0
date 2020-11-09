import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function StealthAPI () {

    const [Stealth, setStealth] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/stealth`)
            .then(res => {
                setStealth({Stealth: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Stealth:</h2> 
            <p className='modalP'>{Stealth.Stealth}</p>
        </div>
        );
    
}

export default StealthAPI;