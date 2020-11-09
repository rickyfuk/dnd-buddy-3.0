import React, { useState, useEffect } from 'react';
import '../leftStatsModal.css'
import axios from 'axios';

function ConstitutionText () {

    const [Constitution, setConstitution] = useState('');
    const [ConstitutionCheck, setConstitutionCheck] = useState('');

        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/ability-scores/con`)
            .then(res => {
                setConstitution({Constitution: res.data.desc[0]});
                setConstitutionCheck({ConstitutionCheck: res.data.desc[1]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Constitution:</h2> 
            <p className='modalP'>{Constitution.Constitution}</p>
            <p className='modalP'>{ConstitutionCheck.ConstitutionCheck}</p>
        </div>
        );
    
}

export default ConstitutionText;