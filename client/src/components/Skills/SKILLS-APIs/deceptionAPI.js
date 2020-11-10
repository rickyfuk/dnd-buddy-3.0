import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function DeceptionAPI () {

    const [Deception, setDeception] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/deception`)
            .then(res => {
                setDeception({Deception: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Deception:</h2> 
            <p className='modalP'>{Deception.Deception}</p>
        </div>
        );
    
}

export default DeceptionAPI;