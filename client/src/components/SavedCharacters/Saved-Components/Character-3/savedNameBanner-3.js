import React from 'react';

function SavedBannerThree() {

    let Name3 = localStorage.getItem('name3');
    let Gender3 = localStorage.getItem('gender3');
    let Class3 = localStorage.getItem('charClass3');
    let Race3 = localStorage.getItem('race3');

    return(
        <div className='savedbanner'>
            <div className='namebanner'>
                <h2>{Name3}</h2>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='genderUL3' className='menu'>{Gender3}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='raceUL3' className='menu'>{Race3}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL3' className='menu'>{Class3}</ul>
                    </li>
                    <li className='dropdown level'>
                        <ul id='levelUL3' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SavedBannerThree;