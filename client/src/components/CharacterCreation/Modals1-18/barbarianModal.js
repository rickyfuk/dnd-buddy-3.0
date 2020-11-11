import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Barbarian extends React.Component {
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
                <h1 className='qTitle'>We recommend you play as a Barbarian.</h1>
                <p className='qP'>Barbarian Description:</p>
                <p className='qP'>A fierce warrior of primitive background who can enter a battle rage.</p>
                <p className='qP'>We would also recommend you play as a Half-Orc, Dwarf, or Dragonborn; which make excellent Barbarians</p>
                <h1 className='qTitle'>Select Race:</h1>
                <Link to={'/create'}>
                <button className="button revealButton" type="button">            
                    Half-Orc
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button">
                    Dwarf
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button">
                    Dragonborn
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button">
                    Select another race.
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Barbarian;