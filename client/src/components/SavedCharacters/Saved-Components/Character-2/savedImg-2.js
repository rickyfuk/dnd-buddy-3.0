import React from 'react';
import '../../../CharacterImage/charImage.css';
import MHB from '../../../CharacterImage/images-male/human-bard-1.png';
import MHC from '../../../CharacterImage/images-male/human-cleric-1.png';
import MHF from '../../../CharacterImage/images-male/human-fighter-1.png';
import MHRa from '../../../CharacterImage/images-male/human-ranger-1.png';
import MHRo from '../../../CharacterImage/images-male/human-rogue-1.png';
import MHW from '../../../CharacterImage/images-male/human-mage-1.png';
import MDB from '../../../CharacterImage/images-male/dwarf-bard-1.png';
import MDC from '../../../CharacterImage/images-male/dwarf-cleric-1.png';
import MDF from '../../../CharacterImage/images-male/dwarf-fighter-1.png';
import MDRa from '../../../CharacterImage/images-male/dwarf-ranger-1.png';
import MDRo from '../../../CharacterImage/images-male/dwarf-rogue-1.png';
import MDW from '../../../CharacterImage/images-male/dwarf-mage-1.png';
import MEB from '../../../CharacterImage/images-male/elf-bard-1.png';
import MEC from '../../../CharacterImage/images-male/elf-cleric-1.png';
import MEF from '../../../CharacterImage/images-male/elf-fighter-1.png';
import MERa from '../../../CharacterImage/images-male/elf-ranger-1.png';
import MERo from '../../../CharacterImage/images-male/elf-rogue-1.png';
import MEW from '../../../CharacterImage/images-male/elf-mage-1.png';
import MTB from '../../../CharacterImage/images-male/tiefling-bard-1.png';
import MTC from '../../../CharacterImage/images-male/tiefling-cleric-1.png';
import MTF from '../../../CharacterImage/images-male/tiefling-fighter-1.png';
import MTRa from '../../../CharacterImage/images-male/tiefling-ranger-1.png';
import MTRo from '../../../CharacterImage/images-male/tiefling-rogue-1.png';
import MTW from '../../../CharacterImage/images-male/tiefling-mage-1.png';
import FHB from '../../../CharacterImage/images-female/human-bard-1.png';
import FHC from '../../../CharacterImage/images-female/human-cleric-1.png';
import FHF from '../../../CharacterImage/images-female/human-fighter-1.png';
import FHRa from '../../../CharacterImage/images-female/human-ranger-1.png';
import FHRo from '../../../CharacterImage/images-female/human-rogue-1.png';
import FHW from '../../../CharacterImage/images-female/human-mage-1.png';
import FDB from '../../../CharacterImage/images-female/dwarf-bard-1.png';
import FDC from '../../../CharacterImage/images-female/dwarf-cleric-1.png';
import FDF from '../../../CharacterImage/images-female/dwarf-fighter-1.png';
import FDRa from '../../../CharacterImage/images-female/dwarf-ranger-1.png';
import FDRo from '../../../CharacterImage/images-female/dwarf-rogue-1.png';
import FDW from '../../../CharacterImage/images-female/dwarf-mage-1.png';
import FEB from '../../../CharacterImage/images-female/elf-bard-1.png';
import FEC from '../../../CharacterImage/images-female/elf-cleric-1.png';
import FEF from '../../../CharacterImage/images-female/elf-fighter-1.png';
import FERa from '../../../CharacterImage/images-female/elf-ranger-1.png';
import FERo from '../../../CharacterImage/images-female/elf-rogue-1.png';
import FEW from '../../../CharacterImage/images-female/elf-mage-1.png';
import FTB from '../../../CharacterImage/images-female/tiefling-bard-1.png';
import FTC from '../../../CharacterImage/images-female/tiefling-cleric-1.png';
import FTF from '../../../CharacterImage/images-female/tiefling-fighter-1.png';
import FTRa from '../../../CharacterImage/images-female/tiefling-ranger-1.png';
import FTRo from '../../../CharacterImage/images-female/tiefling-rogue-1.png';
import FTW from '../../../CharacterImage/images-female/tiefling-mage-1.png';
import Default from '../../../CharacterImage/images-borders/fighter-border.png';


