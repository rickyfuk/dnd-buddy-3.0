$(window).on('load', function () {
$(document).foundation();
$('Modal1').foundation('open');
});

// 1. Gender Modal
$('#toModal2').click(function () {
	event.preventDefault();

	// create a div for the modal
	var modal2 = $('<div>');
	// add class and ID for modal1
	$(modal2).addClass('reveal revealStyle');
	$(modal2).attr('id', 'Modal2');
	$(modal2).attr('data-reveal', '');
	// append the modal1 div to mainbody
	$('#mainBody').append(modal2);

	// create a h1 for the div
	var modal2h1 = $('<h1>');
	// add text for the h1 tag
	$(modal2h1).text('Choose a Gender');
	// append the modal1h1 to the div
	$(modal2).append(modal2h1);

	// create a button tag for the answers
	var modal2b1 = $('<button>');
	// add the class and ID for the button
	$(modal2b1).addClass('button revealButton toModal3');
	$(modal2b1).attr('id', 'maleBtn');
	// add the data value for the button
	$(modal2b1).attr('dataValue', 'Male');
	// add value for the button
	$(modal2b1).text('Male');
	// append the button to the div
	$(modal2).append(modal2b1);

	// create a button tag for the answers
	var modal2b2 = $('<button>');
	// add the class and ID for the button
	$(modal2b2).addClass('button revealButton toModal3');
	$(modal2b2).attr('id', 'femaleBtn');
	// add the data value for the button
	$(modal2b2).attr('dataValue', 'Female');
	// add value for the button
	$(modal2b2).text('Female');
	// append the button to the div
	$(modal2).append(modal2b2);

	// create a button tag for the close button
	var modal2b3 = $('<button>');
	// add the class and attr for the button
	$(modal2b3).addClass('close-button');
	$(modal2b3).attr('data-close', '');
	$(modal2b3).attr('aria-label', 'Close reveal');
	$(modal2b3).attr('type', 'button');
	// add the span for the close button
	$(modal2b3).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal2).append(modal2b3);

	// close modal1
	$('#Modal1').foundation('close');
	// reload the foundation and open the modal2
	$(document).foundation();
	$('#Modal2').foundation('open');
});

$('#closeM1').click(function () {
	event.preventDefault();

	// close modal1
	$('#Modal1').foundation('close');
});

// 2. Question 1 Modal
$(document).on('click', '.toModal3', function () {
	event.preventDefault();
	gender = $(this).attr('dataValue');
	playerSelection.push(gender);

	// create a div for the modal3
	var modal3 = $('<div>');
	// add class and ID for modal3
	$(modal3).addClass('reveal revealStyle');
	$(modal3).attr('id', 'Modal3');
	$(modal3).attr('data-reveal', '');
	// append the modal1 div to mainbody
	$('#mainBody').append(modal3);

	// create a h1 for the div
	var modal3h1 = $('<h1>');
	// add text for the h1 tag
	$(modal3h1).text('Do you want to cast magic or smash things?');
	// append the modal1h1 to the div
	$(modal3).append(modal3h1);

	// create a p tag for the div
	var modal3p1 = $('<p>');
	// add class and ID for modal3
	$(modal3p1).addClass('lead');
	// add text for the h1 tag
	$(modal3p1).text('Select one of the following options:');
	// append the modal1h1 to the div
	$(modal3).append(modal3p1);

	// create a button tag for the answers
	var modal3b1 = $('<button>');
	// add the class and ID for the button
	$(modal3b1).addClass('button revealButton toModal4');
	// add the data value for the button
	$(modal3b1).attr('dataValue', 'magic');
	// add value for the button
	$(modal3b1).text('Cast Magic!');
	// append the button to the div
	$(modal3).append(modal3b1);

	// create a button tag for the answers
	var modal3b2 = $('<button>');
	// add the class and ID for the button
	$(modal3b2).addClass('button revealButton toModal5');
	// add the data value for the button
	$(modal3b2).attr('dataValue', 'smash');
	// add value for the button
	$(modal3b2).text('Smash!');
	// append the button to the div
	$(modal3).append(modal3b2);

	// create a button tag for the answers
	var modal3b3 = $('<button>');
	// add the class and ID for the button
	$(modal3b3).addClass('button revealButton toModal6');
	// add the data value for the button
	$(modal3b3).attr('dataValue', 'both');
	// add value for the button
	$(modal3b3).text('Both!');
	// append the button to the div
	$(modal3).append(modal3b3);

	// create a button tag for the close button
	var modal3b4 = $('<button>');
	// add the class and attr for the button
	$(modal3b4).addClass('close-button');
	$(modal3b4).attr('data-close', '');
	$(modal3b4).attr('aria-label', 'Close reveal');
	$(modal3b4).attr('type', 'button');
	// add the span for the close button
	$(modal3b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal3).append(modal3b4);

	// close modal2
	$('#Modal2').foundation('close');
	// reload the foundation and open the modal3
	$(document).foundation();
	$('#Modal3').foundation('open');
});

