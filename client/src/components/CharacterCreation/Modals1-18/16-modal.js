import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal16 extends React.Component {
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
            size='small'
            overlayStyle={overlayStyle} >
            
            <div>
                <h1 className='qTitle'>Create a Character:</h1>
                <p className='qP'>Do you know martial arts?</p>
                
                <Link to={'/monk'}>
                <button className='btn btn-dark button1 revealButton' type='button' onClick={() => localStorage.setItem('Class', 'Monk')}>            
                    Yes, Sensei.
                </button>
                </Link>

                <Link to= {'/paladin'}>
                <button className='btn btn-dark revealButton' type='button' onClick={() => localStorage.setItem('Class', 'Paladin')}>
                    I do not.
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal16;