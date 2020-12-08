import React from 'react';

function SavedBannerOne() {

    let Name1 = localStorage.getItem('name1');
    let Gender1 = localStorage.getItem('gender1');
    let Class1 = localStorage.getItem('charClass1');
    let Race1 = localStorage.getItem('race1');

    return(
        <div className='savedbanner'>
            <div className='namebanner'>
                <h2>{Name1}</h2>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='genderUL1' className='menu'>{Gender1}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='raceUL1' className='menu'>{Race1}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL1' className='menu'>{Class1}</ul>
                    </li>
                    <li className='dropdown level'>
                        <ul id='levelUL1' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SavedBannerOne;