import React from 'react';
import './setupModal.css';
import { Link } from 'react-router-dom';



function WelcomeModal() {

    localStorage.setItem('name1', 'Alma');
    localStorage.setItem('gender1', 'Female');
    localStorage.setItem('charClass1', 'Rogue');
    localStorage.setItem('race1', 'Human');

    localStorage.setItem('name2', 'Tarous');
    localStorage.setItem('gender2', 'Male');
    localStorage.setItem('charClass2', 'Cleric');
    localStorage.setItem('race2', 'Dwarf');

    localStorage.setItem('name3', 'Madrigal');
    localStorage.setItem('gender3', 'Male');
    localStorage.setItem('charClass3', 'Wizard');
    localStorage.setItem('race3', 'Tiefling');
        
    let modal= <div>
        
        <h1 className='modalTitle'>Welcome to the RPG: Adventurer's Academy</h1>
        <p className='modalP2'>Within the halls of the RPG: Adventurer’s Academy, you will be given the opportunity to learn the basic steps of any table-top RPG <br></br> such as going on the offensive, casting powerful spells, and evading traps.</p>
        <p className='modalP2'>All prospective students will be granted access to our Audit-Mode.</p>
        <p className='modalP2'>While in Audit-Mode, prospective students will be able to study the Fighter, Wizard, and Rogue classes with a generic setup.</p>
        <p className='modalP2'>If you wish to further your RPG education and gain access to all our Academy's features, such as character creation, weapon <br></br>and spell selection and host your own campaigns, please register.</p>
    <div className='navigation'>
        <Link to={'/login'} className='login'>          
            Login
        </Link>

        <Link to= {'/register'} className='register'>
            Register
        </Link>     

        <Link to= {'/audit'} className='audit'>
            Audit
        </Link>
    </div>
    </div>;

    return (
            <span>{modal}</span>
    );
}

export default WelcomeModal;