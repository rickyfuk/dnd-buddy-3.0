import React from 'react';
import Modal from 'react-foundation-modal';
import AcrobaticsAPI from './SKILLS-APIs/acrobaticsAPI';
import AnimalHandlingAPI from './SKILLS-APIs/animalhandlingAPI';
import ArcanaAPI from './SKILLS-APIs/arcanaAPI';
import AthleticsAPI from './SKILLS-APIs/athleticsAPI';
import DeceptionAPI from './SKILLS-APIs/deceptionAPI';
import HistoryAPI from './SKILLS-APIs/historyAPI';
import InsightAPI from './SKILLS-APIs/insightAPI';
import IntimidationAPI from './SKILLS-APIs/intimidationAPI';
import MedicineAPI from './SKILLS-APIs/medicineAPI';
import NatureAPI from './SKILLS-APIs/natureAPI';
import PerceptionAPI from './SKILLS-APIs/perceptionAPI';
import PerformanceAPI from './SKILLS-APIs/performanceAPI';
import PersuasionAPI from './SKILLS-APIs/persuasionAPI';
import ReligionAPI from './SKILLS-APIs/religionAPI';
import SleightofHandAPI from './SKILLS-APIs/sleightofhandAPI';
import Stealth from './SKILLS-APIs/stealthAPI';
import Survival from './SKILLS-APIs/survivalAPI';
 
const overlayStyle = {
    'backgroundColor': 'rgba(0,0,0,.8)',
};
 
class SkillsModal extends React.Component {
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
      <div className='skillsHelpButton'>
          <p><a className='fa fa-question-circle' id='skills-guide' data-reveal-id='skills-modal' onClick={() => this.showPopup(true)}> </a></p>
        <Modal 
            open={this.state.modalIsOpen}
            closeModal={this.showPopup}
            isModal={true}
            size="small"
            overlayStyle={overlayStyle} >
            <div>
                <h2 className='modalHeading'>Skills:</h2>
                <p className='modalP'>Each ability covers a broad range of capabilities, including Skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual’s proficiency in a skill demonstrates a focus on that aspect. Sometimes, the GM might ask for an ability check using a specific skill—for example, “Make a Wisdom (Perception) check.</p>
                <AcrobaticsAPI />
                <AnimalHandlingAPI />
                <ArcanaAPI />
                <AthleticsAPI />
                <DeceptionAPI />
                <HistoryAPI />
                <InsightAPI />
                <IntimidationAPI />
                <MedicineAPI />
                <NatureAPI />
                <PerceptionAPI />
                <PerformanceAPI />
                <PersuasionAPI />
                <ReligionAPI />
                <SleightofHandAPI />
                <Stealth />
                <Survival />
            </div>
           
           
        </Modal> 
      </div>
    );
  }
}

export default SkillsModal;