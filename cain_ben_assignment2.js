// Ben Cain
// Project 2
// SDI 0113
// Functions and Loops

// Initial Variables
var maxeggs = 12;
var maxmilk = 2;
var maxcereal = 4;
var eggs = 3;
var milk = 1;
var cereal = 2;
var eggcost = .59;
var milkcost = 2.00;
var cerealcost = 3.25;

// Initial output
console.log("Let's check and see if we need more groceries.");

// Checking needs
if (eggs <= maxeggs){
	console.log("We need " + (maxeggs - eggs) +  " more eggs!");
	var needeggs = true;
} else {
	console.log("We have enough eggs.");
	var needeggs = false;
}

if (milk <= maxmilk){
	console.log("We need " + (maxmilk - milk) + " more gallons of milk!");
	var needmilk = true;
} else {
	console.log("We have enough milk.");
	var needmilk = false;
}

if (cereal <= maxcereal){
	console.log("We need " + (maxcereal - cereal) + " more boxes of cereal!");
	var needcereal = true;
} else {
	console.log("We have enough cereal.");
	var needcereal = false;
}

//This resets the "bought" count for the grocery functions.
var eggsbought = 0
var milkbought = 0
var cerealbought = 0

//Grocery functions
if (needeggs === true){
	console.log("buying eggs...")
	while (eggs < maxeggs) {
		var eggs = (eggs + 1);
		var eggsbought = (eggsbought + 1);
		console.log("Bought 1 egg.");
		console.log("We now have " + eggs + " eggs.");
	}
}

if (needmilk === true){
	console.log("buying milk...")
	while (milk < maxmilk) {
		var milk = (milk + 1);
		var milkbought = (milkbought + 1)
		console.log("Bought 1 gallon of milk");
		console.log("We now have " + milk + " gallons of milk.");
		}
}

if (needcereal === true){
console.log("buying cereal...")
	while (cereal < maxcereal) {
		var cereal = (cereal + 1);
		var cerealbought = (cerealbought + 1)
		console.log("Bought 1 box of cereal");
		console.log("We now have " + cereal + " boxes of cereal");
	}
}

// Cost calculation variables
var eggspent = (eggcost * eggsbought);
var milkspent = (milkbought * milkcost);
var cerealspent = (cerealbought * cerealcost);
var total = (eggspent + milkspent + cerealspent);

//Cost output
console.log("We spent $" + (eggspent) + " on eggs, $" + (milkspent) + " on milk, and $" + (cerealspent) + " on cereal with a total cost of $" + (total) );