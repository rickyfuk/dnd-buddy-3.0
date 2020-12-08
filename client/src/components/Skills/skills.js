import React from 'react';
import './skills.css'
import BardSkills from './AUDIT-Skills/bardSkills';
import ClericSkills from './AUDIT-Skills/clericSkills';
import FighterSkills from './AUDIT-Skills/fighterSkills';
import RangerSkills from './AUDIT-Skills/rangerSkills';
import RogueSkills from './AUDIT-Skills/rogueSkills';
import WizardSkills from './AUDIT-Skills/wizardSkills';

function Skills() {
    
    
    let value= localStorage.getItem('Class');  
    switch (value) {
    
    case 'Bard':
        value = <BardSkills />;
        break;
    case 'Cleric':
        value = <ClericSkills />;       
        break;
    case 'Fighter':
        value = <FighterSkills />;       
        break;
    case 'Ranger':
        value = <RangerSkills />;        
        break;
    case 'Rogue':
        value = <RogueSkills />;        
        break;    
    case 'Wizard':
        value = <WizardSkills />;        
        break;  
    }
    
    return(

        <div className='borderBox'>     
            <h4 className='skillsTexter'>{value}</h4>           
        </div>

    );
}

export default Skills;
