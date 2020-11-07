import React from 'react';
import './nameBanner.css';

function NameBanner() {
    return(
        <div className='banner'>
            <div className='nbHelpButton'>
                <a className='fa fa-question-circle' href='/' id='nb-guide' data-reveal-id='nameBanner-modal'> </a>
            </div>
            <div className='namebanner'>
                <h1 id='characterName'>Humberferg</h1>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <a id='gender' href='/'> </a>
                        <ul id='genderUL' className='menu'>Gender</ul>
                    </li>
                    <li className='dropdown'>
                        <a id='race' href='/'> </a>
                        <ul id='raceUL' className='menu'>Race</ul>
                    </li>
                    <li className='dropdown'>
                        <a id='class' href='/'> </a>
                        <ul id='classUL' className='menu'>Class</ul>
                    </li>
                </ul>
            </div>
        </div>
       

    );
}

export default NameBanner;
