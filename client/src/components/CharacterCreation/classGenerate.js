import React from 'react';
import './creationModal.css';

function ClassGenerate() {

    // function barbarian() {
    //     localStorage.setItem('Class', 'Barbarian');
    //     window.location.reload(true);
    // }

    function bard() {
        localStorage.setItem('Class', 'Bard');
        window.location.reload(true);
    }

    function cleric() {
        localStorage.setItem('Class', 'Cleric');
        window.location.reload(true);
    }

    // function druid() {
    //     localStorage.setItem('Class', 'Druid');
    //     window.location.reload(true);
    // }

    function fighter() {
        localStorage.setItem('Class', 'Fighter');
        window.location.reload(true);
    }

    // function monk() {
    //     localStorage.setItem('Class', 'Monk');
    //     window.location.reload(true);
    // }

    // function paladin() {
    //     localStorage.setItem('Class', 'Paladin');
    //     window.location.reload(true);
    // }

    function ranger() {
        localStorage.setItem('Class', 'Ranger');
        window.location.reload(true);
    }

    function rogue() {
        localStorage.setItem('Class', 'Rogue');
        window.location.reload(true);
    }

    // function sorcerer() {
    //     localStorage.setItem('Class', 'Sorcerer');
    //     window.location.reload(true);
    // }

    // function warlock() {
    //     localStorage.setItem('Class', 'Warlock');
    //     window.location.reload(true);
    // }

    function wizard() {
        localStorage.setItem('Class', 'Wizard');
        window.location.reload(true);
    }

    return (

        <div className='centered'>
            <div className='raceBackground'>
                
                <h4 className='raceTitle'>Class:</h4>
                
                <p className='raceButtons'>
                    {/* <button className='btn btn-dark cbutton revealButton' type='button' onClick={barbarian}>
                        Barbarian
                    </button> */}
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={bard}>
                        Bard
                    </button>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={cleric}>
                        Cleric
                    </button>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={fighter}>
                        Fighter
                    </button>
                </p>
                {/* <p className='raceButtons'>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={druid}>
                        Druid
                    </button>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={fighter}>
                        Fighter
                    </button>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={monk}>
                        Monk
                    </button>
                </p> */}
                <p className='raceButtons'>
                    {/* <button className='btn btn-dark cbutton revealButton' type='button' onClick={paladin}>
                        Paladin
                    </button> */}
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={ranger}>
                        Ranger
                    </button>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={rogue}>
                        Rogue
                    </button>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={wizard}>
                        Wizard
                    </button>
                </p>
                {/* <p className='raceButtons'>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={sorcerer}>
                        Sorcerer
                    </button>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={warlock}>
                        Warlock
                    </button>
                    <button className='btn btn-dark cbutton revealButton' type='button' onClick={wizard}>
                        Wizard
                    </button>
                </p> */}
            </div>
        </div>

    );
}

export default ClassGenerate;