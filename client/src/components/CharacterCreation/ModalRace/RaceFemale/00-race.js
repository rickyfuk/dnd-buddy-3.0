import React from 'react';
import './raceModal.css';
import RaceCarousel from './FemaleCarousel.js';



function Selector() {
    
    let modal= <div>      
        < RaceCarousel />
    </div>;



    return (
            <span>{modal}</span>
    );
}

export default Selector;