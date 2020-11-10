import React, { useState } from 'react';
import NameEditor from './nameEditor';
import NBModal from './nbModal';
import './nameBanner.css';

function NameBanner() {


    const [charName, setcharName] = useState('Humberferg');  
    
    function handleNameChange (event) {
        console.log(event);

        setcharName(event.target.value);
    }
  
    return(
        <div className='banner'>
<<<<<<< HEAD
            {/* <div className='nbHelpButton'>
                <a className='fa fa-question-circle' href='/' id='nb-guide' data-reveal-id='nameBanner-modal'> </a>
            </div> */}
            < BannerHelp />
=======
            <NBModal />
>>>>>>> a909fd567e903b6b39d31cff4cb0468e8430731f
            <div className='namebanner'>
                <NameEditor handleNameChange={handleNameChange} charName={charName}/>
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
