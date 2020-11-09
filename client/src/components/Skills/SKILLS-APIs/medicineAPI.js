import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function MedicineAPI () {

    const [Medicine, setMedicine] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/medicine`)
            .then(res => {
                setMedicine({Medicine: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Medicine:</h2> 
            <p className='modalP'>{Medicine.Medicine}</p>
        </div>
        );
    
}

export default MedicineAPI;