import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function NatureAPI () {

    const [Nature, setNature] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/nature`)
            .then(res => {
                setNature({Nature: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Nature:</h2> 
            <p className='modalP'>{Nature.Nature}</p>
        </div>
        );
    
}

export default NatureAPI;