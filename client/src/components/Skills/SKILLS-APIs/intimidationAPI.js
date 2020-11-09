import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function IntimidationAPI () {

    const [Intimidation, setIntimidation] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/intimidation`)
            .then(res => {
                setIntimidation({Intimidation: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Intimidation:</h2> 
            <p className='modalP'>{Intimidation.Intimidation}</p>
        </div>
        );
    
}

export default IntimidationAPI;