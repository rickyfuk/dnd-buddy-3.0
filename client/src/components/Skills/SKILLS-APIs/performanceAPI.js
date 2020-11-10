import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function PerformanceAPI () {

    const [Performance, setPerformance] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/performance`)
            .then(res => {
                setPerformance({Performance: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Performance:</h2> 
            <p className='modalP'>{Performance.Performance}</p>
        </div>
        );
    
}

export default PerformanceAPI;