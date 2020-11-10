import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function NaturalExplorerAPI () {

    const [NaturalExplorer, setNaturalExplorer] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/features/natural-explorer-1-terrain-type`)
            .then(res => {
                setNaturalExplorer({NaturalExplorer: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Natural Explorer:</h2> 
            <p className='modalP'>{NaturalExplorer.NaturalExplorer}</p>
        </div>
        );
    
}

export default NaturalExplorerAPI;