// 3. Cast Magic Modal
$(document).on('click', '.toModal4', function () {
	event.preventDefault();

	// create a div for the modal4
	var modal4 = $('<div>');
	// add class and ID for modal4
	$(modal4).addClass('reveal revealStyle');
	$(modal4).attr('id', 'Modal4');
	$(modal4).attr('data-reveal', '');
	// append the modal1 div to mainbody
	$('#mainBody').append(modal4);

	// create a h1 for the div
	var modal4h1 = $('<h1>');
	// add text for the h1 tag
	$(modal4h1).text('Are you religious?');
	// append the modal1h1 to the div
	$(modal4).append(modal4h1);

	// create a p tag for the div
	var modal4p1 = $('<p>');
	// add class and ID for modal3
	$(modal4p1).addClass('lead');
	// add text for the h1 tag
	$(modal4p1).text('Select one of the following options:');
	// append the modal4h1 to the div
	$(modal4).append(modal4p1);

	// create a button tag for the answers
	var modal4b1 = $('<button>');
	// add the class and ID for the button
	$(modal4b1).addClass('button revealButton toClericModal');
	// add the data value for the button
	$(modal4b1).attr('dataValue', 'religious');
	// add value for the button
	$(modal4b1).text('Yes, I am religious.');
	// append the button to the div
	$(modal4).append(modal4b1);

	// create a button tag for the answers
	var modal4b2 = $('<button>');
	// add the class and ID for the button
	$(modal4b2).addClass('button revealButton toModal7');
	// add the data value for the button
	$(modal4b2).attr('dataValue', 'nonRelgious');
	// add value for the button
	$(modal4b2).text('No, not really.');
	// append the button to the div
	$(modal4).append(modal4b2);

	// create a button tag for the answers
	var modal4b3 = $('<button>');
	// add the class and ID for the button
	$(modal4b3).addClass('button revealButton toModal3');
	// add the data value for the button
	$(modal4b3).attr('dataValue', 'backTo3');
	// add value for the button
	$(modal4b3).text('Back');
	// append the button to the div
	$(modal4).append(modal4b3);

	// create a button tag for the close button
	var modal4b4 = $('<button>');
	// add the class and attr for the button
	$(modal4b4).addClass('close-button');
	$(modal4b4).attr('data-close', '');
	$(modal4b4).attr('aria-label', 'Close reveal');
	$(modal4b4).attr('type', 'button');
	// add the span for the close button
	$(modal4b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal4).append(modal4b4);

	// close modal3
	$('#Modal3').foundation('close');
	// reload the foundation and open the modal4
	$(document).foundation();
	$('#Modal4').foundation('open');
});

// 4. Smash Modal
$(document).on('click', '.toModal5', function () {
	event.preventDefault();
	localStorage.setItem('prefer', 'smash');

	// create a div for the modal5
	var modal5 = $('<div>');
	// add class and ID for modal5
	$(modal5).addClass('reveal revealStyle');
	$(modal5).attr('id', 'Modal5');
	$(modal5).attr('data-reveal', '');
	// append the modal5 div to mainbody
	$('#mainBody').append(modal5);

	// create a h1 for the div
	var modal5h1 = $('<h1>');
	// add text for the h1 tag
	$(modal5h1).text('Do you want to attack from up close or from a distance?');
	// append the modal5h1 to the div
	$(modal5).append(modal5h1);

	// create a p tag for the div
	var modal5p1 = $('<p>');
	// add class and ID for modal5
	$(modal5p1).addClass('lead');
	// add text for the h1 tag
	$(modal5p1).text('Select one of the following options:');
	// append the modal5h1 to the div
	$(modal5).append(modal5p1);

	// create a button tag for the answers
	var modal5b1 = $('<button>');
	// add the class and ID for the button
	$(modal5b1).addClass('button revealButton toModal8');
	// add the data value for the button
	$(modal5b1).attr('dataValue', 'close');
	// add value for the button
	$(modal5b1).text('Up Close');
	// append the button to the div
	$(modal5).append(modal5b1);

	// create a button tag for the answers
	var modal5b2 = $('<button>');
	// add the class and ID for the button
	$(modal5b2).addClass('button revealButton toModal9');
	// add the data value for the button
	$(modal5b2).attr('dataValue', 'distance');
	// add value for the button
	$(modal5b2).text('From a Distance');
	// append the button to the div
	$(modal5).append(modal5b2);

	// create a button tag for the answers
	var modal5b3 = $('<button>');
	// add the class and ID for the button
	$(modal5b3).addClass('button revealButton toModal3');
	// add the data value for the button
	$(modal5b3).attr('dataValue', 'backTo3');
	// add value for the button
	$(modal5b3).text('Back');
	// append the button to the div
	$(modal5).append(modal5b3);

	// create a button tag for the close button
	var modal5b4 = $('<button>');
	// add the class and attr for the button
	$(modal5b4).addClass('close-button');
	$(modal5b4).attr('data-close', '');
	$(modal5b4).attr('aria-label', 'Close reveal');
	$(modal5b4).attr('type', 'button');
	// add the span for the close button
	$(modal5b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal5).append(modal5b4);

	// close modal3
	$('#Modal3').foundation('close');
	// reload the foundation and open the modal5
	$(document).foundation();
	$('#Modal5').foundation('open');
});

