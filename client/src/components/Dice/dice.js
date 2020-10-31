import React from 'react';

function Dice() {
  return (
 
    <div className="grid-x diceRow secondRow">

			<div className="containerDice grid-container full">
				<div className="grid-x diceGrid">
					<div className="medium-6 small-12 diceTray1">
						<i id="diceup4" className="df-d4-4"></i>
						<i id="diceup6" className="df-d6-6"></i>
						<i id="diceup8" className="df-d8-8"></i>
					</div>
					<div className="medium-6 small-12 diceTray2">
						<i id="diceup10" className="df-d10-10"></i>
						<i id="diceup12" className="df-d12-12"></i>
						<i id="diceup20" className="df-d20-20"></i>
					</div>
				</div>
			</div>
		
		</div>
  );
}

export default Dice;
