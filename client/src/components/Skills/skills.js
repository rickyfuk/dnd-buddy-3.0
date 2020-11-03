import React from 'react';
import './skills.css'

function Skills() {
    return(

        <div className='columnTwo'>
            <div className='skillsBackground'>
                <div className='skillsHelpButton'>
                    <a className='fa fa-question-circle' href='/' id='skill-guide' data-reveal-id='skill-modal'></a>
                </div>
                <h4 id='skills' className='skillsTitle'>Skills:</h4>
                <h4 className='skillsText'></h4>
            </div>
        </div>

    );
}

export default Skills;
