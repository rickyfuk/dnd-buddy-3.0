import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal01 extends React.Component {
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
                <h1 className='qTitle'>Welcome!</h1>
                <p className='qP'>Do you need assistance setting up your new character?</p>
                
                <Link to={'/02'}>
                <button className="btn btn-dark button1 revealButton" type="button">            
                    Yes
                </button>
                </Link>

                <Link to= {'/create'}>
                <button className="btn btn-dark revealButton" type="button">
                    No
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal01;