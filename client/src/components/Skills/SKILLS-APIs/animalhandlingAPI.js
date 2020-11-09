import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function AnimalHandlingAPI () {

    const [AnimalHandling, setAnimalHandling] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/animal-handling`)
            .then(res => {
                setAnimalHandling({AnimalHandling: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>AnimalHandling:</h2> 
            <p className='modalP'>{AnimalHandling.AnimalHandling}</p>
        </div>
        );
    
}

export default AnimalHandlingAPI;