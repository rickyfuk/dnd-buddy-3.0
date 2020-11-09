import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function ArcanaAPI () {

    const [Arcana, setArcana] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/arcana`)
            .then(res => {
                setArcana({Arcana: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Arcana:</h2> 
            <p className='modalP'>{Arcana.Arcana}</p>
        </div>
        );
    
}

export default ArcanaAPI;