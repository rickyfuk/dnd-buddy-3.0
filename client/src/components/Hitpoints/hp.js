import React from 'react';
import './hp.css';

class Counter extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        count:12
    };
    
    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
    };
    
    // handleDecrement decreases this.state.count by 1
    handleDecrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count - 1 });
    };

    render () {

        return(
        
            <div className='hpStat'>
                <div className='hpHelpButton'>
                    <a className='fa fa-question-circle' href='/' id='hp-guide' data-reveal-id='hp-modal'> </a>
                </div>
                <div className='hpTextNum'>
                    <a href='/' className='hpBold' onClick={this.handleIncrement}>+</a>
                    
                    <p>{this.state.count}</p>
                  
                    <a href='/' className='hpBold' onClick={this.handleDecrement}>-</a>
                </div>
                <h4>Hitpoints</h4>
            </div>
            
        );
    }
}


export default Counter;