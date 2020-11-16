import React from 'react';
import Modal from 'react-foundation-modal';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.75)',
};
 
class ACModal extends React.Component {
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
          <p><button className='fa fa-question-circle ac-guide' data-reveal-id='hp-modal' onClick={() => this.showPopup(true)}> </button></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size='small'
            overlayStyle={overlayStyle} >
            <div>
                <h1 className='h1'>Armor Class:</h1>
                <p className='p'>Armor class represents your defense against attacks from enemies and monsters.</p>
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default ACModal;