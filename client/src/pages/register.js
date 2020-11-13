import React from 'react';
import NavBlank from '../components/NavBlank/NavBlank';
import NavBot from '../components/NavBottom/NavBot';
import './css/reset.css';
import './css/style.css';

class Register extends React.Component {
    constructor() {
    super();
        this.state = {
            email: '',
            password: '',
        }
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
        console.log('email:', this.state.email);
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
        console.log('password', this.state.password);
    }

    handleSubmit(e) { 
        e.preventDefault();
        console.log('your infromation is: username:', this.state.email, 'password', this.state.password)
        // server request goes here
    }

  render() { 
      return (
    <div className='body'>
        <NavBlank />
        <div className='mainContainer'>
            <div className='login'>
                <h2 class="topTitle">Register Form</h2>
                <form class="register">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email-input" placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmail}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password-input" placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePassword}></input>
                    </div>
                    {/* <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span> <span class="msg"></span>
                    </div> */}
                    <button type="submit" class="registerBtn button btn-default" onSubmit={this.handleSubmit}>Register</button>
                </form>
                <br />
                <p class="footerRoute">Or <a href="/login">Login Here</a></p>
            </div>
        </div>
        <NavBot />
    </div>
  );
}
}

export default Register;