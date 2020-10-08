// $(document).ready(function () {
$('#savetoDB').on('click', function () {
	let name = localStorage.getItem('charName');
	let race = localStorage.getItem('charRace');
	let charClass = localStorage.getItem('charClass');
	let charGender = localStorage.getItem('charGender');
	let charID = localStorage.getItem('charID');
	console.log(charID);
	if (charID === null) {
		createUserChar(name, race, charClass, charGender);
	} else {
		updateUserChar(name, race, charClass, charGender, charID);
	}
});

$(document).foundation();
//Logout button clears localstorage so a new user can login
$('#logout').on('click', function () {
	event.preventDefault();
	// $(document).foundation();

	//CREATES MODAL
	// create a div for the modal
	var logoutModal = $('<div>');
	// add class and ID for modal
	$(logoutModal).addClass('reveal revealStyle');
	$(logoutModal).attr('id', 'logoutModal');
	$(logoutModal).attr('data-reveal', '');
	// append the modal div to mainbody
	$('#mainBody').append(logoutModal);

	//LOGOUT MODAL TITLE
	var logoutTitle = $('<h1>');
	$(logoutTitle).text('Wait!');
	$(logoutModal).append(logoutTitle);

	//LOGOUT EXPLAINED
	var logoutDesc1 = $('<p>');
	$(logoutDesc1).text('Have you saved your character?');
	var logoutDesc2 = $('<p>');
	$(logoutDesc2).text(
		'If you would like to save your character for the next time you use DnD Buddy you will need to click on Save and Logout; otherwise click on Logout without Saving or Cancel.'
	);
	$(logoutModal).append(logoutDesc1);
	$(logoutModal).append(logoutDesc2);

	// LOGOUT BUTTONS
	let logoutBtn1 = $('<a>', {
		text: 'Save and Logout',
		class: 'btn btn-primary logout-button',
		id: 'logout1',
		href: '/logout',
		click: function () {
			let name = localStorage.getItem('charName');
			let race = localStorage.getItem('charRace');
			let charClass = localStorage.getItem('charClass');
			let charGender = localStorage.getItem('charGender');
			let charID = localStorage.getItem('charID');
			console.log(charID);
			if (charID === null) {
				createUserChar(name, race, charClass, charGender);
			} else {
				updateUserChar(name, race, charClass, charGender, charID);
			}
			localStorage.clear();
			// $('logout1').attr('href', '/logout');
			// $('logout1').click();
			$('#logoutModal').foundation('close');
		},
	});
	let logoutBtn2 = $('<a>', {
		text: 'Logout without Saving',
		class: 'btn btn-primary logout-button',
		id: 'logout2',
		href: '/logout',
		click: function () {
			localStorage.clear();
			$('#logoutModal').foundation('close');
		},
	});
	let logoutBtn3 = $('<a>', {
		text: 'Cancel',
		class: 'btn btn-primary logout-button',
		id: 'logout3',
		click: function () {
			$('#logoutModal').foundation('close');
		},
	});
	$(logoutModal).append(logoutBtn1);
	$(logoutModal).append(logoutBtn2);
	$(logoutModal).append(logoutBtn3);
	$(document).foundation();
	$('#logoutModal').foundation('open');
});

// update the user data with the existing character
function updateUserChar(name, race, charClass, charGender, charID) {
	$.ajax({
		url: '/api/save',
		type: 'PUT',
		data: {
			char_name: name,
			race: race,
			char_class: charClass,
			char_gender: charGender,
			char_id: charID,
		},
	});
}

// save the data to the database for a new character
function createUserChar(name, race, charClass, charGender, charID) {
	$.ajax({
		url: '/api/saveANewChar',
		type: 'POST',
		data: {
			char_name: name,
			race: race,
			char_class: charClass,
			char_gender: charGender,
		},
	});
}
// });
