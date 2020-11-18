import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Rogue extends React.Component {
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
                <h1 className='qTitle'>We recommend you play as a Rogue.</h1>
                <p className='qP'>Rogue Description:</p>
                <p className='qP'>A scoundrel who uses stealth and trickery to overcome obstacles and enemies.</p>
                <p className='qP'>We would also recommend you play as a Elf, Halfling, or Half-Elf; which make excellent Rogues</p>
                <h1 className='qTitle'>Select Race:</h1>
                <Link to={'/create'}>
                <button className='btn btn-dark button1 revealButton' type='button' onClick={() => localStorage.setItem('Race', 'Elf')}>            
                    Elf
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className='btn btn-dark revealButton' type='button' onClick={() => localStorage.setItem('Race', 'Halfling')}>
                    Halfling
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className='btn btn-dark revealButton' type='button' onClick={() => localStorage.setItem('Race', 'Half-Elf')}>
                    Half-Elf
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className='btn btn-dark revealButton' type='button'>
                    Other
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Rogue;