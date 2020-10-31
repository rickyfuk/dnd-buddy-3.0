import React from 'react';
import './stats.css';

function Stats() {
  return (

		<div className='grid-x thirdRow'>

	
			<div className='cell small-6 medium-3 large-2 statDiv mobile'>

	
				<div className='cell small-12 sideStat' id='strDiv'>
					<div className='helpButton'>
						<a className='fa fa-question-circle' href='/' id='str-guide' data-reveal-id='strength-modal'></a>
					</div>
					<img className='sideStatImg' />
					<div className='sideStatText'>
						<h2 className='sideStatNumber' id='sideStatNumber1'>10</h2>
						<h3>Strength</h3>
					</div>
				</div>

	
				<div className='small-12 cell sideStat' id='dexDiv'>
					<div className='helpButton'>
						<a className='fa fa-question-circle' href='/' id='dex-guide' data-reveal-id='dexterity-modal'></a>
					</div>
					<img className='sideStatImg' />
					<div className='sideStatText'>
						<h2 className='sideStatNumber' id='sideStatNumber2'>10</h2>
						<h3>Dexterity</h3>
					</div>
				</div>

		
				<div className='small-12 cell sideStat' id='conDiv'>
					<div className='helpButton'>
						<a className='fa fa-question-circle' href='/' id='con-guide'
							data-reveal-id='constitution-modal'></a>
					</div>
					<img className='sideStatImg' />
					<div className='sideStatText'>
						<h2 className='sideStatNumber' id='sideStatNumber3'>10</h2>
						<h3>Constitution</h3>
					</div>
				</div>

			</div>
		
			<div className='cell small-6 medium-3 medium-push-6 large-2 large-push-8 statDiv mobile'>

				<div className='cell small-12 sideStat' id='intDiv'>
					<div className='helpButton'>
						<a className='fa fa-question-circle' href='/' id='int-guide'
							data-reveal-id='intelligence-modal'></a>
					</div>
					<img src='' className='sideStatImg' />
					<div className='sideStatText'>
						<h3 className='sideStatNumber' id='sideStatNumber4'></h3>
						<h3>Intelligence</h3>
					</div>
				</div>

	
				<div className='small-12 cell sideStat' id='wisDiv'>
					<div className='helpButton'>
						<a className='fa fa-question-circle' href='/' id='wis-guide' data-reveal-id='wisdom-modal'></a>
					</div>
					<img src='img/front-end-images/medieval-frame.png' className='sideStatImg' />
					<div className='sideStatText'>
						<h3 className='sideStatNumber' id='sideStatNumber5'></h3>
						<h3>Wisdom</h3>
					</div>
				</div>

			
				<div className='small-12 cell sideStat' id='chaDiv'>
					<div className='helpButton'>
						<a className='fa fa-question-circle' href='/' id='cha-guide' data-reveal-id='charisma-modal'></a>
					</div>
					<img src='' className='sideStatImg' />
					<div className='sideStatText'>
						<h3 className='sideStatNumber' id='sideStatNumber6'></h3>
						<h3>Charisma</h3>
					</div>
				</div>
            </div>
			
		</div>

  );
}

export default Stats;