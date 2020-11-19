import React from 'react';
import '../skills.css'
import SkillsModal from '../skillsModal';

function RangerSkills() {
    return(

        <div>
            <div className='skillsBackground'>
                <SkillsModal />
                <h4 id='skills' className='skillsTitle'>Skills:</h4>
                <p className='skillsText'>Animal Handling: +4</p>
                <p className='skillsText'>Survival: +4</p>                
                <p className='skillsText'>Nature: +4</p>
            </div>
        </div>

    );
}

export default RangerSkills;