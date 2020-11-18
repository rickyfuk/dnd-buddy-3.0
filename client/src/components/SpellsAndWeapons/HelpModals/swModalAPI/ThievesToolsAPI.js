import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css';
import axios from 'axios';

function ThievesToolsAPI () {

    const [ThievesTools, setThievesTools] = useState('');
    
    useEffect ( () => {
    axios.get(`https://www.dnd5eapi.co/api/equipment/thieves-tools`)
        .then(res => {
            setThievesTools({ThievesTools: res.data.desc[0]});
            console.log(ThievesTools);
        });
    });

    return (
        <div>
            <h2 className='modalTitle'>Thieves' Tools:</h2> 
            <p className='modalP'>{ThievesTools.ThievesTools}</p>
        </div>
    );
    
}

export default ThievesToolsAPI;