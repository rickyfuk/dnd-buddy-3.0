import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Warlock extends React.Component {
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
                <h1 className='qTitle'>We recommend you play as a Warlock.</h1>
                <p className='qP'>Warlock Description:</p>
                <p className='qP'>A wielder of magic that is derived from a bargain with an extraplanar entity.</p>
                <p className='qP'>We would also recommend you play as a Tiefling, Dragonborn, or Half-Elf; which make excellent Warlocks</p>
                <h1 className='qTitle'>Select Race:</h1>
                <Link to={'/create'}>
                <button className="button button1 revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Tiefling')}>            
                    Tiefling
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Dragonborn')}>
                    Dragonborn
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Half-Elf')}>
                    Half-Elf
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button">
                    Other
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Warlock;