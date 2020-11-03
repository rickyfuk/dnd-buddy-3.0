import React from 'react';
import './NavBot.css';
import './dicesound.mp3';

// function diceSound() {
  
//   let diceSound = new Audio('./dicesound.mp3');

//   const diceRoll = () => {
//     diceSound.play()
//   }


function diceRoll() {

  let diceSound = new Audio('./dicesound.mp3');

  diceSound.play();

  let dSides = 4;

  let num = Math.floor(Math.random() * dSides + 1);

  console.log(num);

  // this.React.createClass ({document.getElementById("dice4").removeClass('df-d4-4');
  // document.getElementById('dice4').addClass('df-d4-' + num);

  // setTimeout(function () {
  //   diceSound.play();

  //   var i;
  //   for (i = 1; i < dSides + 1; i++) {
	// 		('#dice' + dSides).removeClass('df-d' + dSides + '-' + i);
	// 	}

	// 	var num = Math.floor(Math.random() * dSides + 1);
	// 	$('#dice' + dSides).addClass('df-d' + dSides + '-' + num);
	// }, 250);


  // let num = Math.floor(Math.random() * dSides + 1);

  // const newDiceNum = React.createClass({
  //   render() {
  //     const diceNo = 'df-d4-' + num;
  //     return (
        
  //     )
  //   }
  // })



}

function NavBot() {
  return (

    <nav className='navbarBottom navbar fixed-bottom navbar-light'>
        <i id='dice4' className="df-d4-4 dice-nav" onClick={diceRoll}></i>
        <i className="df-d6-6 dice-nav"></i>
        <i className="df-d8-8 dice-nav"></i>
        <i className="df-d10-10 dice-nav"></i>
        <i className="df-d12-12 dice-nav"></i>
        <i className="df-d20-20 dice-nav"></i>
	</nav>

  );
}

export default NavBot;
