
import React, { Component, useReducer, useState } from 'react';
import Card from './Card.js';
import './raceModal.css';
import portraitHumanFemale from './assets/human-female-modal.png';
import portraitElfFemale from './assets/elf-female-modal.png';
import portraitDwarfFemale from './assets/dwarf-female-modal.png';
import portraitTieflingFemale from './assets/tiefling-female-modal.png';



export class RaceCarousel extends Component {
  
    constructor(props) {
        super(props)
         
      

        this.state = {
            current_card: 1           
        }           
    
    }  


    
    componentDidMount() {
        let first_card_clone = this.card_container.children[0].cloneNode(true);
        let last_card_clone = this.card_container.children[this.card_container.children.length - 1].cloneNode(true);

        this.card_container.insertBefore(last_card_clone, this.card_container.children[0]);
        this.card_container.append(first_card_clone);

        this.card_container.style.transitionDuration = '0.0s';
        this.card_container.style.transform = `translate(-${1089}px)`    
      
     
    }  
        

    
    handle_next = () => {
        if (this.state.current_card < this.card_container.children.length - 1) {
            
            let new_current_card = this.state.current_card + 1; 

            
            this.setState({current_card: new_current_card}, () => {
                this.card_container.style.transitionDuration = '0.0s';
                this.card_container.style.transform = `translate(-${1089 * this.state.current_card}px)`;

                if (this.state.current_card === this.card_container.children.length - 1) {
                    setTimeout(() => {
                        this.card_container.style.transitionDuration = '0.0s';
                        this.card_container.style.transform = `translate(-${1089}px)`
                        this.setState({ current_card: 1 });
                    }, 502)                     
                }
            }) 
        } else {
            return;
        }
    }

    handle_previous = () => {
        if (this.state.current_card > 0) {
            let new_current_card = this.state.current_card - 1; 
            
            this.setState({current_card: new_current_card}, () => {
                this.card_container.style.transitionDuration = '0.0s';
                this.card_container.style.transform = `translate(-${1089 * this.state.current_card}px)`;

                if (this.state.current_card === 0) {
                    setTimeout(() => {
                        this.card_container.style.transitionDuration = '0.0s';
                        this.card_container.style.transform = `translate(-${1089 * (this.card_container.children.length - 2)}px)`;
                        this.setState({ current_card: this.card_container.children.length - 2 });
                    }, 502)                     
                }

            })
        } else {
            return;
        }     

        
    } 




    handle_link = (e) => {       
        if (this.state.current_card === 1) {
            window.location.href = './femaleclass';
            localStorage.setItem('Race', 'Human');
            e.preventDefault()
        } else if (this.state.current_card === 2) {
            window.location.href = './femaleclass';
            localStorage.setItem('Race', 'Elf');
            e.preventDefault()
        } else if (this.state.current_card === 3) {
            window.location.href = './femaleclass';
            localStorage.setItem('Race', 'Dwarf');
            e.preventDefault()
        } else if (this.state.current_card === 4) {
            window.location.href = './femaleclass';
            localStorage.setItem('Race', 'Tiefling');
            e.preventDefault()
        } 
    
    }
    render() {           
        return (
            <div>
                    
                    <div className='view-port' style={styles.view_port}>
                        <div ref={ref_id => this.card_container = ref_id} className='card-container portrait' style={styles.card_container}>
                            < Card card_number={portraitHumanFemale} />                                                    
                            < Card card_number={portraitElfFemale} />
                            < Card card_number={portraitDwarfFemale}/>
                            < Card card_number={portraitTieflingFemale}/>                                                                            
                        </div>
                    </div>    
                <div className='modalbar' style={styles.navBar}>                
                    <button className='button' style={styles.buttonPrevious} onClick={this.handle_previous}>Previous</button>
                    <button className='button' style={styles} onClick={this.handle_link}>Select Character</button>                             
                    <button className='button' style={styles.buttonNext} onClick={this.handle_next}>Next</button>
                </div>            
            </div>
        )
    }
}

const styles = {
    view_port: {
        position: 'relative',             
        top: '285px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1089px',
        height: '593px',
        overflow: 'hidden'
              
        
    },
    card_container: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-around',
        position: 'relative',        
        right: '7px',
        bottom: '115px'        
    },
    buttonPrevious: {
        position: 'relative',
        width: '90px',
        left: '30px',        
        backgroundColor: 'transparent'      
                
    },
    buttonNext: {
        position: 'relative',
        width: '90px',
        right: '10px',
        backgroundColor: 'transparent'                          
    }
   
   

}

export default RaceCarousel;

