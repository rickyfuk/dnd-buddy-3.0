import React, { useState, useEffect } from 'react';
import '../../spellsAndWeapons.css'
import axios from 'axios';

function FavoredEnemyAPI () {

    const [FavoredEnemy, setFavoredEnemy] = useState('');
    
        useEffect ( () => {
        axios.get(`https://www.dnd5eapi.co/api/features/favored-enemy-1-type`)
            .then(res => {
                setFavoredEnemy({FavoredEnemy: res.data.desc[0]});
            });
    },[])

        return (
        <div>
            <h2 className='modalTitle'>Favored Enemy:</h2> 
            <p className='modalP'>{FavoredEnemy.FavoredEnemy}</p>
        </div>
        );
    
}

export default FavoredEnemyAPI;