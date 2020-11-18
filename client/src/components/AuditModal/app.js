import React from 'react';
import Modal from 'react-foundation-modal';
import Carousel from './00-audit';
import './auditModal.css';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Selector extends React.Component {
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
      <div className='auditCSS'>
        <Modal
            open={this.state.modalIsOpen}
            // closeModal={this.showPopup}
            hideCloseButton={true}
            isModal={false}
            size="large"
            overlayStyle={overlayStyle} >
            
            <Carousel />

        </Modal> 
      </div>
    );
  }
}

export default Selector;
