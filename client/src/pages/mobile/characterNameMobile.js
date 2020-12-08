import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import NavTop from '../../components/NavTop/NavTop';
import NavBot from '../../components/NavBottom/NavBot';
import NameBannerGenerate from '../../components/CharacterCreation/nameBannerGenerate';
import CharacterImage from '../../components/CharacterImage/charImage';

function NameCharacter() {

    function saveSlot(){

        const newCharName = localStorage.getItem('charName');
        const newCharGender = localStorage.getItem('Gender');
        const newCharRace = localStorage.getItem('Race');
        const newCharClass = localStorage.getItem('Class');

        if (localStorage.getItem('gender1')==='null') {
            console.log(localStorage.getItem('gender1'));
            localStorage.setItem('name1', newCharName);
            localStorage.setItem('gender1', newCharGender);
            localStorage.setItem('race1', newCharRace);
            localStorage.setItem('charClass1', newCharClass);
        }

        else if (localStorage.getItem('gender1')!='null' && localStorage.getItem('gender2')==='null') {
            console.log(localStorage.getItem('gender1'));
            console.log(localStorage.getItem('gender2'));
            localStorage.setItem('name2', newCharName);
            localStorage.setItem('gender2', newCharGender);
            localStorage.setItem('race2', newCharRace);
            localStorage.setItem('charClass2', newCharClass);
        }

        else if (localStorage.getItem('gender2')!='null' && localStorage.getItem('gender3')==='null') {
            console.log(localStorage.getItem('gender1'));
            console.log(localStorage.getItem('gender2'));
            console.log(localStorage.getItem('gender3'));
            localStorage.setItem('name3', newCharName);
            localStorage.setItem('gender3', newCharGender);
            localStorage.setItem('race3', newCharRace);
            localStorage.setItem('charClass3', newCharClass);
        }

        else {
            console.log('error');
        }

        // else if (localStorage.getItem('gender3')!='null') {
        //     alert('Character slots are full. Please delete a character from the saved characters page and then create your new character.');
        // }
    }

  return (
    <div className='body'>
        <NavTop />
        <div className='mainContainer'>
            <div className='group'>
                <div className='columnOne'>
                    <NameBannerGenerate />
                </div>
                <div className='columnTwo'>
                    <CharacterImage />
                </div>
                <div className='columnOne'>
                <button id='saveMobile' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={saveSlot}>
                  <a href='/main'>
                    Save
                  </a>
                </button>
              </div>  
            </div>
        </div>
        <NavBot />
    </div>
  );
}

export default NameCharacter;