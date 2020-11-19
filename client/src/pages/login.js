import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import NavBlank from '../components/NavBlank/NavBlank';
import NavBot from '../components/NavBottom/NavBot';
// import API from '../util/API';
import axios from 'axios';
import './css/reset.css';
import './css/style.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/create'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {

            return (
                <div className='body'>
                    <NavBlank />
                    <div className='mainContainer'>
                        <div className='login'>
                            <h2 className="topTitle">RPG: Adventurer's Academy Login</h2>
                            <form className="login">
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input 
                                        type="email"
                                        name="email" 
                                        className="form-control" 
                                        id="email-input" 
                                        placeholder="Email"
                                        value={this.state.username}
                                        onChange={this.handleChange}>

                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    type="password"
                                    name="password" 
                                    className="form-control" 
                                    id="password-input" 
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}>

                                    </input>
                                </div>
                                <button onClick={this.handleSubmit} type="submit" value="Log In" className="button">Login</button>
                            </form>
                            <br />
                            <p className="footerRoute">Or <a href="/register">Register Here</a></p>
                        </div>
                    </div>
                    <NavBot />
                </div>
            );
        }
    }
}

export default Login;