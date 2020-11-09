import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function AcrobaticsAPI () {

    const [Acrobatics, setAcrobatics] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/acrobatics`)
            .then(res => {
                setAcrobatics({Acrobatics: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Acrobatics:</h2> 
            <p className='modalP'>{Acrobatics.Acrobatics}</p>
        </div>
        );
    
}

export default AcrobaticsAPI;