// 5. Both Magic and Smash Modal
$(document).on('click', '.toModal6', function () {
	event.preventDefault();
	localStorage.setItem('prefer', 'both');

	// create a div for the modal6
	var modal6 = $('<div>');
	// add class and ID for modal6
	$(modal6).addClass('reveal revealStyle');
	$(modal6).attr('id', 'Modal6');
	$(modal6).attr('data-reveal', '');
	// append the modal6 div to mainbody
	$('#mainBody').append(modal6);

	// create a h1 for the div
	var modal6h1 = $('<h1>');
	// add text for the h1 tag
	$(modal6h1).text('Are you good with people?');
	// append the modal6h1 to the div
	$(modal6).append(modal6h1);

	// create a p tag for the div
	var modal6p1 = $('<p>');
	// add class and ID for modal6
	$(modal6p1).addClass('lead');
	// add text for the h1 tag
	$(modal6p1).text('Select one of the following options:');
	// append the modal6h1 to the div
	$(modal6).append(modal6p1);

	// create a button tag for the answers
	var modal6b1 = $('<button>');
	// add the class and ID for the button
	$(modal6b1).addClass('button revealButton toModal11');
	// add the data value for the button
	$(modal6b1).attr('dataValue', 'badPeople');
	// add value for the button
	$(modal6b1).text('Not at all.');
	// append the button to the div
	$(modal6).append(modal6b1);

	// create a button tag for the answers
	var modal6b2 = $('<button>');
	// add the class and ID for the button
	$(modal6b2).addClass('button revealButton toModal10');
	// add the data value for the button
	$(modal6b2).attr('dataValue', 'goodPeople');
	// add value for the button
	$(modal6b2).text('Yes, people love me!');
	// append the button to the div
	$(modal6).append(modal6b2);

	// create a button tag for the answers
	var modal6b3 = $('<button>');
	// add the class and ID for the button
	$(modal6b3).addClass('button revealButton toModal3');
	// add the data value for the button
	$(modal6b3).attr('dataValue', 'backTo3');
	// add value for the button
	$(modal6b3).text('Back');
	// append the button to the div
	$(modal6).append(modal6b3);

	// create a button tag for the close button
	var modal6b4 = $('<button>');
	// add the class and attr for the button
	$(modal6b4).addClass('close-button');
	$(modal6b4).attr('data-close', '');
	$(modal6b4).attr('aria-label', 'Close reveal');
	$(modal6b4).attr('type', 'button');
	// add the span for the close button
	$(modal6b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal6).append(modal6b4);

	// close modal3
	$('#Modal3').foundation('close');
	// reload the foundation and open the modal6
	$(document).foundation();
	$('#modal6').foundation('open');
});

// 6. Study Modal
$(document).on('click', '.tomodal7', function () {
	event.preventDefault();

	// create a div for the modal7
	var modal7 = $('<div>');
	// add class and ID for modal7
	$(modal7).addClass('reveal revealStyle');
	$(modal7).attr('id', 'modal7');
	$(modal7).attr('data-reveal', '');
	// append the modal7 div to mainbody
	$('#mainBody').append(modal7);

	// create a h1 for the div
	var modal7h1 = $('<h1>');
	// add text for the h1 tag
	$(modal7h1).text('Do you like to study?');
	// append the modal7h1 to the div
	$(modal7).append(modal7h1);

	// create a p tag for the div
	var modal7p1 = $('<p>');
	// add class and ID for modal7
	$(modal7p1).addClass('lead');
	// add text for the h1 tag
	$(modal7p1).text('Select one of the following options:');
	// append the modal7h1 to the div
	$(modal7).append(modal7p1);

	// create a button tag for the answers
	var modal7b1 = $('<button>');
	// add the class and ID for the button
	$(modal7b1).addClass('button revealButton toModal12');
	// add the data value for the button
	$(modal7b1).attr('dataValue', 'noStudy');
	// add value for the button
	$(modal7b1).text('Boring.');
	// append the button to the div
	$(modal7).append(modal7b1);

	// create a button tag for the answers
	var modal7b2 = $('<button>');
	// add the class and ID for the button
	$(modal7b2).addClass('button revealButton toModal13');
	// add the data value for the button
	$(modal7b2).attr('dataValue', 'study');
	// add value for the button
	$(modal7b2).text('Books, Books, Books!');
	// append the button to the div
	$(modal7).append(modal7b2);

	// create a button tag for the answers
	var modal7b3 = $('<button>');
	// add the class and ID for the button
	$(modal7b3).addClass('button revealButton toModal4');
	// add the data value for the button
	$(modal7b3).attr('dataValue', 'backTo4');
	// add value for the button
	$(modal7b3).text('Back');
	// append the button to the div
	$(modal7).append(modal7b3);

	// create a button tag for the close button
	var modal7b4 = $('<button>');
	// add the class and attr for the button
	$(modal7b4).addClass('close-button');
	$(modal7b4).attr('data-close', '');
	$(modal7b4).attr('aria-label', 'Close reveal');
	$(modal7b4).attr('type', 'button');
	// add the span for the close button
	$(modal7b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal7).append(modal7b4);

	// close modal3
	$('#Modal4').foundation('close');
	// reload the foundation and open the modal7
	$(document).foundation();
	$('#modal7').foundation('open');
});

// 7. People Modal
$(document).on('click', '.tomodal8', function () {
	event.preventDefault();

	// create a div for the modal8
	var modal8 = $('<div>');
	// add class and ID for modal8
	$(modal8).addClass('reveal revealStyle');
	$(modal8).attr('id', 'modal8');
	$(modal8).attr('data-reveal', '');
	// append the modal8 div to mainbody
	$('#mainBody').append(modal8);

	// create a h1 for the div
	var modal8h1 = $('<h1>');
	// add text for the h1 tag
	$(modal8h1).text('Are you good with people?');
	// append the modal8h1 to the div
	$(modal8).append(modal8h1);

	// create a p tag for the div
	var modal8p1 = $('<p>');
	// add class and ID for modal8
	$(modal8p1).addClass('lead');
	// add text for the h1 tag
	$(modal8p1).text('Select one of the following options:');
	// append the modal8h1 to the div
	$(modal8).append(modal8p1);

	// create a button tag for the answers
	var modal8b1 = $('<button>');
	// add the class and ID for the button
	$(modal8b1).addClass('button revealButton toRangerModal');
	// add the data value for the button
	$(modal8b1).attr('dataValue', 'peopleBad');
	// add value for the button
	$(modal8b1).text('No, I prefer animals.');
	// append the button to the div
	$(modal8).append(modal8b1);

	// create a button tag for the answers
	var modal8b2 = $('<button>');
	// add the class and ID for the button
	$(modal8b2).addClass('button revealButton toModal10');
	// add the data value for the button
	$(modal8b2).attr('dataValue', 'goodPeople');
	// add value for the button
	$(modal8b2).text('Yes, I prefer people.');
	// append the button to the div
	$(modal8).append(modal8b2);

	// create a button tag for the answers
	var modal8b3 = $('<button>');
	// add the class and ID for the button
	$(modal8b3).addClass('button revealButton toModal5');
	// add the data value for the button
	$(modal8b3).attr('dataValue', 'backTo5');
	// add value for the button
	$(modal8b3).text('Back');
	// append the button to the div
	$(modal8).append(modal8b3);

	// create a button tag for the close button
	var modal8b4 = $('<button>');
	// add the class and attr for the button
	$(modal8b4).addClass('close-button');
	$(modal8b4).attr('data-close', '');
	$(modal8b4).attr('aria-label', 'Close reveal');
	$(modal8b4).attr('type', 'button');
	// add the span for the close button
	$(modal8b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal8).append(modal8b4);

	// close modal3
	$('#Modal5').foundation('close');
	// reload the foundation and open the modal8
	$(document).foundation();
	$('#modal8').foundation('open');
});

