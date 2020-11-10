import React from 'react';
import '../skills.css'
import SkillsModal from '../skillsModal';

function Skills() {
    return(

        <div>
            <div className='skillsBackground'>
                <SkillsModal />
                <h4 id='skills' className='skillsTitle'>Skills:</h4>
                <p className='skillsText'>Athletics: +5</p>
                <p className='skillsText'>Intimidation: +1</p>
            </div>
        </div>

    );
}

export default Skills;