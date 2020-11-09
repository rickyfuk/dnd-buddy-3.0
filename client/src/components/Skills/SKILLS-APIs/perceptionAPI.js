import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function PerceptionAPI () {

    const [Perception, setPerception] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/perception`)
            .then(res => {
                setPerception({Perception: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Perception:</h2> 
            <p className='modalP'>{Perception.Perception}</p>
        </div>
        );
    
}

export default PerceptionAPI;