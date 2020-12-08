import React from 'react';
import Modal from 'react-foundation-modal';
import WelcomeModal from './00-gender';
import './genderModal.css';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.7)',
};
 
class GenModal extends React.Component {
  constructor(){
        super();
        this.state = {
            modalIsOpen: true
            
        }
    }
    showPopup = (status) => {
        this.setState({
            modalIsOpen: status
        });
    }
 
  render() {
    return (
      <div className='gendermodalCSS'>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={false}
            hideCloseButton={true}
            size="genderModal"
            overlayStyle={overlayStyle} >
            
            <WelcomeModal />

        </Modal> 
      </div>
    );
  }
}

export default GenModal;

