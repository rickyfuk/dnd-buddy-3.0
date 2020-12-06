import React, { Component } from 'react';
import axios from 'axios';
// import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './pages/css/reset.css';
import './pages/css/style.css';
import InitialModal from './components/WelcomeModal/setupModal';
//import NavBlank from './components/NavBlank/NavBlank';
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
import CharacterName from './components/CharacterCreation/characterCreation';
import CharacterCreation from './components/CharacterCreation/ModalGender/app.js';
import DungeonMaster from './pages/dungeon-master/dungeonmaster';
import Login from './pages/login';
import Register from './pages/register';
import PlayerSheet from './pages/playerSheet';
import AuditSelector from './components/AuditModal/app.js';
import HubModal from './components/HubModal/app.js';
import RaceModalMale from './components/CharacterCreation/ModalRace/RaceMale/app.js';
import RaceModalFemale from './components/CharacterCreation/ModalRace/RaceFemale/app.js';
import ClassModalMale from './components/CharacterCreation/ModalClass/ClassMale/app.js';
import ClassModalFemale from './components/CharacterCreation/ModalClass/ClassFemale/app.js';
import GenderModal from './components/CharacterCreation/ModalGender/app.js';
import API from './util/API';

// import MyComponent from './pages/dummypage';

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			email: null,
		};

		this.getUser = this.getUser.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.updateUser = this.updateUser.bind(this);
	}

	componentDidMount() {
		console.log('component did mount');
		this.getUser();
	}

	updateUser(userObject) {
		console.log('update user');
		this.setState(userObject);
		this.getUser();
	}

	getUser() {
		axios.get('/user/').then((response) => {
			if (response.data.user) {
				console.log('Get User: There is a user saved in the server session: ');

				this.setState({
					loggedIn: true,
					email: response.data.user.email,
				});
				API.loadCharacter1().then((results) => {
					if (results.data.name) {
						localStorage.setItem('name1', results.data.name);
						localStorage.setItem('gender1', results.data.gender);
						localStorage.setItem('race1', results.data.race);
						localStorage.setItem('charClass1', results.data.charClass);
					}
				});
				API.loadCharacter2().then((results) => {
					if (results.data.name2) {
						localStorage.setItem('name2', results.data.name2);
						localStorage.setItem('gender2', results.data.gender2);
						localStorage.setItem('race2', results.data.race2);
						localStorage.setItem('charClass2', results.data.charClass2);
					}
				});
				API.loadCharacter3().then((results) => {
					if (results.data.name3) {
						localStorage.setItem('name3', results.data.name3);
						localStorage.setItem('gender3', results.data.gender3);
						localStorage.setItem('race3', results.data.race3);
						localStorage.setItem('charClass3', results.data.charClass3);
					}
				});
				localStorage.setItem('email', response.data.user.email);
				//   localStorage.setItem(response.data.user.character1);
			} else {
				console.log('Get user: no user');
				this.setState({
					loggedIn: false,
					email: null,
				});
			}
		});
	}

	render() {
		return (
			<Router>
				<div className='body'>
					<div>test new name</div>
					<NavTop updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
					{/* <NavTop /> */}
					<div className='mainContainer'>
						{/* auth route */}
						<Route
							exact
							path='/player'
							render={() =>
								this.state.loggedIn ? (
									<Route component={PlayerSheet} />
								) : (
									<Route component={InitialModal} />
								)
							}
						/>
						<Route
							exact
							path='/savedcharacters'
							render={() =>
								this.state.loggedIn ? (
									<Route component={SavedCharacter} />
								) : (
									<Route component={InitialModal} />
								)
							}
						/>
						<Route
							exact
							path='/main'
							render={() =>
								this.state.loggedIn ? (
									<Route component={CharacterSheet} />
								) : (
									<Route component={InitialModal} />
								)
							}
						/>
						<Route
							exact
							path='/name'
							render={() =>
								this.state.loggedIn ? (
									<Route component={CharacterName} />
								) : (
									<Route component={InitialModal} />
								)
							}
						/>
						<Route
							exact
							path='/create'
							render={() =>
								this.state.loggedIn ? (
									<Route component={CharacterCreation} />
								) : (
									<Route component={InitialModal} />
								)
							}
						/>
						<Route
							exact
							path='/dungeonmaster'
							render={() =>
								this.state.loggedIn ? (
									<Route component={DungeonMaster} />
								) : (
									<Route component={InitialModal} />
								)
							}
						/>
						{/* non auth route */}
						<Route exact path='/wizardaudit' component={wizardCharacterSheet} />
						<Route exact path='/rogueaudit' component={rogueCharacterSheet} />
						<Route
							exact
							path='/fighteraudit'
							component={fighterCharacterSheet}
						/>
						<Route exact path='/bardaudit' component={bardCharacterSheet} />
						<Route exact path='/clericaudit' component={clericCharacterSheet} />
						<Route exact path='/rangeraudit' component={rangerCharacterSheet} />
						<Route exact path='/audit' component={AuditSelector} />
						<Route exact path='/hub' component={HubModal} />
						<Route exact path='/maleclass' component={ClassModalMale} />
						<Route exact path='/femaleclass' component={ClassModalFemale} />
						<Route exact path='/racemodalmale' component={RaceModalMale} />
						<Route exact path='/racemodalfemale' component={RaceModalFemale} />
						<Route exact path='/gendermodal' component={GenderModal} />
						<Route
							exact
							path='/login'
							render={() => <Login updateUser={this.updateUser} />}
						/>
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
