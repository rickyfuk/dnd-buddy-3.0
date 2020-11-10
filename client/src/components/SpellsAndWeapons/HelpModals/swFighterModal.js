import React from 'react';
import Modal from 'react-foundation-modal';
import '../spellsAndWeapons.css';
import GreatWeaponAPI from './swModalAPI/GreatWeaponAPI';
import SecondWindAPI from './swModalAPI/SecondWindAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class SWFigModal extends React.Component {
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
                <h2 className='modalHeading'>Fighter Bonus Features:</h2>
                <GreatWeaponAPI />
                <SecondWindAPI />
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default SWFigModal;