import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function HistoryAPI () {

    const [History, setHistory] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/history`)
            .then(res => {
                setHistory({History: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>History:</h2> 
            <p className='modalP'>{History.History}</p>
        </div>
        );
    
}

export default HistoryAPI;