import React, { useState, useEffect } from 'react';
import '../rightStatsModal.css';
import axios from 'axios';

function CharismaText () {

    const [Charisma, setCharisma] = useState('');
    const [CharismaCheck, setCharismaCheck] = useState('');

        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/ability-scores/cha`)
            .then(res => {
                setCharisma({Charisma: res.data.desc[0]});
                setCharismaCheck({CharismaCheck: res.data.desc[1]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Charisma:</h2> 
            <p className='modalP'>{Charisma.Charisma}</p>
            <p className='modalP'>{CharismaCheck.CharismaCheck}</p>
        </div>
        );
    
}

export default CharismaText;