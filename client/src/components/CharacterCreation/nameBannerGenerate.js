import React, { useState } from 'react';
import NameEditor from '../NameBanner/nameEditor';
import NBModal from '../NameBanner/nbModal';
import '../NameBanner/nameBanner.css';


function NameBannerGenerate () {

    const [charName, setcharName] = useState('Click to change name');
    const charGender = useState(localStorage.getItem('Gender'));
    const charRace = useState(localStorage.getItem('Race'));
    const charClass = useState(localStorage.getItem('Class'));
    
    function handleNameChange (event) {
        console.log(event);

        setcharName(event.target.value);
    }

    return(
        <div className='bannerGenerate'>
            <NBModal />
            <div className='namebanner'> 
                <NameEditor handleNameChange={handleNameChange} charName={charName}/>
                <ul id='addDrop' className='dropdown menu'>
                    <li className='dropdown'>
                        <ul id='classUL' className='menu'>{charGender}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL' className='menu'>{charRace}</ul>
                    </li>
                    <li className='dropdown'>
                        <ul id='classUL' className='menu'>{charClass}</ul>
                    </li>
                    <li className='dropdown'>
                        {/* <a id='class' href='/'> </a> */}
                        <ul id='classUL' className='menu'>Level: 01</ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NameBannerGenerate;