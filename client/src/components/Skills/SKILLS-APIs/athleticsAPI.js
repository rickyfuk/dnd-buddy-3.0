import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function AthleticsAPI () {

    const [Athletics, setAthletics] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/athletics`)
            .then(res => {
                setAthletics({Athletics: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Athletics:</h2> 
            <p className='modalP'>{Athletics.Athletics}</p>
        </div>
        );
    
}

export default AthleticsAPI;