// 8. Fight for a Cause Modal
$(document).on('click', '.tomodal9', function () {
	event.preventDefault();
	localStorage.setItem('prevModal', 9);

	// create a div for the modal9
	var modal9 = $('<div>');
	// add class and ID for modal9
	$(modal9).addClass('reveal revealStyle');
	$(modal9).attr('id', 'modal9');
	$(modal9).attr('data-reveal', '');
	// append the modal9 div to mainbody
	$('#mainBody').append(modal9);

	// create a h1 for the div
	var modal9h1 = $('<h1>');
	// add text for the h1 tag
	$(modal9h1).text('Do you fight for a cause?');
	// append the modal9h1 to the div
	$(modal9).append(modal9h1);

	// create a p tag for the div
	var modal9p1 = $('<p>');
	// add class and ID for modal9
	$(modal9p1).addClass('lead');
	// add text for the h1 tag
	$(modal9p1).text('Select one of the following options:');
	// append the modal9h1 to the div
	$(modal9).append(modal9p1);

	// create a button tag for the answers
	var modal9b1 = $('<button>');
	// add the class and ID for the button
	$(modal9b1).addClass('button revealButton toModal16');
	// add the data value for the button
	$(modal9b1).attr('dataValue', 'cause');
	// add value for the button
	$(modal9b1).text('Absolutely.');
	// append the button to the div
	$(modal9).append(modal9b1);

	// create a button tag for the answers
	var modal9b2 = $('<button>');
	// add the class and ID for the button
	$(modal9b2).addClass('button revealButton toModal15');
	// add the data value for the button
	$(modal9b2).attr('dataValue', 'money');
	// add value for the button
	$(modal9b2).text('I fight for money.');
	// append the button to the div
	$(modal9).append(modal9b2);

	// create a button tag for the answers
	var modal9b3 = $('<button>');
	// add the class and ID for the button
	$(modal9b3).addClass('button revealButton toModal5');
	// add the data value for the button
	$(modal9b3).attr('dataValue', 'backTo5');
	// add text for the button
	$(modal9b3).text('Back');
	// append the button to the div
	$(modal9).append(modal9b3);

	// create a button tag for the close button
	var modal9b4 = $('<button>');
	// add the class and attr for the button
	$(modal9b4).addClass('close-button');
	$(modal9b4).attr('data-close', '');
	$(modal9b4).attr('aria-label', 'Close reveal');
	$(modal9b4).attr('type', 'button');
	// add the span for the close button
	$(modal9b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal9).append(modal9b4);

	// close modal3
	$('#Modal5').foundation('close');
	// reload the foundation and open the modal9
	$(document).foundation();
	$('#modal9').foundation('open');
});

// 9. Sneaky Modal
$(document).on('click', '.tomodal10', function () {
	event.preventDefault();
	var prefer = localStorage.getItem('prefer');

	// create a div for the modal10
	var modal10 = $('<div>');
	// add class and ID for modal10
	$(modal10).addClass('reveal revealStyle');
	$(modal10).attr('id', 'modal10');
	$(modal10).attr('data-reveal', '');
	// append the modal10 div to mainbody
	$('#mainBody').append(modal10);

	// create a h1 for the div
	var modal10h1 = $('<h1>');
	// add text for the h1 tag
	$(modal10h1).text('Are you sneaky?');
	// append the modal10h1 to the div
	$(modal10).append(modal10h1);

	// create a p tag for the div
	var modal10p1 = $('<p>');
	// add class and ID for modal10
	$(modal10p1).addClass('lead');
	// add text for the h1 tag
	$(modal10p1).text('Select one of the following options:');
	// append the modal10h1 to the div
	$(modal10).append(modal10p1);

	// create a button tag for the answers
	var modal10b1 = $('<button>');
	// add the class and ID for the button
	$(modal10b1).addClass('button revealButton toRogueModal');
	// add the data value for the button
	$(modal10b1).attr('dataValue', 'sneaky');
	// add value for the button
	$(modal10b1).text('Very.');
	// append the button to the div
	$(modal10).append(modal10b1);

	// create a button tag for the answers
	var modal10b2 = $('<button>');
	// add the class and ID for the button
	$(modal10b2).addClass('button revealButton toModal17');
	// add the data value for the button
	$(modal10b2).attr('dataValue', 'notSneaky');
	// add value for the button
	$(modal10b2).text('Not so much.');
	// append the button to the div
	$(modal10).append(modal10b2);

	// create a button tag for the answers
	var modal10b3 = $('<button>');

	if (prefer === 'both') {
		// add the class and ID for the button
		$(modal10b3).addClass('button revealButton toModal6');
		// add the data value for the button
		$(modal10b3).attr('dataValue', 'backTo6');
		// add value for the button

		// close modal6
		$('#Modal6').foundation('close');
	}
	else {
		// add the class and ID for the button
		$(modal10b3).addClass('button revealButton toModal8');
		// add the data value for the button
		$(modal10b3).attr('dataValue', 'backTo8');

		// close modal8
		$('#Modal8').foundation('close');
	}

	$(modal10b3).text('Back');
	// append the button to the div
	$(modal10).append(modal10b3);
	

	// create a button tag for the close button
	var modal10b4 = $('<button>');
	// add the class and attr for the button
	$(modal10b4).addClass('close-button');
	$(modal10b4).attr('data-close', '');
	$(modal10b4).attr('aria-label', 'Close reveal');
	$(modal10b4).attr('type', 'button');
	// add the span for the close button
	$(modal10b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal10).append(modal10b4);

	// reload the foundation and open the modal10
	$(document).foundation();
	$('#modal10').foundation('open');
});

