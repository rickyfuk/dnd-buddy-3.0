import React from 'react';
import Modal from 'react-foundation-modal';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.75)',
};
 
class HPModal extends React.Component {
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
          <p><button className='fa fa-question-circle hp-guide' data-reveal-id='hp-modal' onClick={() => this.showPopup(true)}> </button></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
            <div>
                <h1 className='h1'>Hitpoints:</h1>
                <p className="p">Hitpoints determine how tough your character is in combat and other dangerous situations. Hitpoints can be adjusted throughout the campaign by simply clicking on the + or - buttons.</p>
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default HPModal;