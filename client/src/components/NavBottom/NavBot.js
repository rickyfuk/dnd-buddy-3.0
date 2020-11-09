import React from 'react';
import DiceEditor from './diceEdit';
import './NavBot.css';

let audio = new Audio('https://freesound.org/s/519419/');

function NavBot() {

  

  return (

    <nav className='navbarBottom navbar fixed-bottom navbar-light'>
      <DiceEditor />
      <i className='df-d6-6' onClick={() => audio.play()}></i>
      <i className='df-d8-8' onClick={() => audio.play()}></i>
      <i className='df-d10-10' onClick={() => audio.play()}></i>
      <i className='df-d12-12' onClick={() => audio.play()}></i>
      <i className='df-d20-20' onClick={() => audio.play()}></i>
    </nav>
  );
}

export default NavBot;


// function NavBot() {
//   return (

//     <nav className='navbarBottom navbar fixed-bottom navbar-light'>
//         <i id='dice4' className='df-d4-4 '></i>
//         <i className='df-d6-6 '></i>
//         <i className='df-d8-8 '></i>
//         <i className='df-d10-10 '></i>
//         <i className='df-d12-12 '></i>
//         <i className='df-d20-20 '></i>
// 	</nav>

//   );
// }

// export default NavBot;

// // function diceRoll(props) {

//   // const diceSound = new Audio('./dicesound.mp3');
//   // diceSound.play();

//   let diceClassName= 'df-d4-4';

//   let dSides = 4;

//   let num = Math.floor(Math.random() * dSides + 1);

//   console.log(num);

//   let diceClassName = 'df-d4-' + num;

//   console.log(diceClassName);

// }

  // this.React.createClass ({document.getElementById('dice4').removeClass('df-d4-4');
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