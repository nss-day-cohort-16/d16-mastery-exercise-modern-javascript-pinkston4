"use strict";


//*************************************
//base robot function
//**************************************
function Robot() {
	this.isBadAss = true;
}


// three types of robots that are all prototypes of robot
function Drone () {
	this.aerial = true;
}
Drone.prototype = new Robot();

function Bipedal () {
	this.hasLegs = true;
}
Bipedal.prototype = new Robot();
	
function Atv () {
	this.hasLegs = false;
	this.groundBased = true;
}
Atv.prototype = new Robot();

//********************************************
//each type of robot has 2 models specific to it
//model is bottom of prototype chain
//*********************************************

//type 1 Drone ***************************************
function MiniDrone () {
	this.name = "miniDrone";
	this.health = Math.floor(Math.random() * (80 - 50) + 100);
	this.attack = "rail-gun";
	this.damage = Math.floor(Math.random() * (60 - 20) + 25);
}
MiniDrone.prototype = new Drone();

function StealthDrone () {
	this.name = "stealthDrone";
	this.health = Math.floor(Math.random() * (100 - 50) + 100);
	this.attack = "missile";
	this.damage = Math.floor(Math.random() * (60 - 20) + 25);
}
StealthDrone.prototype = new Drone();

//type 2 Bipedal ****************************************
function C3po () {
	this.name = "c3po";
	this.health = Math.floor(Math.random() * (40 - 20) + 100);
	this.attack = "unbearable whining";
	this.damage = Math.floor(Math.random() * (100 - 50) + 55);
}
C3po.prototype = new Bipedal();

function Terminator () {
	this.name = "terminator";
	this.health = Math.floor(Math.random() * (100 - 60) + 100);
	this.attack = "death grip";
	this.damage = Math.floor(Math.random() * (50 - 25) + 25);
}
Terminator.prototype = new Bipedal();

//type3 Atv ****************************************
function AiTank () {
	this.name = "AiTank";
	this.health = Math.floor(Math.random() * (120 - 40) + 100);
	this.attack = "cannon";
	this.damage = Math.floor(Math.random() * (50 - 25) + 25);
}
AiTank.prototype = new Atv();

function BattleBot () {
	this.name = "battleBot";
	this.health = Math.floor(Math.random() * (90 - 30) + 100);
	this.attack = "flameThrower";
	this.damage = Math.floor(Math.random() * (50 - 25) + 25);
}
BattleBot.prototype = new Atv();

// browserfiy module exports (avoiding iife)*********************
module.exports = {Robot, Drone, Bipedal, Atv, MiniDrone, StealthDrone, C3po, Terminator, AiTank, BattleBot};