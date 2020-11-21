import React from 'react';
import './raceModal.css';
import RaceCarousel from './MaleCarousel.js';



function Selector() {
    
    
    let modal= <div>      
        < RaceCarousel />
    </div>;



    return (
            <span>{modal}</span>
    );
}

export default Selector;