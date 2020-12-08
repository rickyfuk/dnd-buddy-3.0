import React from 'react';
import Modal from 'react-foundation-modal';
import Carousel from './00-race';
import './raceModal.css';
import NavBlank from '../../../../components/NavBlank/NavBlank';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.7)',
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
      <div className='raceCSS'>
        <Modal
            open={this.state.modalIsOpen}
            // closeModal={this.showPopup}
            hideCloseButton={true}
            isModal={false}
            size="raceModal"
            overlayStyle={overlayStyle} >
            
            <Carousel />

        </Modal> 
      </div>
    );
  }
}

export default Selector;

