import React from 'react';
import Modal from 'react-foundation-modal';
import Dice8 from './dice8';
import './dice.css';


const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class DiceRoll8 extends React.Component {
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
      <div className='diceCSS'>
            <i className='df-d8-8' onClick={() => this.showPopup(true)}></i>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={false}
            size="small"
            overlayStyle={overlayStyle} >
            
            <div className='diceCentered'>
                <Dice8 />
            </div>

        </Modal> 
      </div>
    );
  }
}

export default DiceRoll8;