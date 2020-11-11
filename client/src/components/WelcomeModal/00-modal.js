import React from 'react';
import './setupModal.css';
import { Link } from 'react-router-dom';

function WelcomeModal() {
    
    let modal= <div>
        <h1 className='modalTitle'>Welcome to the RPG: Adventurer's Academy</h1>
        <p className='modalP'>Within the halls of the RPG: Adventurer’s Academy, you will be given the opportunity to learn the basic steps of any table-top RPG such as going on the offensive, casting powerful spells, and evading traps.</p>
        <p className='modalP'>All prospective students will be granted access to our Audit-Mode.</p>
        <p className='modalP'>While in Audit-Mode, prospective students will be able to study the Fighter, Wizard, and Rogue classes with a generic setup.</p>
        <p className='modalP'>If you wish to further your RPG education and gain access to all our Academy's features, such as character creation, weapon and spell selection and host your own campaigns, please register.</p>

        <Link to={'/login'}>
        <button className="button revealButton" type="button">            
            Login
        </button>
        </Link>

        <Link to= {'/register'}>
        <button className="button revealButton" type="button">
            Register
        </button>
        </Link>

        <Link to= {'/fighter'}>
        <button className="button revealButton" type="button">
            Audit Mode - Fighter
        </button>
        </Link>

        <Link to= {'/wizard'}>
        <button className="button revealButton" type="button">
            Audit Mode - Wizard
        </button>
        </Link>

        <Link to= {'/rogue'}>
        <button className="button revealButton" type="button">
            Audit Mode - Rogue
        </button>
        </Link>

        <Link to= {'/player'}>
        <button className="button revealButton" type="button">
            Player
        </button>
        </Link>

    </div>;

    return (
            <span>{modal}</span>
    );
}

export default WelcomeModal;