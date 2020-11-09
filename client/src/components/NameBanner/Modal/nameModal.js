import React from 'react';
import Modal from 'react-foundation-modal';
import BannerText from './nameAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,1)',
};
 
class BannerModal extends React.Component {
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
      <div className='bannerHelpButton'>
          <p><a className='fa fa-question-circle' id='help-guide' data-reveal-id='help-modal' onClick={() => this.showPopup(true)}> </a></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
                <BannerText />
        </Modal> 
      </div>
    );
  }
}

export default BannerModal;