// 10. Animal Modal
$(document).on('click', '.tomodal11', function () {
	event.preventDefault();

	// create a div for the modal11
	var modal11 = $('<div>');
	// add class and ID for modal11
	$(modal11).addClass('reveal revealStyle');
	$(modal11).attr('id', 'modal11');
	$(modal11).attr('data-reveal', '');
	// append the modal11 div to mainbody
	$('#mainBody').append(modal11);

	// create a h1 for the div
	var modal11h1 = $('<h1>');
	// add text for the h1 tag
	$(modal11h1).text('Do you like animals?');
	// append the modal11h1 to the div
	$(modal11).append(modal11h1);

	// create a p tag for the div
	var modal11p1 = $('<p>');
	// add class and ID for modal11
	$(modal11p1).addClass('lead');
	// add text for the h1 tag
	$(modal11p1).text('Select one of the following options:');
	// append the modal11h1 to the div
	$(modal11).append(modal11p1);

	// create a button tag for the answers
	var modal11b1 = $('<button>');
	// add the class and ID for the button
	$(modal11b1).addClass('button revealButton toDruidModal');
	// add the data value for the button
	$(modal11b1).attr('dataValue', 'animals');
	// add value for the button
	$(modal11b1).text('Animals are my friends.');
	// append the button to the div
	$(modal11).append(modal11b1);

	// create a button tag for the answers
	var modal11b2 = $('<button>');
	// add the class and ID for the button
	$(modal11b2).addClass('button revealButton toModal10');
	// add the data value for the button
	$(modal11b2).attr('dataValue', 'noAnimals');
	// add value for the button
	$(modal11b2).text('Eh, they are okay.');
	// append the button to the div
	$(modal11).append(modal11b2);

	// create a button tag for the answers
	var modal11b3 = $('<button>');
	// add the class and ID for the button
	$(modal11b3).addClass('button revealButton toModal6');
	// add the data value for the button
	$(modal11b3).attr('dataValue', 'backTo6');
	// add text for the button
	$(modal11b3).text('Back');
	// append the button to the div
	$(modal11).append(modal11b3);

	// create a button tag for the close button
	var modal11b4 = $('<button>');
	// add the class and attr for the button
	$(modal11b4).addClass('close-button');
	$(modal11b4).attr('data-close', '');
	$(modal11b4).attr('aria-label', 'Close reveal');
	$(modal11b4).attr('type', 'button');
	// add the span for the close button
	$(modal11b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal11).append(modal11b4);

	// close modal3
	$('#Modal6').foundation('close');
	// reload the foundation and open the modal11
	$(document).foundation();
	$('#modal11').foundation('open');
});

// 11. Born with Magic Modal
$(document).on('click', '.tomodal12', function () {
	event.preventDefault();

	// create a div for the modal12
	var modal12 = $('<div>');
	// add class and ID for modal12
	$(modal12).addClass('reveal revealStyle');
	$(modal12).attr('id', 'modal12');
	$(modal12).attr('data-reveal', '');
	// append the modal12 div to mainbody
	$('#mainBody').append(modal12);

	// create a h1 for the div
	var modal12h1 = $('<h1>');
	// add text for the h1 tag
	$(modal12h1).text('Were you born with magic?');
	// append the modal12h1 to the div
	$(modal12).append(modal12h1);

	// create a p tag for the div
	var modal12p1 = $('<p>');
	// add class and ID for modal12
	$(modal12p1).addClass('lead');
	// add text for the h1 tag
	$(modal12p1).text('Select one of the following options:');
	// append the modal12h1 to the div
	$(modal12).append(modal12p1);

	// create a button tag for the answers
	var modal12b1 = $('<button>');
	// add the class and ID for the button
	$(modal12b1).addClass('button revealButton toWarlockModal');
	// add the data value for the button
	$(modal12b1).attr('dataValue', 'nope');
	// add value for the button
	$(modal12b1).text('Nope.');
	// append the button to the div
	$(modal12).append(modal12b1);

	// create a button tag for the answers
	var modal12b2 = $('<button>');
	// add the class and ID for the button
	$(modal12b2).addClass('button revealButton toSorcererModal');
	// add the data value for the button
	$(modal12b2).attr('dataValue', 'blood');
	// add value for the button
	$(modal12b2).text('It is in my blood.');
	// append the button to the div
	$(modal12).append(modal12b2);

	// create a button tag for the answers
	var modal12b3 = $('<button>');
	// add the class and ID for the button
	$(modal12b3).addClass('button revealButton toModal7');
	// add the data value for the button
	$(modal12b3).attr('dataValue', 'backTo7');
	// add text for the button
	$(modal12b3).text('Back');
	// append the button to the div
	$(modal12).append(modal12b3);

	// create a button tag for the close button
	var modal12b4 = $('<button>');
	// add the class and attr for the button
	$(modal12b4).addClass('close-button');
	$(modal12b4).attr('data-close', '');
	$(modal12b4).attr('aria-label', 'Close reveal');
	$(modal12b4).attr('type', 'button');
	// add the span for the close button
	$(modal12b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal12).append(modal12b4);

	// close modal3
	$('#Modal7').foundation('close');
	// reload the foundation and open the modal12
	$(document).foundation();
	$('#modal12').foundation('open');
});

