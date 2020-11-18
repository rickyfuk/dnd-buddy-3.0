import React, { Component } from 'react';

class Dice6 extends Component {
    constructor() {
        super();
        this.state = {
            dice6: 'df-d6-6',

        }
    }

    componentDidMount () {
            this.setState({
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),

            })


        this.myInterval = setTimeout (() => {
            this.setState({
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),

            })
        }, 335)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),

            })
        }, 490)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),

            })
        }, 700)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),

            })
        }, 800)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),

            })
        }, 985)

    }

    render () {
        const {dice6} = this.state

        return (
                <i className={dice6}></i>            
        )
    }
}

export default Dice6;