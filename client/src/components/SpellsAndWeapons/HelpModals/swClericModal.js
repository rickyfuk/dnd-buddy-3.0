import React from 'react';
import Modal from 'react-foundation-modal';
import '../spellsAndWeapons.css';
import CureWoundsAPI from './swModalAPI/CureWoundsAPI';
import SpareTheDyingAPI from './swModalAPI/SpareTheDyingAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class SWCleModal extends React.Component {
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
                <h2 className='modalHeading'>Cleric Spells:</h2>
                <CureWoundsAPI />
                <SpareTheDyingAPI />
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default SWCleModal;