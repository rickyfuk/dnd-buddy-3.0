import React, { Component } from 'react';

class Dice8 extends Component {
    constructor() {
        super();
        this.state = {
            dice8: 'df-d8-8',

        }
    }

    componentDidMount () {
            this.setState({
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),

            })


        this.myInterval = setTimeout (() => {
            this.setState({
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),

            })
        }, 335)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),

            })
        }, 490)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),

            })
        }, 700)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),

            })
        }, 800)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),

            })
        }, 985)

    }

    render () {
        const {dice8} = this.state

        return (
                <i className={dice8}></i>            
        )
    }
}

export default Dice8;