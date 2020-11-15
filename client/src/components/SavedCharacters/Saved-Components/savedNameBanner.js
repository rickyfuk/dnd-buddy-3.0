import React from 'react';

function SavedBanner() {

    return(
        <div className='savedbanner'>
            <div className='namebanner'>
                <h2>Character Name</h2>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        {/* <a id='gender' href='/'> </a> */}
                        <ul id='genderUL' className='menu'>Gender</ul>
                    </li>
                    <li className='dropdown'>
                        {/* <a id='race' href='/'> </a> */}
                        <ul id='raceUL' className='menu'>Race</ul>
                    </li>
                    <li className='dropdown'>
                        {/* <a id='class' href='/'> </a> */}
                        <ul id='classUL' className='menu'>Class</ul>
                    </li>
                    <li className='dropdown'>
                        {/* <a id='class' href='/'> </a> */}
                        <ul id='classUL' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SavedBanner