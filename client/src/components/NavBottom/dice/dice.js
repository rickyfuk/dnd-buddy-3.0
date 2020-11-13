import React, { Component } from 'react';
import '../NavBot.css';

class DiceRoll extends Component {
    constructor() {
        super();
        this.state = {
            dice4: 'df-d4-4',
            dice6: 'df-d6-6',
            dice8: 'df-d8-8',
            dice10: 'df-d10-10',
            dice12: 'df-d12-12',
            dice20: 'df-d20-20',
        }
    }

    componentDidMount () {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),
            })


        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'df-d4-'+ Math.floor(Math.random()*4+1),
                dice6:'df-d6-'+ Math.floor(Math.random()*6+1),
                dice8:'df-d8-'+ Math.floor(Math.random()*8+1),
                dice10:'df-d10-'+ Math.floor(Math.random()*10+1),
                dice12:'df-d12-'+ Math.floor(Math.random()*12+1),
                dice20:'df-d20-'+ Math.floor(Math.random()*20+1),
            })
        }, 335)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),
            })
        }, 490)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'df-d4-'+ Math.floor(Math.random()*4+1),
                dice6:'df-d6-'+ Math.floor(Math.random()*6+1),
                dice8:'df-d8-'+ Math.floor(Math.random()*8+1),
                dice10:'df-d10-'+ Math.floor(Math.random()*10+1),
                dice12:'df-d12-'+ Math.floor(Math.random()*12+1),
                dice20:'df-d20-'+ Math.floor(Math.random()*20+1),
            })
        }, 700)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'df-d4-'+ Math.floor(Math.random()*4+1),
                dice6:'df-d6-'+ Math.floor(Math.random()*6+1),
                dice8:'df-d8-'+ Math.floor(Math.random()*8+1),
                dice10:'df-d10-'+ Math.floor(Math.random()*10+1),
                dice12:'df-d12-'+ Math.floor(Math.random()*12+1),
                dice20:'df-d20-'+ Math.floor(Math.random()*20+1),
            })
        }, 800)

        this.myInterval = setTimeout (() => {
            this.setState({
                dice4:'rotate df-d4-'+ Math.floor(Math.random()*4+1),
                dice6:'rotate df-d6-'+ Math.floor(Math.random()*6+1),
                dice8:'rotate df-d8-'+ Math.floor(Math.random()*8+1),
                dice10:'rotate df-d10-'+ Math.floor(Math.random()*10+1),
                dice12:'rotate df-d12-'+ Math.floor(Math.random()*12+1),
                dice20:'rotate df-d20-'+ Math.floor(Math.random()*20+1),
            })
        }, 985)

    }

    render () {
        const {dice4} = this.state
        const {dice6} = this.state
        const {dice8} = this.state
        const {dice10} = this.state
        const {dice12} = this.state
        const {dice20} = this.state
        return (
            <div>
                <i className={dice4}></i>
                <i className={dice6}></i>
                <i className={dice8}></i>
                <i className={dice10}></i>
                <i className={dice12}></i>
                <i className={dice20}></i>
            
            </div>
        )
    }
}

export default DiceRoll;