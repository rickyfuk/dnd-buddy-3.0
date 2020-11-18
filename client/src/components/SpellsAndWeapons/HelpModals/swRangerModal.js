import React from 'react';
import Modal from 'react-foundation-modal';
import '../spellsAndWeapons.css';
import FavoredEnemyAPI from './swModalAPI/FavoredEnemyAPI';
import NaturalExplorerAPI from './swModalAPI/NaturalExplorerAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class SWRanModal extends React.Component {
  constructor(){
        super();
        this.state = {
            modalIsOpen: false
        }
    }
    showPopup = (status) => {
        this.setState({
            modalIsOpen: status
        });
    }
 
  render() {
    return (
      <div className='swHelpButton'>
          <p><button className='fa fa-question-circle' id='sw-guide' data-reveal-id='sw-modal' onClick={() => this.showPopup(true)}> </button></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
            <div>
                <h2 className='modalHeading'>Ranger Abilities:</h2>
                <FavoredEnemyAPI />
                <NaturalExplorerAPI />
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default SWRanModal;