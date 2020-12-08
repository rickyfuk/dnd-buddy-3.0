
import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './pages/css/reset.css';
import './pages/css/style.css';
import wizardCharacterSheet from './pages/audit/wizardcharactersheet';
import rogueCharacterSheet from './pages/audit/roguecharactersheet';
import fighterCharacterSheet from './pages/audit/fightercharactersheet';
import bardCharacterSheet from './pages/audit/bardcharactersheet';
import clericCharacterSheet from './pages/audit/clericcharactersheet';
import rangerCharacterSheet from './pages/audit/rangercharactersheet';
import CharacterSheet from './pages/characterSheet';
import SavedCharacter from './components/SavedCharacters/savedCharacters';
import CharacterName from './components/CharacterCreation/characterCreation';
import CharacterGender from './pages/mobile/characterGender';
import DungeonMaster from './pages/dungeon-master/dungeonmaster';
import FirstScreen from './pages/firstscreen';
import Login from './pages/login';
import Register from './pages/register';
import PlayerSheet from './pages/playerSheet';
import AuditSelector from './pages/audit/auditselectorsheet';
import HubModal from './components/HubModal/app.js';
import RaceModalMale from './pages/mobile/characterRaceMale';
import RaceModalFemale from './pages/mobile/characterRaceFemale';
import ClassModalMale from './pages/mobile/characterClassMale';
import ClassModalFemale from './pages/mobile/characterClassFemale';
import Offense from './pages/mobile/attack';
import Defense from './pages/mobile/defense';
import RP from './pages/mobile/rp';
import Utility from './pages/mobile/utility';
import GenderModal from './components/CharacterCreation/ModalGender/app.js';
import NameCharacter from './pages/mobile/characterNameMobile';
import API from './util/API';

class App extends Component {
	constructor() {
	  super()
	  this.state = {
		loggedIn: false,
		email: null
	  }
  
	  this.getUser = this.getUser.bind(this)
	  this.componentDidMount = this.componentDidMount.bind(this)
	  this.updateUser = this.updateUser.bind(this)
	}
  
	componentDidMount() {
	  this.getUser()
	}
  
	updateUser (userObject) {
	  this.setState(userObject);
	  this.getUser();
	}
  
	getUser() {
	  axios.get('/user/').then(response => {
		API.loadCharacter1().then(results => {
			if(results.data.name) {
			localStorage.setItem('name1', results.data.name)
			localStorage.setItem('gender1', results.data.gender)
			localStorage.setItem('race1', results.data.race)
			localStorage.setItem('charClass1', results.data.charClass)
			}
		})
		API.loadCharacter2().then(results => {	
			if(results.data.name2) {
			localStorage.setItem('name2', results.data.name2)
			localStorage.setItem('gender2', results.data.gender2)
			localStorage.setItem('race2', results.data.race2)
			localStorage.setItem('charClass2', results.data.charClass2)
			}
		})
		API.loadCharacter3().then(results => {	
			if(results.data.name3) {
			localStorage.setItem('name3', results.data.name3)
			localStorage.setItem('gender3', results.data.gender3)
			localStorage.setItem('race3', results.data.race3)
			localStorage.setItem('charClass3', results.data.charClass3)
			}
		})
		if (response.data.user) {
		  console.log('Get User: There is a user saved in the server session: ')
		  
		  this.setState({
			loggedIn: true,
			email: response.data.user.email
		  })
		  localStorage.setItem("email", response.data.user.email); 
		} 
		else {
		  console.log('Get user: no user');
		  this.setState({
			loggedIn: false,
			email: null
		  })
		}
		
	  })
	}

render() {
	return (
		<Router>
			<div>
				{/* auth route */}
				<Route exact path='/player'component={PlayerSheet} />)
				<Route exact path='/savedcharacters' component={SavedCharacter} />)
				<Route exact path='/main'component={CharacterSheet} />)
				<Route exact path='/name' component={CharacterName} />)
				<Route exact path='/create' component={CharacterGender} />)
				<Route exact path='/dungeonmaster' component={DungeonMaster} />)
				<Route exact path='/wizardaudit' component={wizardCharacterSheet} />
				<Route exact path='/rogueaudit' component={rogueCharacterSheet} />
				<Route exact path='/fighteraudit' component={fighterCharacterSheet} />
				<Route exact path='/bardaudit' component={bardCharacterSheet} />
				<Route exact path='/clericaudit' component={clericCharacterSheet} />
				<Route exact path='/rangeraudit' component={rangerCharacterSheet} />
				<Route exact path='/audit' component={AuditSelector} />
				<Route exact path='/hub' component={HubModal} />
				<Route exact path='/maleclass' component={ClassModalMale} />
				<Route exact path='/femaleclass' component={ClassModalFemale} />
				<Route exact path='/racemodalmale' component={RaceModalMale} />
				<Route exact path='/racemodalfemale' component={RaceModalFemale} />
				<Route exact path='/namecharacter' component={NameCharacter} />
				<Route exact path='/attack' component={Offense} />
				<Route exact path='/defense' component={Defense} />
				<Route exact path='/rp' component={RP} />
				<Route exact path='/utility' component={Utility} />
				<Route exact path='/gendermodal' component={GenderModal} />
				<Route exact path='/login' render={() => <Login updateUser={this.updateUser} />} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/' component={FirstScreen} />
			</div>
		</Router>
	);
}
}

export default App;
