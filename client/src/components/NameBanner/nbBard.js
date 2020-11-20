import React, { useState } from 'react';
import NameEditor from './nameEditor';
import NBModal from './nbModal';
import './nameBanner.css';

function NameBanner() {


    const [charName, setcharName] = useState('Rykyn Starsong');  
    
    function handleNameChange (event) {
        console.log(event);

        setcharName(event.target.value);
    }
    const className = localStorage.setItem('Class', 'Bard');
    console.log(className);

    return(
        <div className='banner'>
            <NBModal />
            <div className='namebanner'>
                <NameEditor handleNameChange={handleNameChange} charName={charName}/>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='genderUL' className='menu'>Male</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='raceUL' className='menu'>Tiefling</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL' className='menu'>Bard</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
       

    );
}

export default NameBanner;