import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function InsightAPI () {

    const [Insight, setInsight] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/insight`)
            .then(res => {
                setInsight({Insight: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Insight:</h2> 
            <p className='modalP'>{Insight.Insight}</p>
        </div>
        );
    
}

export default InsightAPI;