import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function SpareTheDyingAPI () {

    const [SpareTheDying, setSpareTheDying] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/pare-the-dying`)
            .then(res => {
                setSpareTheDying({SpareTheDying: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Spare the Dying:</h2> 
            <p className='modalP'>{SpareTheDying.SpareTheDying}</p>
        </div>
        );
    
}

export default SpareTheDyingAPI;