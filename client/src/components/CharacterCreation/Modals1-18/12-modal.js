import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal12 extends React.Component {
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
                <p className='qP'>Were you born with magic?</p>
                
                <Link to={'/warlock'}>
                <button className="button revealButton" type="button">            
                    Nope
                </button>
                </Link>

                <Link to= {'/sorcerer'}>
                <button className="button revealButton" type="button">
                    It is in my blood.
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal12;