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
          <p><button className='fa fa-question-circle' id='str-guide' data-reveal-id='str-modal' onClick={() => this.showPopup(true)}> </button></p>
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
                <p className="p">Character Gender, Race or Class can be edited by clicking on button of the Gender, Race or Class you would like your character to have. NOTE: A character's race and class will impact its attribute stats.</p>
                <h1 className='h1'>Generate Character:</h1>
                <p className="p">Once you have selected your character's gender, race and class simply click the Generate Character button to complete your character.</p>
                <h1 className='h1'>Character Quiz:</h1>
                <p className="p">If you need help selecting your character click the Character Quiz, which will ask you a series of questions to help you create your character.</p>
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default NBModal;