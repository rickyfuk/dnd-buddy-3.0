import React, { useState, useEffect } from 'react';
import '../leftStatsModal.css'
import axios from 'axios';

function DexterityText () {

    const [Dexterity, setDexterity] = useState('');
    const [DexterityCheck, setDexterityCheck] = useState('');

        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/ability-scores/dex`)
            .then(res => {
                setDexterity({Dexterity: res.data.desc[0]});
                setDexterityCheck({DexterityCheck: res.data.desc[1]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Dexterity:</h2> 
            <p className='modalP'>{Dexterity.Dexterity}</p>
            <p className='modalP'>{DexterityCheck.DexterityCheck}</p>
        </div>
        );
    
}

export default DexterityText;