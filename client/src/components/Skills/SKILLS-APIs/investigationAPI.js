import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function InvestigationAPI () {

    const [Investigation, setInvestigation] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/investigation`)
            .then(res => {
                setInvestigation({Investigation: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Investigation:</h2> 
            <p className='modalP'>{Investigation.Investigation}</p>
        </div>
        );
    
}

export default InvestigationAPI;