import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal03 extends React.Component {
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
                <p className='qP'>Do you want to cast magic or smash things?</p>
                
                <Link to={'/04'}>
                <button className="btn btn-dark button1 revealButton" type="button">            
                    Cast Magic!
                </button>
                </Link>

                <Link to= {'/05'}>
                <button className="btn btn-dark revealButton" type="button">
                    Smash!
                </button>
                </Link>

                <Link to= {'/06'}>
                <button className="button revealButton" type="button">
                    Both!
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal03;