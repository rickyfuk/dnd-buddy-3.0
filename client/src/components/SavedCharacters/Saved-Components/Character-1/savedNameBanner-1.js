import React from 'react';

function SavedBannerOne() {

    return(
        <div className='savedbanner'>
            <div className='namebanner'>
                <h2>Character Name</h2>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='genderUL1' className='menu'>Gender</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='raceUL1' className='menu'>Race</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL1' className='menu'>Class</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='levelUL1' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SavedBannerOne;