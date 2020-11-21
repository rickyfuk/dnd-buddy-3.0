import React from 'react';

function SavedBannerThree() {

    return(
        <div className='savedbanner'>
            <div className='namebanner'>
                <h2>Character Name</h2>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='genderUL3' className='menu'>Gender</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='raceUL3' className='menu'>Race</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL3' className='menu'>Class</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='levelUL3' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SavedBannerThree;