import React from 'react';
import './setupModal.css';



function WelcomeModal() {

    let i = 0;
    
    let modal= <div>
        <h1 className='modalTitle'>Welcome to ABC RPG!</h1>
        <p className='modalP'> </p>
        <button className="button revealButton" type="button" onClick={() => this.showPopup(true)} >
            Login
        </button>
        <button className="button revealButton" type="button" onClick={() => this.showPopup(true)} >
            Register
        </button>
        <button className="button revealButton" type="button" onClick={() => this.showPopup(true)} >
            Try Demo Mode 
        </button>
    </div>;

    return (
            <span>{modal}</span>
    );
}

export default WelcomeModal;