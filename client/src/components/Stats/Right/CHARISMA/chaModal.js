import React from 'react';
import Modal from 'react-foundation-modal';
import CharismaText from './chaAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,1)',
};
 
class ChaModal extends React.Component {
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
          <p><a className='fa fa-question-circle' id='cha-guide' data-reveal-id='cha-modal' onClick={() => this.showPopup(true)}> </a></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
                <CharismaText />
        </Modal> 
      </div>
    );
  }
}

export default ChaModal;