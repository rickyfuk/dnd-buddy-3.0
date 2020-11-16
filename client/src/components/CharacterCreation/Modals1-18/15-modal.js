import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal15 extends React.Component {
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
                <p className='qP'>Are you civilized?</p>
                
                <Link to={'/fighter'}>
                <button className="button button1 revealButton" type="button" onClick={() => localStorage.setItem('Class', 'Fighter')}>            
                    I have some manners.
                </button>
                </Link>

                <Link to= {'/barbarian'}>
                <button className="button revealButton" type="button" onClick={() => localStorage.setItem('Class', 'Barbarian')}>
                    Me wildman. Grunt.
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal15;