// 12. Music Modal
$(document).on('click', '.tomodal13', function () {
	event.preventDefault();

	// create a div for the modal13
	var modal13 = $('<div>');
	// add class and ID for modal13
	$(modal13).addClass('reveal revealStyle');
	$(modal13).attr('id', 'modal13');
	$(modal13).attr('data-reveal', '');
	// append the modal13 div to mainbody
	$('#mainBody').append(modal13);

	// create a h1 for the div
	var modal13h1 = $('<h1>');
	// add text for the h1 tag
	$(modal13h1).text('How do you feel about music?');
	// append the modal13h1 to the div
	$(modal13).append(modal13h1);

	// create a p tag for the div
	var modal13p1 = $('<p>');
	// add class and ID for modal13
	$(modal13p1).addClass('lead');
	// add text for the h1 tag
	$(modal13p1).text('Select one of the following options:');
	// append the modal13h1 to the div
	$(modal13).append(modal13p1);

	// create a button tag for the answers
	var modal13b1 = $('<button>');
	// add the class and ID for the button
	$(modal13b1).addClass('button revealButton toBardModal');
	// add the data value for the button
	$(modal13b1).attr('dataValue', 'music');
	// add value for the button
	$(modal13b1).text('I love music.');
	// append the button to the div
	$(modal13).append(modal13b1);

	// create a button tag for the answers
	var modal13b2 = $('<button>');
	// add the class and ID for the button
	$(modal13b2).addClass('button revealButton toModal14');
	// add the data value for the button
	$(modal13b2).attr('dataValue', 'noMusic');
	// add value for the button
	$(modal13b2).text('It is fine.');
	// append the button to the div
	$(modal13).append(modal13b2);

	// create a button tag for the answers
	var modal13b3 = $('<button>');
	// add the class and ID for the button
	$(modal13b3).addClass('button revealButton toModal7');
	// add the data value for the button
	$(modal13b3).attr('dataValue', 'backTo7');
	// add text for the button
	$(modal13b3).text('Back');
	// append the button to the div
	$(modal13).append(modal13b3);

	// create a button tag for the close button
	var modal13b4 = $('<button>');
	// add the class and attr for the button
	$(modal13b4).addClass('close-button');
	$(modal13b4).attr('data-close', '');
	$(modal13b4).attr('aria-label', 'Close reveal');
	$(modal13b4).attr('type', 'button');
	// add the span for the close button
	$(modal13b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal13).append(modal13b4);

	// close modal3
	$('#Modal7').foundation('close');
	// reload the foundation and open the modal13
	$(document).foundation();
	$('#modal13').foundation('open');
});

// 13. Animal Modal 2
$(document).on('click', '.tomodal14', function () {
	event.preventDefault();

	// create a div for the modal14
	var modal14 = $('<div>');
	// add class and ID for modal14
	$(modal14).addClass('reveal revealStyle');
	$(modal14).attr('id', 'modal14');
	$(modal14).attr('data-reveal', '');
	// append the modal14 div to mainbody
	$('#mainBody').append(modal14);

	// create a h1 for the div
	var modal14h1 = $('<h1>');
	// add text for the h1 tag
	$(modal14h1).text('Do you like animals?');
	// append the modal14h1 to the div
	$(modal14).append(modal14h1);

	// create a p tag for the div
	var modal14p1 = $('<p>');
	// add class and ID for modal14
	$(modal14p1).addClass('lead');
	// add text for the h1 tag
	$(modal14p1).text('Select one of the following options:');
	// append the modal14h1 to the div
	$(modal14).append(modal14p1);

	// create a button tag for the answers
	var modal14b1 = $('<button>');
	// add the class and ID for the button
	$(modal14b1).addClass('button revealButton toWizardModal');
	// add the data value for the button
	$(modal14b1).attr('dataValue', 'creatures');
	// add value for the button
	$(modal14b1).text('Not really.');
	// append the button to the div
	$(modal14).append(modal14b1);

	// create a button tag for the answers
	var modal14b2 = $('<button>');
	// add the class and ID for the button
	$(modal14b2).addClass('button revealButton toDruidModal');
	// add the data value for the button
	$(modal14b2).attr('dataValue', 'money');
	// add value for the button
	$(modal14b2).text('Animals rock!');
	// append the button to the div
	$(modal14).append(modal14b2);

	// create a button tag for the answers
	var modal14b3 = $('<button>');
	// add the class and ID for the button
	$(modal14b3).addClass('button revealButton toModal13');
	// add the data value for the button
	$(modal14b3).attr('dataValue', 'backTo13');
	// add text for the button
	$(modal14b3).text('Back');
	// append the button to the div
	$(modal14).append(modal14b3);

	// create a button tag for the close button
	var modal14b4 = $('<button>');
	// add the class and attr for the button
	$(modal14b4).addClass('close-button');
	$(modal14b4).attr('data-close', '');
	$(modal14b4).attr('aria-label', 'Close reveal');
	$(modal14b4).attr('type', 'button');
	// add the span for the close button
	$(modal14b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal14).append(modal14b4);

	// close modal13
	$('#Modal13').foundation('close');
	// reload the foundation and open the modal14
	$(document).foundation();
	$('#modal14').foundation('open');
});

