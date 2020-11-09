import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function ReligionAPI () {

    const [Religion, setReligion] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/religion`)
            .then(res => {
                setReligion({Religion: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Religion:</h2> 
            <p className='modalP'>{Religion.Religion}</p>
        </div>
        );
    
}

export default ReligionAPI;