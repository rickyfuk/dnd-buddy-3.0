import React, { Component } from 'react';
import './NavTop.css';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NavTop extends Component {
  constructor() {
      super()
      this.logout = this.logout.bind(this)
  }

	// updateUser (userObject) {
	//   this.setState(userObject)
  // }
  
  logout(event) {
      event.preventDefault()
      console.log('logging out')
      axios.post('/user/logout').then(response => {
        console.log(response.data)
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            email: null
          })
        }
      window.location.reload(true);  
      }).catch(error => {
          console.log('Logout error')
      })
    }

  render() {
      const loggedIn = this.props.loggedIn;
      console.log('navbar render, props: ')
      console.log(this.props);


    return (
      
      <nav className='navbarTop navbar fixed-top navbar-light'>
        <a className='navbar-brand' href='/savedcharacters'>Saved Characters</a>
        <a className='navbar-brand' href='/create'>Character Creation</a>
        <a className='navbar-brand' href='/main'>Character Sheet</a>
        <a className='navbar-brand' href='/dungeonmaster'>Dungeon Master</a>
        <a href='/login' id='logout' className='navbar-brand' onClick={this.logout}> Logout </a>
      </nav>
    );
  }
}

export default NavTop;
