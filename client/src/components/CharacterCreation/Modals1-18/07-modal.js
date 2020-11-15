import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal07 extends React.Component {
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
                <p className='qP'>Do you like to study?</p>
                
                <Link to={'/12'}>
                <button className="button button1 revealButton" type="button">            
                    Boring.
                </button>
                </Link>

                <Link to= {'/13'}>
                <button className="button revealButton" type="button">
                    Books, Books, Books!
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal07;