function SavedCharacterImageTwo() {

    const imgGender = localStorage.getItem('gender2');
    const imgClass = localStorage.getItem('charClass2');
    const imgRace = localStorage.getItem('race2');
    let characterPicture = '';

    if (imgGender === "Male" && imgRace === 'Human' && imgClass === 'Bard') {
        characterPicture = MHB
    }

    else if (imgGender === "Male" && imgRace === 'Human' && imgClass === 'Cleric') {
        characterPicture = MHC
    }

    else if (imgGender === "Male" && imgRace === 'Human' && imgClass === 'Fighter') {
        characterPicture = MHF
    }

    else if (imgGender === "Male" && imgRace === 'Human' && imgClass === 'Ranger') {
        characterPicture = MHRa
    }

    else if (imgGender === "Male" && imgRace === 'Human' && imgClass === 'Rogue') {
        characterPicture = MHRo
    }

    else if (imgGender === "Male" && imgRace === 'Human' && imgClass === 'Wizard') {
        characterPicture = MHW
    }

    else if (imgGender === "Male" && imgRace === 'Dwarf' && imgClass === 'Bard') {
        characterPicture = MDB
    }

    else if (imgGender === "Male" && imgRace === 'Dwarf' && imgClass === 'Cleric') {
        characterPicture = MDC
    }

    else if (imgGender === "Male" && imgRace === 'Dwarf' && imgClass === 'Fighter') {
        characterPicture = MDF
    }

    else if (imgGender === "Male" && imgRace === 'Dwarf' && imgClass === 'Ranger') {
        characterPicture = MDRa
    }

    else if (imgGender === "Male" && imgRace === 'Dwarf' && imgClass === 'Rogue') {
        characterPicture = MDRo
    }

    else if (imgGender === "Male" && imgRace === 'Dwarf' && imgClass === 'Wizard') {
        characterPicture = MDW
    }

    else if (imgGender === "Male" && imgRace === 'Elf' && imgClass === 'Bard') {
        characterPicture = MEB
    }

    else if (imgGender === "Male" && imgRace === 'Elf' && imgClass === 'Cleric') {
        characterPicture = MEC
    }

    else if (imgGender === "Male" && imgRace === 'Elf' && imgClass === 'Fighter') {
        characterPicture = MEF
    }

    else if (imgGender === "Male" && imgRace === 'Elf' && imgClass === 'Ranger') {
        characterPicture = MERa
    }

    else if (imgGender === "Male" && imgRace === 'Elf' && imgClass === 'Rogue') {
        characterPicture = MERo
    }

    else if (imgGender === "Male" && imgRace === 'Elf' && imgClass === 'Wizard') {
        characterPicture = MEW
    }

    else if (imgGender === "Male" && imgRace === 'Tiefling' && imgClass === 'Bard') {
        characterPicture = MTB
    }

    else if (imgGender === "Male" && imgRace === 'Tiefling' && imgClass === 'Cleric') {
        characterPicture = MTC
    }

    else if (imgGender === "Male" && imgRace === 'Tiefling' && imgClass === 'Fighter') {
        characterPicture = MTF
    }

    else if (imgGender === "Male" && imgRace === 'Tiefling' && imgClass === 'Ranger') {
        characterPicture = MTRa
    }

    else if (imgGender === "Male" && imgRace === 'Tiefling' && imgClass === 'Rogue') {
        characterPicture = MTRo
    }

    else if (imgGender === "Male" && imgRace === 'Tiefling' && imgClass === 'Wizard') {
        characterPicture = MTW
    }

    else if (imgGender === "Female" && imgRace === 'Human' && imgClass === 'Bard') {
        characterPicture = FHB
    }

    else if (imgGender === "Female" && imgRace === 'Human' && imgClass === 'Cleric') {
        characterPicture = FHC
    }

    else if (imgGender === "Female" && imgRace === 'Human' && imgClass === 'Fighter') {
        characterPicture = FHF
    }

    else if (imgGender === "Female" && imgRace === 'Human' && imgClass === 'Ranger') {
        characterPicture = FHRa
    }

    else if (imgGender === "Female" && imgRace === 'Human' && imgClass === 'Rogue') {
        characterPicture = FHRo
    }

    else if (imgGender === "Female" && imgRace === 'Human' && imgClass === 'Wizard') {
        characterPicture = FHW
    }

    else if (imgGender === "Female" && imgRace === 'Dwarf' && imgClass === 'Bard') {
        characterPicture = FDB
    }

    else if (imgGender === "Female" && imgRace === 'Dwarf' && imgClass === 'Cleric') {
        characterPicture = FDC
    }

    else if (imgGender === "Female" && imgRace === 'Dwarf' && imgClass === 'Fighter') {
        characterPicture = FDF
    }

    else if (imgGender === "Female" && imgRace === 'Dwarf' && imgClass === 'Ranger') {
        characterPicture = FDRa
    }

    else if (imgGender === "Female" && imgRace === 'Dwarf' && imgClass === 'Rogue') {
        characterPicture = FDRo
    }

    else if (imgGender === "Female" && imgRace === 'Dwarf' && imgClass === 'Wizard') {
        characterPicture = FDW
    }

    else if (imgGender === "Female" && imgRace === 'Elf' && imgClass === 'Bard') {
        characterPicture = FEB
    }

    else if (imgGender === "Female" && imgRace === 'Elf' && imgClass === 'Cleric') {
        characterPicture = FEC
    }

    else if (imgGender === "Female" && imgRace === 'Elf' && imgClass === 'Fighter') {
        characterPicture = FEF
    }

    else if (imgGender === "Female" && imgRace === 'Elf' && imgClass === 'Ranger') {
        characterPicture = FERa
    }

    else if (imgGender === "Female" && imgRace === 'Elf' && imgClass === 'Rogue') {
        characterPicture = FERo
    }

    else if (imgGender === "Female" && imgRace === 'Elf' && imgClass === 'Wizard') {
        characterPicture = FEW
    }

    else if (imgGender === "Female" && imgRace === 'Tiefling' && imgClass === 'Bard') {
        characterPicture = FTB
    }

    else if (imgGender === "Female" && imgRace === 'Tiefling' && imgClass === 'Cleric') {
        characterPicture = FTC
    }

    else if (imgGender === "Female" && imgRace === 'Tiefling' && imgClass === 'Fighter') {
        characterPicture = FTF
    }

    else if (imgGender === "Female" && imgRace === 'Tiefling' && imgClass === 'Ranger') {
        characterPicture = FTRa
    }

    else if (imgGender === "Female" && imgRace === 'Tiefling' && imgClass === 'Rogue') {
        characterPicture = FTRo
    }

    else if (imgGender === "Female" && imgRace === 'Tiefling' && imgClass === 'Wizard') {
        characterPicture = FTW
    }

    else {
        characterPicture = Default
    }

    return(
        <div className='imgSpacing'>
            <div className='imgCenter'> 
                <img className='charLogo' src={characterPicture}/>
            </div>
        </div>
    );
}

export default SavedCharacterImageTwo;