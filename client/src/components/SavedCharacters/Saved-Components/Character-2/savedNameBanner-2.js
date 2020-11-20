import React from 'react';

function SavedBannerTwo() {

    return(
        <div className='savedbanner'>
            <div className='namebanner'>
                <h2>Character Name</h2>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='genderUL2' className='menu'>Gender</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='raceUL2' className='menu'>Race</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL2' className='menu'>Class</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='levelUL2' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SavedBannerTwo;