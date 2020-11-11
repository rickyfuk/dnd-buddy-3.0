import React from 'react';
import Modal from 'react-foundation-modal';
import '../creationModal.css';
import { Link } from 'react-router-dom';

const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class Modal05 extends React.Component {
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
                <p className='qP'>Do you want to attack from up close or from a distance?</p>
                
                <Link to={'/08'}>
                <button className="button revealButton" type="button">            
                    Up close
                </button>
                </Link>

                <Link to= {'/09'}>
                <button className="button revealButton" type="button">
                    From a distance
                </button>
                </Link>

            </div>;

        </Modal> 
      </div>
    );
  }
}

export default Modal05;