// 14. Civilized Modal
$(document).on('click', '.tomodal15', function () {
	event.preventDefault();

	// create a div for the modal15
	var modal15 = $('<div>');
	// add class and ID for modal15
	$(modal15).addClass('reveal revealStyle');
	$(modal15).attr('id', 'modal15');
	$(modal15).attr('data-reveal', '');
	// append the modal15 div to mainbody
	$('#mainBody').append(modal15);

	// create a h1 for the div
	var modal15h1 = $('<h1>');
	// add text for the h1 tag
	$(modal15h1).text('Are you civilized?');
	// append the modal15h1 to the div
	$(modal15).append(modal15h1);

	// create a p tag for the div
	var modal15p1 = $('<p>');
	// add class and ID for modal15
	$(modal15p1).addClass('lead');
	// add text for the h1 tag
	$(modal15p1).text('Select one of the following options:');
	// append the modal15h1 to the div
	$(modal15).append(modal15p1);

	// create a button tag for the answers
	var modal15b1 = $('<button>');
	// add the class and ID for the button
	$(modal15b1).addClass('button revealButton toFighterModal');
	// add the data value for the button
	$(modal15b1).attr('dataValue', 'civilized');
	// add value for the button
	$(modal15b1).text('I have some manners.');
	// append the button to the div
	$(modal15).append(modal15b1);

	// create a button tag for the answers
	var modal15b2 = $('<button>');
	// add the class and ID for the button
	$(modal15b2).addClass('button revealButton toBarbarianModal');
	// add the data value for the button
	$(modal15b2).attr('dataValue', 'notCivilized');
	// add value for the button
	$(modal15b2).text('Me wildman.');
	// append the button to the div
	$(modal15).append(modal15b2);

	// create a button tag for the answers
	var modal15b3 = $('<button>');
	// add the class and ID for the button
	$(modal15b3).addClass('button revealButton toModal9');
	// add the data value for the button
	$(modal15b3).attr('dataValue', 'backTo9');
	// add text for the button
	$(modal15b3).text('Back');
	// append the button to the div
	$(modal15).append(modal15b3);

	// create a button tag for the close button
	var modal15b4 = $('<button>');
	// add the class and attr for the button
	$(modal15b4).addClass('close-button');
	$(modal15b4).attr('data-close', '');
	$(modal15b4).attr('aria-label', 'Close reveal');
	$(modal15b4).attr('type', 'button');
	// add the span for the close button
	$(modal15b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal15).append(modal15b4);

	// close modal9
	$('#Modal9').foundation('close');
	// reload the foundation and open the modal15
	$(document).foundation();
	$('#modal15').foundation('open');
});

// 15. Martial Arts Modal
$(document).on('click', '.tomodal16', function () {
	event.preventDefault();

	var fromModal = localStorage.getItem('prevModal');

	// create a div for the modal16
	var modal16 = $('<div>');
	// add class and ID for modal16
	$(modal16).addClass('reveal revealStyle');
	$(modal16).attr('id', 'modal16');
	$(modal16).attr('data-reveal', '');
	// append the modal16 div to mainbody
	$('#mainBody').append(modal16);

	// create a h1 for the div
	var modal16h1 = $('<h1>');
	// add text for the h1 tag
	$(modal16h1).text('Do you know martial arts?');
	// append the modal16h1 to the div
	$(modal16).append(modal16h1);

	// create a p tag for the div
	var modal16p1 = $('<p>');
	// add class and ID for modal16
	$(modal16p1).addClass('lead');
	// add text for the h1 tag
	$(modal16p1).text('Select one of the following options:');
	// append the modal16h1 to the div
	$(modal16).append(modal16p1);

	// create a button tag for the answers
	var modal16b1 = $('<button>');
	// add the class and ID for the button
	$(modal16b1).addClass('button revealButton toMonkModal');
	// add the data value for the button
	$(modal16b1).attr('dataValue', 'martialArts');
	// add value for the button
	$(modal16b1).text('Yes, Sensei.');
	// append the button to the div
	$(modal16).append(modal16b1);

	// create a button tag for the answers
	var modal16b2 = $('<button>');
	// add the class and ID for the button
	$(modal16b2).addClass('button revealButton toPaladinModal');
	// add the data value for the button
	$(modal16b2).attr('dataValue', 'noMartialArts');
	// add value for the button
	$(modal16b2).text('I do not.');
	// append the button to the div
	$(modal16).append(modal16b2);

	// create a button tag for the answers
	var modal16b3 = $('<button>');

	if (fromModal === 9) {
		// add the class and ID for the button
		$(modal16b3).addClass('button revealButton toModal9');
		// add the data value for the button
		$(modal16b3).attr('dataValue', 'backTo9');
		// add value for the button

		// close modal9
		$('#Modal9').foundation('close');
	}
	else {
		// add the class and ID for the button
		$(modal16b3).addClass('button revealButton toModal18');
		// add the data value for the button
		$(modal16b3).attr('dataValue', 'backTo18');

		// close modal18
		$('#Modal18').foundation('close');
	}

	// create a button tag for the close button
	var modal16b4 = $('<button>');
	// add the class and attr for the button
	$(modal16b4).addClass('close-button');
	$(modal16b4).attr('data-close', '');
	$(modal16b4).attr('aria-label', 'Close reveal');
	$(modal16b4).attr('type', 'button');
	// add the span for the close button
	$(modal16b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal16).append(modal16b4);

	// reload the foundation and open the modal16
	$(document).foundation();
	$('#modal16').foundation('open');
});

