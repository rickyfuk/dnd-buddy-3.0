import React from 'react';
import Modal from 'react-foundation-modal';
import DexterityText from './dexAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.75)',
};
 
class dexModal extends React.Component {
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
          <p><a className='fa fa-question-circle' id='dex-guide' data-reveal-id='dex-modal' onClick={() => this.showPopup(true)}> </a></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
                <DexterityText />
        </Modal> 
      </div>
    );
  }
}

export default dexModal;