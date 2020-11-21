import React from 'react';
import Modal from 'react-foundation-modal';
import WelcomeModal from './00-gender';
import './genderModal.css';
import NavBlank from '../../../components/NavBlank/NavBlank';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class InitialModal extends React.Component {
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
      <div className='modalCSS'>
          <NavBlank/>
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

export default InitialModal;

