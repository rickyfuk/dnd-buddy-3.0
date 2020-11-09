import React, { useState, useEffect } from 'react';
import '../nameBanner.css'
import axios from 'axios';

function BannerText () {

    const [Banner, setBanner] = useState('');
    const [BannerStatus, setBannerStatus] = useState('');
// used Str call to check to see if things were working.  This took forever to get it all setup. 
// I'm getting up early tomorrow to finish this set of tasks, and then I want to continue on my image gen and CSS. 

        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/ability-scores/str`)
            .then(res => {
                setBanner({Banner: res.data.desc[0]});
                setBannerStatus({BannerStatus: res.data.desc[1]});
            });
    },[])

        return (
        <div>
            
            <p className='modalP'>{Banner.Banner}</p>
            <p className='modalP'>{BannerStatus.BannerStatus}</p>
        </div>
        );
    
}

export default BannerText;