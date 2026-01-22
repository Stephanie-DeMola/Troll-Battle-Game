/*
	Author: Stephanie DeMola
	Date: 01/21/2026

	JavaScript Battle Game Script
*/


// Add an event handler to the button element
document.getElementById("button").onclick = startBattle;


// Definition of the startBattle() fucntion which begins the game
function startBattle() {
	// Clear out any old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	// First prompt for the user input stored in a variable
	let action = window.prompt("You're walking thropugh the forest and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nWill you BRIBE the troll?\n\nPlease enter your response below: ").toUpperCase();

	// Logic to handle the player's choice of action
	if(action === "FIGHT") {
		fightBattle();	
	} else if(action ==="RUN") {
		runBattle();
	} else if(action === "BRIBE") {
		bribeBattle();

	} else {
		window.alert("You entered: " + action + ". That is NOT A VALID CHOICE. Please try again!");
		startBattle();
	} //End of logic structure
} // end of startBattle()

	//Definition of the fightBattle() function
function fightBattle () {
	// Start by collecting some user responses
	let skill = window.prompt("Are you a skilled fighter? (YES or NO").toUpperCase();
	let strong = window.prompt("Do you think you are stronger than a Troll? (YES or NO").toUpperCase();

	// Logic that analyzes the responses and creates outcomes
	if(skill === "YES" || strong === "YES") {
		document.getElementById("victory").innerHTML = "You are a Warrior!!<br/>You survived!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Do you wish to Try Again?";
	} else {
		document.getElementById("defeat").innerHTML = "NO Warriors here...You're not stronger than a Troll!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Do you want to redeem yourself?";

	}

} 

// Definition of the runBattle() function
function runBattle() {
	// Start by collecting a user response
	let fast = window.prompt("You think your Fast Enough? (YES or NO").toUpperCase();

	// Logic that analyzes the response and creates outcomes
	if(fast === "YES") {
		document.getElementById("victory").innerHTML = "You survived because you ran!!<br/>BUT, can you live with yourself?!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Do you want to face the Troll again?";
	} else {
		document.getElementById("defeat").innerHTML = "NO Warriors here...You're NOT faster than a Troll!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Do you want to try to redeem yourself?";
	}

} // end of runBattle()


// Definition of the bribeBattle() function
function bribeBattle() {
	// Start by collecting a user response
	let money = window.prompt("You must pay the toll!\nDo you have any money? (YES or NO").toUpperCase();

	// Check money response for YES or NO
	if(money === "YES") {
		// User says YES -- then ask amount
		let amount = window.prompt("How much money do you have?\nPlease, enter a NUMERIC VALUE.")
		// NESTED IF statement to check the amount of money
		if(amount > 50) {
			// User has correct amount
			document.getElementById("victory").innerHTML = "The Troll accepts.<br/>You may pass!";
			document.getElementById("win").play();
			document.getElementById("button").textContent = "Do you want to pass the Troll again?";
		} else {
			// User had money, but NOT ENOUGH
			document.getElementById("defeat").innerHTML = "That's NOT ENOUGH!<br/>Your fate is sealed!";
			document.getElementById("lose").play();
			document.getElementById("button").textContent = "Do you want to try again?";
		}
	} else {
		// User has NO money
		document.getElementById("defeat").innerHTML = "What were you planning on doing with NO money?<br/>YOU LOSE!!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Do you want to try again?";
	}

} // end of bribeBattle()