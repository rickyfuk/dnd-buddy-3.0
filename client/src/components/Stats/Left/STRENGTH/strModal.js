import React from 'react';
import Modal from 'react-foundation-modal';
import StrengthText from './strAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,1)',
};
 
class StrModal extends React.Component {
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
      <div className='statHelpButton'>
          <p><a className='fa fa-question-circle' id='str-guide' data-reveal-id='str-modal' onClick={() => this.showPopup(true)}> </a></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
                <StrengthText />
        </Modal> 
      </div>
    );
  }
}

export default StrModal;