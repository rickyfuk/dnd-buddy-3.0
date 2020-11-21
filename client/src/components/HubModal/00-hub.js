import React from 'react';
import './hubModal.css';

import { Link } from 'react-router-dom';





function Selector() {
    
    let modal= <div>      
        <div className="links-div">
        <Link to={'/gendermodal'}>
        <button className="button revealButton hubButton charCreation" type="button">            
            Character Creation
        </button>
        </Link>

        <Link to= {'/savedcharacters'}>
        <button className="button revealButton hubButton savedChar" type="button">
            Saved Characters
        </button>
        </Link>         

        <Link to= {'/dungeonmaster'}>
        <button className="button revealButton hubButton dungeonMaster" type="button">
            Dungeon Master
        </button>
        </Link>
        </div>
    </div>;



    return (
            <span>{modal}</span>
    );
}

export default Selector;