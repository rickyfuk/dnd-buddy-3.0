import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function PersuasionAPI () {

    const [Persuasion, setPersuasion] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/persuasion`)
            .then(res => {
                setPersuasion({Persuasion: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Persuasion:</h2> 
            <p className='modalP'>{Persuasion.Persuasion}</p>
        </div>
        );
    
}

export default PersuasionAPI;