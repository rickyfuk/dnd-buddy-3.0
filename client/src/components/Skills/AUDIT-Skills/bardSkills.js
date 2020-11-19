import React from 'react';
import '../skills.css'
import SkillsModal from '../skillsModal';

function BardSkills() {
    return(

        <div>
            <div className='skillsBackground'>
                <SkillsModal />
                <h4 id='skills' className='skillsTitle'>Skills:</h4>
                <p className='skillsText'>Performance: +4</p>
                <p className='skillsText'>Deception: +4</p>
                <p className='skillsText'>Slight of Hand: +4</p>
                <p className='skillsText'>Persuasion: +4</p>
            </div>
        </div>

    );
}

export default BardSkills;