import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Sorcerer extends React.Component {
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
                <h1 className='qTitle'>We recommend you play as a Sorcerer.</h1>
                <p className='qP'>Sorcerer Description:</p>
                <p className='qP'>A spellcaster who draws on inherent magic from a gift or bloodline.</p>
                <p className='qP'>We would also recommend you play as a Half-Elf, Tiefling, or Dragonborn; which make excellent Sorcerers</p>
                <h1 className='qTitle'>Select Race:</h1>
                <Link to={'/create'}>
                <button className='btn btn-dark button1 revealButton' type='button' onClick={() => localStorage.setItem('Race', 'Half-Elf')}>            
                    Half-Elf
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className='btn btn-dark revealButton' type='button' onClick={() => localStorage.setItem('Race', 'Tiefling')}>
                    Tiefling
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className='btn btn-dark revealButton' type='button' onClick={() => localStorage.setItem('Race', 'Dragonborn')}>
                    Dragonborn
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

export default Sorcerer;