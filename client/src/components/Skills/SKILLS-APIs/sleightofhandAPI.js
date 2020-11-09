import React, { useState, useEffect } from 'react';
import '../skills.css'
import axios from 'axios';

function SleightofHandAPI () {

    const [SleightofHand, setSleightofHand] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/skills/sleight-of-hand`)
            .then(res => {
                setSleightofHand({SleightofHand: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>SleightofHand:</h2> 
            <p className='modalP'>{SleightofHand.SleightofHand}</p>
        </div>
        );
    
}

export default SleightofHandAPI;