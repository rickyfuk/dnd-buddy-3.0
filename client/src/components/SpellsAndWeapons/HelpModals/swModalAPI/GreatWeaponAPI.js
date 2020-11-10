import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function GreatWeaponAPI () {

    const [GreatWeapon, setGreatWeapon] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/features/fighter-fighting-style-great-weapon-fighting`)
            .then(res => {
                setGreatWeapon({GreatWeapon: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Great Weapon Fighting Style:</h2> 
            <p className='modalP'>{GreatWeapon.GreatWeapon}</p>
        </div>
        );
    
}

export default GreatWeaponAPI;