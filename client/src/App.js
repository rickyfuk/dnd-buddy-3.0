
import React, { Component } from 'react';
import axios from 'axios'
// import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './pages/css/reset.css';
import './pages/css/style.css';
import InitialModal from './components/WelcomeModal/setupModal';
import NavBlank from './components/NavBlank/NavBlank';
import NavTop from './components/NavTop/NavTop';
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
import API from './util/API';
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
	  this.setState(userObject);
	  this.getUser();
	}
  
	getUser() {
	  axios.get('/user/').then(response => {
		console.log('Get user response: ')

		console.log("res.data of the user:" + response.data.user)
		API.loadCharacter1().then(results => {
			console.log(results);
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
		//   localStorage.setItem(response.data.user.character1);
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
				<NavTop updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
				<div className='mainContainer'>
					{/* auth route */}
					<Route exact path='/player' render={() =>(
						this.state.loggedIn ? ( <Route  component={PlayerSheet} />)
						: (<Route component={InitialModal} />)
						)} />
					<Route exact path='/savedcharacters' render={() =>(
						this.state.loggedIn ? ( <Route  component={SavedCharacter} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/01' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal01} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/02' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal02} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/03' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal03} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/04' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal04} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/05' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal05} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/06' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal06} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/07' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal07} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/08' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal08} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/09' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal09} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/10' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal10} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/11' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal11} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/12' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal12} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/13' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal13} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/14' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal14} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/15' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal15} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/16' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal16} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/17' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal17} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/18' render={() =>(
						this.state.loggedIn ? ( <Route  component={Modal18} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/barbarian' render={() =>(
						this.state.loggedIn ? ( <Route  component={Barbarian} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/bard' render={() =>(
						this.state.loggedIn ? ( <Route  component={Bard} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/cleric' render={() =>(
						this.state.loggedIn ? ( <Route  component={Cleric} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/druid' render={() =>(
						this.state.loggedIn ? ( <Route  component={Druid} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/fighter' render={() =>(
						this.state.loggedIn ? ( <Route  component={Fighter} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/monk' render={() =>(
						this.state.loggedIn ? ( <Route  component={Monk} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/paladin' render={() =>(
						this.state.loggedIn ? ( <Route  component={Paladin} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/ranger' render={() =>(
						this.state.loggedIn ? ( <Route  component={Ranger} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/rogue' render={() =>(
						this.state.loggedIn ? ( <Route  component={Rogue} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/sorcerer' render={() =>(
						this.state.loggedIn ? ( <Route  component={Sorcerer} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/warlock' render={() =>(
						this.state.loggedIn ? ( <Route  component={Warlock} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/wizard' render={() =>(
						this.state.loggedIn ? ( <Route  component={Wizard} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/main' render={() =>(
						this.state.loggedIn ? ( <Route  component={CharacterSheet} />)
						: (<Route component={InitialModal} />)
						)} /> 
					<Route exact path='/create' render={() =>(
						this.state.loggedIn ? ( <Route  component={CharacterCreation} />)
						: (<Route component={InitialModal} />)
						)} />
					<Route exact path='/dungeonmaster' render={() =>(
						this.state.loggedIn ? ( <Route  component={DungeonMaster} />)
						: (<Route component={InitialModal} />)
						)} /> 
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
