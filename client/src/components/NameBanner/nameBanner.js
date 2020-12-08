import React from 'react';
import './nameBanner.css';

function NameBanner() {

    //Need to switch out localStorage for database route

    let characterName = localStorage.getItem('charName');
    let characterGen = localStorage.getItem('Gender');
    let characterRace = localStorage.getItem('Race');
    let characterClass = localStorage.getItem('Class');
    
    return(
        <div className='banner'>
            <div className='namebanner'>
                <h1 className='margintop'>{characterName}</h1>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='genderUL' className='menu'>{characterGen}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='raceUL' className='menu'>{characterRace}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL' className='menu'>{characterClass}</ul>
                    </li>
                    <li className='dropdown level'>
                        <ul id='classUL' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NameBanner;
