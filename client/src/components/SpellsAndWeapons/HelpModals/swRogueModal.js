import React from 'react';
import Modal from 'react-foundation-modal';
import '../spellsAndWeapons.css';
import SneakAttackAPI from './swModalAPI/SneakAttackAPI';
import ThievesCantAPI from './swModalAPI/ThievesCantAPI';
import ThievesToolsAPI from './swModalAPI/ThievesToolsAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class SWRogModal extends React.Component {
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
                <h2 className='modalHeading'>Rogue Abilities:</h2>
                <SneakAttackAPI />
                <ThievesCantAPI />
                <ThievesToolsAPI />
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default SWRogModal;