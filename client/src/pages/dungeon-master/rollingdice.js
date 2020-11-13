import React, { Component } from 'react';

class DiceRolling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dice: 'df-d20-20',
        }
    }

    render () {
        const {dice} = this.state
        return (
            <i className={dice}></i>
        )
        
    }

    componentDidMount () {
        this.myInterval = setInterval (() => {
            this.setState({
                dice:'df-d20-'+ Math.floor(Math.random()*20+1),
            })
        }, 245)

    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
}

export default DiceRolling;