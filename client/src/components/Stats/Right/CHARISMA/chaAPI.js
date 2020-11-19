import React, { useState, useEffect } from 'react';
import '../rightStatsModal.css';
import axios from 'axios';

function IntelligenceText () {

    const [Intelligence, setIntelligence] = useState('');
    const [IntelligenceCheck, setIntelligenceCheck] = useState('');

        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/ability-scores/int`)
            .then(res => {
                setIntelligence({Intelligence: res.data.desc[0]});
                setIntelligenceCheck({IntelligenceCheck: res.data.desc[1]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Intelligence:</h2> 
            <p className='modalP'>{Intelligence.Intelligence}</p>
            <h2 className='modalTitle'>Check:</h2> 
            <p className='modalP'>{IntelligenceCheck.IntelligenceCheck}</p>
        </div>
        );
    
}

export default IntelligenceText;