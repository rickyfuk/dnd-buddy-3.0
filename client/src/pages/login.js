import React from 'react';
import NavBlank from '../components/NavBlank/NavBlank';
import NavBot from '../components/NavBottom/NavBot';
import './css/reset.css';
import './css/style.css';

function Login() {
    return (
        <div className='body'>
            <NavBlank />
            <div className='mainContainer'>
                <div className='login'>
                    <h2 className="topTitle">RPG: Adventurer's Academy Login</h2>
                    <form className="login">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="button">Login</button>
                    </form>
                    <br />
                    <p className="footerRoute">Or <a href="/register">Register Here</a></p>
                </div>
            </div>
            <NavBot />
        </div>
    );
}

export default Login;