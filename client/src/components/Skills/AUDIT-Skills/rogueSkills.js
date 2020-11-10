import React from 'react';
import '../skills.css'
import SkillsModal from '../skillsModal';

function Skills() {
    return(

        <div>
            <div className='skillsBackground'>
                <SkillsModal />
                <h4 id='skills' className='skillsTitle'>Skills:</h4>
                <p className='skillsText'>Stealth: +4</p>
                <p className='skillsText'>Acrobatics: +4</p>
                <p className='skillsText'>Slight of Hand: +4</p>
                <p className='skillsText'>Persuasion: +4</p>
            </div>
        </div>

    );
}

export default Skills;