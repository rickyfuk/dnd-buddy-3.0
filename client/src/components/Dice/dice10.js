import React, { Component } from 'react';

class Dice10 extends Component {
    constructor() {
        super();
        this.state = {
            dice10: 'df-d10-10',

        }
    }

    componentDidMount () {
            this.setState({
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),

            })


        this.myInterval = setTimeout (() => {
            this.setState({
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),

            })
        }, 335)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),

            })
        }, 490)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),

            })
        }, 700)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),

            })
        }, 800)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),

            })
        }, 985)

    }

    render () {
        const {dice10} = this.state

        return (
                <i className={dice10}></i>            
        )
    }
}

export default Dice10;