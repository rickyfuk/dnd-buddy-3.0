import React, { Component } from 'react';

class Dice12 extends Component {
    constructor() {
        super();
        this.state = {
            dice12: 'df-d12-12',

        }
    }

    componentDidMount () {
            this.setState({
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),

            })


        this.myInterval = setTimeout (() => {
            this.setState({
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),

            })
        }, 335)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),

            })
        }, 490)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),

            })
        }, 700)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),

            })
        }, 800)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),

            })
        }, 985)

    }

    render () {
        const {dice12} = this.state

        return (
                <i className={dice12}></i>            
        )
    }
}

export default Dice12;