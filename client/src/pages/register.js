import React from 'react';
import NavBlank from '../components/NavBlank/NavBlank';
import NavBot from '../components/NavBottom/NavBot';
import './css/reset.css';
import './css/style.css';

function Register() {
  return (
    <div className='body'>
        <NavBlank />
        <div className='mainContainer'>
            <div className='login'>
                <h2 class="topTitle">Register Form</h2>
                <form class="register">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email-input" placeholder="Email"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password-input" placeholder="Password"></input>
                    </div>
                    {/* <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span> <span class="msg"></span>
                    </div> */}
                    <button type="submit" class="registerBtn button btn-default">Register</button>
                </form>
                <br />
                <p class="footerRoute">Or <a href="/login">Login Here</a></p>
            </div>
        </div>
        <NavBot />
    </div>
  );
}

export default Register;