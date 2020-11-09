import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function SurvivalAPI () {

    const [Survival, setSurvival] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/survival`)
            .then(res => {
                setSurvival({Survival: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Survival:</h2> 
            <p className='modalP'>{Survival.Survival}</p>
        </div>
        );
    
}

export default SurvivalAPI;