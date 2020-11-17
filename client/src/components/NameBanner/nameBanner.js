import React, { useState, useEffect } from 'react';
import NameEditor from './nameEditor';
import NBModal from './nbModal';
import './nameBanner.css';
import API from '../../util/API';

console.log("karl2:" + API);

function NameBanner() {

    
    return(
        <div className='banner'>
            <NBModal />
            <div className='namebanner'>
                <h1>CharacterName</h1>
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

export default NameBanner;
