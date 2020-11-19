
import React, { Component } from 'react';
import axios from 'axios'
// import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './pages/css/reset.css';
import './pages/css/style.css';
import InitialModal from './components/WelcomeModal/setupModal';
import NavBlank from './components/NavBlank/NavBlank';
import NavBot from './components/NavBottom/NavBot';
import wizardCharacterSheet from './pages/audit/wizardcharactersheet';
import rogueCharacterSheet from './pages/audit/roguecharactersheet';
import fighterCharacterSheet from './pages/audit/fightercharactersheet';
import bardCharacterSheet from './pages/audit/bardcharactersheet';
import clericCharacterSheet from './pages/audit/clericcharactersheet';
import rangerCharacterSheet from './pages/audit/rangercharactersheet';
import CharacterSheet from './pages/characterSheet';
import SavedCharacter from './components/SavedCharacters/savedCharacters';
import CharacterCreation from './components/CharacterCreation/characterCreation';
import DungeonMaster from './pages/dungeon-master/dungeonmaster';
import Modal01 from './components/CharacterCreation/Modals1-18/01-modal';
import Modal02 from './components/CharacterCreation/Modals1-18/02-modal';
import Modal03 from './components/CharacterCreation/Modals1-18/03-modal';
import Modal04 from './components/CharacterCreation/Modals1-18/04-modal';
import Modal05 from './components/CharacterCreation/Modals1-18/05-modal';
import Modal06 from './components/CharacterCreation/Modals1-18/06-modal';
import Modal07 from './components/CharacterCreation/Modals1-18/07-modal';
import Modal08 from './components/CharacterCreation/Modals1-18/08-modal';
import Modal09 from './components/CharacterCreation/Modals1-18/09-modal';
import Modal10 from './components/CharacterCreation/Modals1-18/10-modal';
import Modal11 from './components/CharacterCreation/Modals1-18/11-modal';
import Modal12 from './components/CharacterCreation/Modals1-18/12-modal';
import Modal13 from './components/CharacterCreation/Modals1-18/13-modal';
import Modal14 from './components/CharacterCreation/Modals1-18/14-modal';
import Modal15 from './components/CharacterCreation/Modals1-18/15-modal';
import Modal16 from './components/CharacterCreation/Modals1-18/16-modal';
import Modal17 from './components/CharacterCreation/Modals1-18/17-modal';
import Modal18 from './components/CharacterCreation/Modals1-18/18-modal';
import Barbarian from './components/CharacterCreation/Modals1-18/barbarianModal';
import Bard from './components/CharacterCreation/Modals1-18/bardModal';
import Cleric from './components/CharacterCreation/Modals1-18/clericModal';
import Druid from './components/CharacterCreation/Modals1-18/druidModal';
import Fighter from './components/CharacterCreation/Modals1-18/fighterModal';
import Monk from './components/CharacterCreation/Modals1-18/monkModal';
import Paladin from './components/CharacterCreation/Modals1-18/paladinModal';
import Ranger from './components/CharacterCreation/Modals1-18/rangerModal';
import Rogue from './components/CharacterCreation/Modals1-18/rogueModal';
import Sorcerer from './components/CharacterCreation/Modals1-18/sorcererModal';
import Warlock from './components/CharacterCreation/Modals1-18/warlockModal';
import Wizard from './components/CharacterCreation/Modals1-18/wizardModal';
import Login from './pages/login';
import Register from './pages/register';
import PlayerSheet from './pages/playerSheet';
import AuditSelector from './components/AuditModal/app.js';
// import MyComponent from './pages/dummypage';

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
	  this.setState(userObject)
	}
  
	getUser() {
	  axios.get('/user/').then(response => {
		console.log('Get user response: ')
		console.log(response.data)
		if (response.data.user) {
		  console.log('Get User: There is a user saved in the server session: ')
  
		  this.setState({
			loggedIn: true,
			email: response.data.user.email
		  })
		} else {
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
			<div className='body'>
				<NavBlank updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
				<div className='mainContainer'>
					{/* auth route */}
					<Route exact path='/player' component={PlayerSheet} />
					<Route exact path='/savedcharacters' component={SavedCharacter} />
					<Route exact path='/01' component={Modal01} />
					<Route exact path='/02' component={Modal02} />
					<Route exact path='/03' component={Modal03} />
					<Route exact path='/04' component={Modal04} />
					<Route exact path='/05' component={Modal05} />
					<Route exact path='/06' component={Modal06} />
					<Route exact path='/07' component={Modal07} />
					<Route exact path='/08' component={Modal08} />
					<Route exact path='/09' component={Modal09} />
					<Route exact path='/10' component={Modal10} />
					<Route exact path='/11' component={Modal11} />
					<Route exact path='/12' component={Modal12} />
					<Route exact path='/13' component={Modal13} />
					<Route exact path='/14' component={Modal14} />
					<Route exact path='/15' component={Modal15} />
					<Route exact path='/16' component={Modal16} />
					<Route exact path='/17' component={Modal17} />
					<Route exact path='/18' component={Modal18} />
					<Route exact path='/barbarian' component={Barbarian} />
					<Route exact path='/bard' component={Bard} />
					<Route exact path='/cleric' component={Cleric} />
					<Route exact path='/druid' component={Druid} />
					<Route exact path='/fighter' component={Fighter} />
					<Route exact path='/monk' component={Monk} />
					<Route exact path='/paladin' component={Paladin} />
					<Route exact path='/ranger' component={Ranger} />
					<Route exact path='/rogue' component={Rogue} />
					<Route exact path='/sorcerer' component={Sorcerer} />
					<Route exact path='/warlock' component={Warlock} />
					<Route exact path='/wizard' component={Wizard} />
					<Route exact path='/main' component={CharacterSheet} />
					<Route exact path='/create' component={CharacterCreation} />
					<Route exact path='/dungeonmaster' component={DungeonMaster} />
					{/* non auth route */}
					<Route exact path='/wizardaudit' component={wizardCharacterSheet} />
					<Route exact path='/rogueaudit' component={rogueCharacterSheet} />
					<Route exact path='/fighteraudit' component={fighterCharacterSheet} />
					<Route exact path='/bardaudit' component={bardCharacterSheet} />
					<Route exact path='/clericaudit' component={clericCharacterSheet} />
					<Route exact path='/rangeraudit' component={rangerCharacterSheet} />
					<Route exact path='/audit' component={AuditSelector} />
					<Route exact path='/login' render={() => <Login updateUser={this.updateUser} />} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/' component={InitialModal} />
				</div>
				{/* test */}
				<NavBot />
			</div>
		</Router>
	);
}
}

export default App;
