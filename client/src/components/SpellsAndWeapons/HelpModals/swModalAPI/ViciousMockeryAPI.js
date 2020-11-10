import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function ViciousMockeryAPI () {

    const [ViciousMockery, setViciousMockery] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/spells/vicious-mockery`)
            .then(res => {
                setViciousMockery({ViciousMockery: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Vicious Mockery:</h2> 
            <p className='modalP'>{ViciousMockery.ViciousMockery}</p>
        </div>
        );
    
}

export default ViciousMockeryAPI;