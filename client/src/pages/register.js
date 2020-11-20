import React, { Component } from 'react';
import NavBlank from '../components/NavBlank/NavBlank';
import NavBot from '../components/NavBottom/NavBot';
import './css/reset.css';
import './css/style.css';
import axios from 'axios';


class Register extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',

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
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new email/password
		axios.post('/user/registeruser/', {
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('email already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
  return (
    <div className='body'>
        <NavBlank />
        <div className='mainContainer'>
            <div className='login background'>
                <h2 className="topTitleRegister">Register Form</h2>
                <form className="register register2">
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            name="email"
                            className="form-control" 
                            id="email-input" 
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email">

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
                    <button onClick={this.handleSubmit} type="submit" className="registerBtn button btn-default">Register</button>
                </form>
                <br />
                <p className="footerRoute"><a href="/login">Login</a></p>
            </div>
        </div>
        <NavBot />
    </div>
  );
}
}

export default Register;