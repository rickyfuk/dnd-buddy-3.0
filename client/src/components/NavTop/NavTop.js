import React, { Component } from 'react';
import './NavTop.css';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

//CHECK THIS PAGE OR APP.JS TO SOLVE AUTH AND LOGIN PROBLEMS ON HEROKU DEPLOYMENT

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
      }).catch(error => {
          console.log('Logout error')
      });
      sessionStorage.clear();
      localStorage.clear();
      window.location.reload(true); 
    }

  render() {
      // const loggedIn = this.props.loggedIn;
      // console.log('navbar render, props: ')
      // console.log(this.props);


    return (

    <div>

      {/* <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <a className='navbar-brand' href='/savedcharacters'>Saved Characters</a>
            <a className='navbar-brand' href='/create'>Character Creation</a>
            <a className='navbar-brand' href='/main'>Character Sheet</a>
            <a className='navbar-brand' href='/dungeonmaster'>Dungeon Master</a>
            <a href='/login' id='logout' className='navbar-brand' onClick={this.logout}> Logout </a>
          </div>
        </div>
        <nav className="navbarTop navbar fixed-top navbar-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div> */}

      <div className='mobileNav'>
        <nav className='navbarTop navbar fixed-top navbar-light'>
          <a className='navbar-brand' href='/savedcharacters'>
            <button className='topNav-icon fa fa-save'></button>
          </a>
          <a className='navbar-brand' href='/create'>
            <button className='topNav-icon fa fa-cog'></button>
          </a>
          <a className='navbar-brand' href='/main'>
            <button className='topNav-icon fa fa-drivers-license'></button>
          </a>
          <a className='navbar-brand' href='/dungeonmaster'>
            <button className='topNav-icon fa fa-map-o'></button>
          </a>
          <a href='/login' id='logout' className='navbar-brand' onClick={this.logout}>
            <button className='topNav-icon fa fa-sign-out'></button>
          </a>
        </nav>
      </div>


      
      <div className='desktopNav'>
        <nav className='navbarTop navbar fixed-top navbar-light'>
          <a className='navbar-brand' href='/savedcharacters'>Saved Characters</a>
          <a className='navbar-brand' href='/create'>Character Creation</a>
          <a className='navbar-brand' href='/main'>Character Sheet</a>
          <a className='navbar-brand' href='/dungeonmaster'>Dungeon Master</a>
          <a href='/login' id='logout' className='navbar-brand' onClick={this.logout}> Logout </a>
        </nav>
      </div>
    </div>
    );
  }
}

export default NavTop;
