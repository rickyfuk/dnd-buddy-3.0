import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Fighter extends React.Component {
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
                <h1 className='qTitle'>We recommend you play as a Fighter.</h1>
                <p className='qP'>Fighter Description:</p>
                <p className='qP'>A master of martial combat, skilled with a variety of weapons and armor.</p>
                <p className='qP'>We would also recommend you play as a Dragonborn, Half-Orc, or Dwarf; which make excellent Fighters</p>
                <h1 className='qTitle'>Select Race:</h1>
                <Link to={'/create'}>
                <button className="button button1 revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Dragonborn')}>            
                    Dragonborn
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Half-Orc')}>
                    Half-Orc
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Dwarf')}>
                    Dwarf
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

export default Fighter;