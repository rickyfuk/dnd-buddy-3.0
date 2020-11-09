import React, { useState, useEffect } from 'react';
import '../rightStatsModal.css';
import axios from 'axios';

function WisdomText () {

    const [Wisdom, setWisdom] = useState('');
    const [WisdomCheck, setWisdomCheck] = useState('');

        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/ability-scores/wis`)
            .then(res => {
                setWisdom({Wisdom: res.data.desc[0]});
                setWisdomCheck({WisdomCheck: res.data.desc[1]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Wisdom:</h2> 
            <p className='modalP'>{Wisdom.Wisdom}</p>
            <p className='modalP'>{WisdomCheck.WisdomCheck}</p>
        </div>
        );
    
}

export default WisdomText;