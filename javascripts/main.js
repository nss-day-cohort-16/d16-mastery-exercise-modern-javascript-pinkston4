"use strict";

//required
let $ = require('jquery');
let Robot = require('./robot.js');
let robotPc = null;
let robotNpc = null;
$('.battleDome').hide();

//**************************************
//gathering input and creating player 1
//**************************************
$('#selectPc').change( () => {
	if($(event.target).val() === 'MiniDrone') {
		robotPc = new Robot.MiniDrone();
	} else if ($(event.target).val() === 'StealthDrone') {
		robotPc = new Robot.StealthDrone();
	} else if ($(event.target).val() === 'C3po') {
		robotPc = new Robot.C3po();
	} else if ($(event.target).val() === 'Terminator') {
		robotPc = new Robot.Terminator();
	} else if ($(event.target).val() === 'AiTank') {
		robotPc = new Robot.AiTank();
	} else if ($(event.target).val() === 'BattleBot') {
		robotPc = new Robot.BattleBot();
	}
});

//**************************************
//gathering input and creating player 2
//**************************************
$('#selectNpc').change( () => {
	if($(event.target).val() === 'MiniDrone') {
		robotNpc = new Robot.MiniDrone();
	} else if ($(event.target).val() === 'StealthDrone') {
		robotNpc = new Robot.StealthDrone();
	} else if ($(event.target).val() === 'C3po') {
		robotNpc = new Robot.C3po();
	} else if ($(event.target).val() === 'Terminator') {
		robotNpc = new Robot.Terminator();
	} else if ($(event.target).val() === 'AiTank') {
		robotNpc = new Robot.AiTank();
	} else if ($(event.target).val() === 'BattleBot') {
		robotNpc = new Robot.BattleBot();
	}
});

//**************************************************
//creating the player , moving on to battleDome
//**************************************************
$('#readyToFight').click( () => {
	if (robotPc === null || robotNpc ===null) {
		alert("Please input player names, and select your fighter.");
	} else {
		robotPc.playerName = $('#playerOne').val();
		robotNpc.playerName = $('#playerTwo').val();
		theBattleBegins();
	}
});

//**********************************************
//creating player cards
//**********************************************
function theBattleBegins () {
	console.log("creating BattleDome");
	console.log(robotPc, robotNpc);
	$('#battleDomeSetUp').hide();
	$('.battleDome').show();
	$('.playerCardPc').html(`<h2>Player One: ${robotPc.playerName}</h2>
		<h5>Robot Model: ${robotPc.name}</h5>
		<h5>Specialty Attack: ${robotPc.attack}</h5>
		<h5 class="playerOneHealth">Health: ${robotPc.health}</h5>`);
	$('.playerCardNpc').html(`<h2>Player Two: ${robotNpc.playerName}</h2>
		<h5>Robot Model: ${robotNpc.name}</h5>
		<h5>Specialty Attack: ${robotNpc.attack}</h5>
		<h5 class="playerTwoHealth">Health: ${robotNpc.health}</h5>`);
}

//*****************************************************
//event listener for attack, fight logic
//**************************++**************************
$('#attack').click(fight);

function fight () {
	robotPc.health = robotPc.health - robotNpc.damage;
	robotNpc.health =robotNpc.health - robotPc.damage;
	update();
}

function update () {
	$('.playerOneHealth').html(`Health: ${robotPc.health}`);
	$('.playerTwoHealth').html(`Health: ${robotNpc.health}`);
	if (robotPc.health <= 0 || robotNpc.health <= 0) {
		determineVictor();
	}
}

function determineVictor () {
	if (robotPc.health <= 0) {
		$('.playerOneHealth').html(`Health: 0`);
		alert(robotNpc.playerName + " won the fight!");
		$('#attack').hide();
	} else {
		$('.playerTwoHealth').html(`Health: 0`);
		alert(robotPc.playerName + " wont the fight!");
		$('#attack').hide();
	}
}









