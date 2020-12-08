import React from 'react';

function SavedBannerTwo() {



    let Name2 = localStorage.getItem('name2');
    let Gender2 = localStorage.getItem('gender2');
    let Class2 = localStorage.getItem('charClass2');
    let Race2 = localStorage.getItem('race2');

    return(
        <div className='savedbanner'>
            <div className='namebanner'>
                <h2>{Name2}</h2>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='genderUL2' className='menu'>{Gender2}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='raceUL2' className='menu'>{Race2}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL2' className='menu'>{Class2}</ul>
                    </li>
                    <li className='dropdown level'>
                        <ul id='levelUL2' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SavedBannerTwo;