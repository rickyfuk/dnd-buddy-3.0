import React from 'react';
import Modal from 'react-foundation-modal';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.75)',
};
 
class NBModal extends React.Component {
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
            <div>
                <h1 className='h1'>Character Name:</h1>
                <p className="p">Character Name can be edited by clicking directly on the character's name. An editable text field will appear. Simply type the desired character name and click outside the text field.</p>
                <h1 className='h1'>Gender, Race or Class:</h1>
                <p className="p">Character Gender, Race or Class can be edited by clicking on the element. This will generate a dropdown menu of available choices.  Simply click on the desired gender, race or class and it will automatically be applied to your character. NOTE: A character's race and class will impact its attribute stats.</p>
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default NBModal;