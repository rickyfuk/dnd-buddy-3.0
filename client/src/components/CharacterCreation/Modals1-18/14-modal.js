import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal14 extends React.Component {
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
                <p className='qP'>Do you like animals?</p>
                
                <Link to={'/wizard'}>
                <button className='btn btn-dark button1 revealButton' type='button' onClick={() => localStorage.setItem('Class', 'Wizard')}>            
                    Not really.
                </button>
                </Link>

                <Link to= {'/druid'}>
                <button className='btn btn-dark revealButton' type='button' onClick={() => localStorage.setItem('Class', 'Druid')}>
                    Animals rock!
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal14;