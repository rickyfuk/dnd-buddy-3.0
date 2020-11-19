import React from 'react';
import './creationModal.css';

function RaceGenerate() {

    // function dragonborn() {
    //     localStorage.setItem('Race', 'Dragonborn');
    //     window.location.reload(true);
    // }

    function dwarf() {
        localStorage.setItem('Race', 'Dwarf');
        window.location.reload(true);
    }

    function elf() {
        localStorage.setItem('Race', 'Elf');
        window.location.reload(true);
    }

    // function gnome() {
    //     localStorage.setItem('Race', 'Gnome');
    //     window.location.reload(true);
    // }

    // function halfelf() {
    //     localStorage.setItem('Race', 'Half-Elf');
    //     window.location.reload(true);
    // }

    // function halfling() {
    //     localStorage.setItem('Race', 'Halfling');
    //     window.location.reload(true);
    // }

    // function halforc() {
    //     localStorage.setItem('Race', 'Half-Orc');
    //     window.location.reload(true);
    // }

    function human() {
        localStorage.setItem('Race', 'Human');
        window.location.reload(true);
    }

    function tiefling() {
        localStorage.setItem('Race', 'Tiefling');
        window.location.reload(true);
    }

    return(

        <div className='centered'>
            <div className='raceBackground'>
                
                <h4 className='raceTitle'>Race:</h4>
                
                <p className='raceButtons'>
                    {/* <button className='btn btn-dark rbutton revealButton' type='button' onClick={dragonborn}>
                        Dragonborn
                    </button> */}
                    <button className='btn btn-dark rbutton revealButton' type='button' onClick={dwarf}>
                        Dwarf
                    </button>
                    <button className='btn btn-dark rbutton revealButton' type='button' onClick={elf}>
                        Elf
                    </button>
                </p>
                {/* <p className='raceButtons'>
                    <button className='btn btn-dark rbutton revealButton' type='button' onClick={gnome}>
                        Gnome
                    </button>
                    <button className='btn btn-dark rbutton revealButton' type='button' onClick={halfelf}>
                        Half-Elf
                    </button>
                    <button className='btn btn-dark rbutton revealButton' type='button' onClick={halfling}>
                        Halfling
                    </button>
                </p> */}
                <p className='raceButtons'>
                    {/* <button className='btn btn-dark rbutton revealButton' type='button' onClick={halforc}>
                        Half-Orc
                    </button> */}
                    <button className='btn btn-dark rbutton revealButton' type='button' onClick={human}>
                        Human
                    </button>
                    <button className='btn btn-dark rbutton revealButton' type='button' onClick={tiefling}>
                        Tiefling
                    </button>
                </p>
            </div>
        </div>

    );
}

export default RaceGenerate;