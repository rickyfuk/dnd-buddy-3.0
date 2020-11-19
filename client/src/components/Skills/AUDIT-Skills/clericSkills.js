import React from 'react';
import '../skills.css'
import SkillsModal from '../skillsModal';

function ClericSkills() {
    return(

        <div>
            <div className='skillsBackground'>
                <SkillsModal />
                <h4 id='skills' className='skillsTitle'>Skills:</h4>
                <p className='skillsText'>Medicine: +4</p>
                <p className='skillsText'>History: +4</p>
                <p className='skillsText'>Religion: +4</p>
                <p className='skillsText'>Insight: +4</p>
            </div>
        </div>

    );
}

export default ClericSkills;