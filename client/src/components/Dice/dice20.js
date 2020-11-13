import React, { Component } from 'react';

class Dice20 extends Component {
    constructor() {
        super();
        this.state = {
            dice20: 'df-d20-20',

        }
    }

    componentDidMount () {
            this.setState({
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),

            })


        this.myInterval = setTimeout (() => {
            this.setState({
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),

            })
        }, 335)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),

            })
        }, 490)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),

            })
        }, 700)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),

            })
        }, 800)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),

            })
        }, 985)

    }

    render () {
        const {dice20} = this.state

        return (
                <i className={dice20}></i>            
        )
    }
}

export default Dice20;