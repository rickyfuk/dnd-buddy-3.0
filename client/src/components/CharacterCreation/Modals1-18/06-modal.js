import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal06 extends React.Component {
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
      <div className='modalCSS'>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={false}
            size="small"
            overlayStyle={overlayStyle} >
            
            <div>
                <h1 className='qTitle'>Create a Character:</h1>
                <p className='qP'>Are you good with people?</p>
                
                <Link to={'/11'}>
                <button className="button revealButton" type="button">            
                    Not at all.
                </button>
                </Link>

                <Link to= {'/10'}>
                <button className="button revealButton" type="button">
                    Yes, people love me!
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal06;