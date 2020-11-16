import React from 'react';
import Modal from 'react-foundation-modal';
import '../spellsAndWeapons.css';
import HealingWordAPI from './swModalAPI/HealingWordAPI';
import ViciousMockeryAPI from './swModalAPI/ViciousMockeryAPI';
import CharmPersonAPI from './swModalAPI/CharmPersonAPI';
import HideousLaughterAPI from './swModalAPI/HideousLaughterAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class SWBardModal extends React.Component {
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
          <div><button className='fa fa-question-circle' id='sw-guide' data-reveal-id='sw-modal' onClick={() => this.showPopup(true)}> </button></div>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
            <div>
                <h2 className='modalHeading'>Bard Spells:</h2>
                <HealingWordAPI />
                <ViciousMockeryAPI />
                <CharmPersonAPI />
                <HideousLaughterAPI />
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default SWBardModal;