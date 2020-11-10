import React from 'react';
import Modal from 'react-foundation-modal';
import '../spellsAndWeapons.css';
import FireBoltAPI from './swModalAPI/FireBoltAPI';
import MageArmorAPI from './swModalAPI/MageArmorAPI';
import MageHandAPI from './swModalAPI/MageHandAPI';
import MagicMissileAPI from './swModalAPI/MagicMissileAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class SWWizModal extends React.Component {
  constructor(){
        super();
        this.state = {
            modalIsOpen: false
        }
    }
    showPopup = (status) => {
        this.setState({
            modalIsOpen: status
        });
    }
 
  render() {
    return (
      <div className='swHelpButton'>
          <p><a className='fa fa-question-circle' id='sw-guide' data-reveal-id='sw-modal' onClick={() => this.showPopup(true)}> </a></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
            <div>
                <h2 className='modalHeading'>Wizard Spells:</h2>
                <FireBoltAPI />
                <MagicMissileAPI />
                <MageArmorAPI />
                <MageHandAPI />
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default SWWizModal;