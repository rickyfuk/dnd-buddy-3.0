import React from 'react';
import './skills.css'
import SkillsModal from './skillsModal';

function Skills() {
    return(

        <div>
            <div className='skillsBackground'>
                {/* <div className='skillsHelpButton'>
                    <a className='fa fa-question-circle' href='/' id='skill-guide' data-reveal-id='skill-modal'> </a>
                </div> */}
                <SkillsModal />
                <h4 id='skills' className='skillsTitle'>Skills:</h4>
                <h4 className='skillsText'>Get text from database.</h4>
            </div>
        </div>

    );
}

export default Skills;