// 16. Spells or Weapons Modal
$(document).on('click', '.tomodal17', function () {
	event.preventDefault();

	// create a div for the modal17
	var modal17 = $('<div>');
	// add class and ID for modal17
	$(modal17).addClass('reveal revealStyle');
	$(modal17).attr('id', 'modal17');
	$(modal17).attr('data-reveal', '');
	// append the modal17 div to mainbody
	$('#mainBody').append(modal17);

	// create a h1 for the div
	var modal17h1 = $('<h1>');
	// add text for the h1 tag
	$(modal17h1).text('Do you prefer spells or weapons?');
	// append the modal17h1 to the div
	$(modal17).append(modal17h1);

	// create a p tag for the div
	var modal17p1 = $('<p>');
	// add class and ID for modal17
	$(modal17p1).addClass('lead');
	// add text for the h1 tag
	$(modal17p1).text('Select one of the following options:');
	// append the modal17h1 to the div
	$(modal17).append(modal17p1);

	// create a button tag for the answers
	var modal17b1 = $('<button>');
	// add the class and ID for the button
	$(modal17b1).addClass('button revealButton toBardModal');
	// add the data value for the button
	$(modal17b1).attr('dataValue', 'spells');
	// add value for the button
	$(modal17b1).text('Spells');
	// append the button to the div
	$(modal17).append(modal17b1);

	// create a button tag for the answers
	var modal17b2 = $('<button>');
	// add the class and ID for the button
	$(modal17b2).addClass('button revealButton toModal18');
	// add the data value for the button
	$(modal17b2).attr('dataValue', 'weapons');
	// add value for the button
	$(modal17b2).text('Weapons');
	// append the button to the div
	$(modal17).append(modal17b2);

	// create a button tag for the answers
	var modal17b3 = $('<button>');
	// add the class and ID for the button
	$(modal17b3).addClass('button revealButton toModal10');
	// add the data value for the button
	$(modal17b3).attr('dataValue', 'backTo10');
	// add text for the button
	$(modal17b3).text('Back');
	// append the button to the div
	$(modal17).append(modal17b3);

	// create a button tag for the close button
	var modal17b4 = $('<button>');
	// add the class and attr for the button
	$(modal17b4).addClass('close-button');
	$(modal17b4).attr('data-close', '');
	$(modal17b4).attr('aria-label', 'Close reveal');
	$(modal17b4).attr('type', 'button');
	// add the span for the close button
	$(modal17b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal17).append(modal17b4);

	// close modal10
	$('#Modal10').foundation('close');
	// reload the foundation and open the modal17
	$(document).foundation();
	$('#modal17').foundation('open');
});

// 17. Wealth Modal
$(document).on('click', '.tomodal18', function () {
	event.preventDefault();

	localStorage.setItem('prevModal', 18);

	// create a div for the modal18
	var modal18 = $('<div>');
	// add class and ID for modal18
	$(modal18).addClass('reveal revealStyle');
	$(modal18).attr('id', 'modal18');
	$(modal18).attr('data-reveal', '');
	// append the modal18 div to mainbody
	$('#mainBody').append(modal18);

	// create a h1 for the div
	var modal18h1 = $('<h1>');
	// add text for the h1 tag
	$(modal18h1).text('Do you want to be wealthy?');
	// append the modal18h1 to the div
	$(modal18).append(modal18h1);

	// create a p tag for the div
	var modal18p1 = $('<p>');
	// add class and ID for modal18
	$(modal18p1).addClass('lead');
	// add text for the h1 tag
	$(modal18p1).text('Select one of the following options:');
	// append the modal18h1 to the div
	$(modal18).append(modal18p1);

	// create a button tag for the answers
	var modal18b1 = $('<button>');
	// add the class and ID for the button
	$(modal18b1).addClass('button revealButton toRogueModal');
	// add the data value for the button
	$(modal18b1).attr('dataValue', 'wealth');
	// add value for the button
	$(modal18b1).text('Of course I do.');
	// append the button to the div
	$(modal18).append(modal18b1);

	// create a button tag for the answers
	var modal18b2 = $('<button>');
	// add the class and ID for the button
	$(modal18b2).addClass('button revealButton toModal16');
	// add the data value for the button
	$(modal18b2).attr('dataValue', 'noWealth');
	// add value for the button
	$(modal18b2).text('Meh.');
	// append the button to the div
	$(modal18).append(modal18b2);

	// create a button tag for the answers
	var modal18b3 = $('<button>');
	// add the class and ID for the button
	$(modal18b3).addClass('button revealButton toModal17');
	// add the data value for the button
	$(modal18b3).attr('dataValue', 'backTo17');
	// add text for the button
	$(modal18b3).text('Back');
	// append the button to the div
	$(modal18).append(modal18b3);

	// create a button tag for the close button
	var modal18b4 = $('<button>');
	// add the class and attr for the button
	$(modal18b4).addClass('close-button');
	$(modal18b4).attr('data-close', '');
	$(modal18b4).attr('aria-label', 'Close reveal');
	$(modal18b4).attr('type', 'button');
	// add the span for the close button
	$(modal18b4).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(modal18).append(modal18b4);

	// close modal17
	$('#Modal17').foundation('close');
	// reload the foundation and open the modal18
	$(document).foundation();
	$('#modal18').foundation('open');
});

//Set Gender, Race and Class to Local Storage and to Name Banner
function saveToLocal(playerSelection) {
	localStorage.setItem('charGender', playerSelection[0]);
	$('#gender').text(playerSelection[0]);
	localStorage.setItem('charRace', playerSelection[1]);
	$('#race').text(playerSelection[1]);
	localStorage.setItem('charRange', playerSelection[2]);
	localStorage.setItem('charStyle', playerSelection[3]);
	localStorage.setItem('charClass', playerSelection[4]);
	$('#class').text(playerSelection[4]);

	// Remove dropdowm elements
	$('#femList').remove();
	$('#maleList').remove();
	$('#removeGender').removeClass();
	$('#genderUL').removeClass();
	$('#dwarfList').remove();
	$('#elfList').remove();
	$('#humList').remove();
	$('#removeRace').removeClass();
	$('#raceUL').removeClass();
	$('#cleList').remove();
	$('#figList').remove();
	$('#ranList').remove();
	$('#rogList').remove();
	$('#wizList').remove();
	$('#removeClass').removeClass();
	$('#classUL').removeClass();
}
