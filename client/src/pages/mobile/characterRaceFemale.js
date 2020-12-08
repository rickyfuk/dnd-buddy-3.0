import React from 'react';
import RaceModal from '../../components/CharacterCreation/ModalRace/RaceFemale/app';
import NavBot from '../../components/NavBottom/NavBot';
import NavTop from '../../components/NavTop/NavTop';
import FDwarfFighter from '../../components/CharacterImage/images-female/dwarf-fighter-1.png'
import FElfFighter from '../../components/CharacterImage/images-female/elf-fighter-1.png'
import FHumFighter from '../../components/CharacterImage/images-female/human-fighter-1.png'
import FTiefFighter from '../../components/CharacterImage/images-female/tiefling-fighter-1.png'
import '../css/reset.css';
import '../css/style.css';

function CharacterF () {

    function dwarf() {
        localStorage.setItem('Race', 'Dwarf');   
    } 
    
    function elf() {
        localStorage.setItem('Race', 'Elf');
    }
    
    function human() {
        localStorage.setItem('Race', 'Human');   
    } 
    
    function tiefling() {
        localStorage.setItem('Race', 'Tiefling');
    }

  return (
    <div className='body'>
      <NavTop/>
      <div className='mainContainer'>
        <div className='group'>
            <RaceModal />
            <div className='raceMobileDisplay group'>
              <div className='columnOne'>
                <img className='charLogoRace' src={FDwarfFighter}/>
                <img className='charLogoRace' src={FElfFighter}/>
              </div>
              <div className='columnTwo'>
                <p>
                  <button id='selectRaceLeft' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={dwarf}>
                    <a href='/femaleclass'>
                      Dwarf
                    </a>
                  </button>
                  <button id='selectRaceRight' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={elf}>
                    <a href='/femaleclass'>
                      Elf
                    </a>
                  </button>
                </p>
              </div>
              <div className='columnOne'>
                <img className='charLogoRace' src={FHumFighter}/>
                <img className='charLogoRace' src={FTiefFighter}/>
              </div>
              <div className='columnTwo'>
                <p>
                  <button id='selectRaceLeft' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={human}>
                    <a href='/femaleclass'>
                      Human
                    </a>
                  </button>
                  <button id='selectRaceRight' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={tiefling}>
                    <a href='/femaleclass'>
                      Tiefling
                    </a>
                  </button>
                </p>
              </div>
            </div>
        </div>
      </div>
      <NavBot />
    </div>
  );
}

export default CharacterF;