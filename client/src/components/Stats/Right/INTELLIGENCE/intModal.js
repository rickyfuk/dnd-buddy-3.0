import React from 'react';
import Modal from 'react-foundation-modal';
import IntelligenceText from './intAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,1)',
};
 
class IntModal extends React.Component {
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
          <p><a className='fa fa-question-circle' id='int-guide' data-reveal-id='int-modal' onClick={() => this.showPopup(true)}> </a></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
                <IntelligenceText />
        </Modal> 
      </div>
    );
  }
}

export default IntModal;