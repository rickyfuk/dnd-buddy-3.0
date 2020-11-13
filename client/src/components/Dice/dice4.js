import React, { Component } from 'react';

class Dice4 extends Component {
    constructor() {
        super();
        this.state = {
            dice4: 'df-d4-4',

        }
    }

    componentDidMount () {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),

            })


        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),

            })
        }, 335)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),

            })
        }, 490)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),

            })
        }, 700)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),

            })
        }, 800)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),

            })
        }, 985)

    }

    render () {
        const {dice4} = this.state

        return (
                <i className={dice4}></i>            
        )
    }
}

export default Dice4;