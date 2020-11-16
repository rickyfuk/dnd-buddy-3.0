import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Monk extends React.Component {
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
                <h1 className='qTitle'>We recommend you play as a Monk.</h1>
                <p className='qP'>Monk Description:</p>
                <p className='qP'>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual.</p>
                <p className='qP'>We would also recommend you play as a Human, Elf, or Halfling; which make excellent Monks</p>
                <h1 className='qTitle'>Select Race:</h1>
                <Link to={'/create'}>
                <button className="button button1 revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Human')}>            
                    Human
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Elf')}>
                    Elf
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="button revealButton" type="button" onClick={() => localStorage.setItem('Race', 'Halfling')}>
                    Halfling
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

export default Monk;