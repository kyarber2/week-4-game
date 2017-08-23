var winCounter = 0;
var lossCounter = 0;
var clickCount = 0;
var crystalValue1 = 0;
var crystalValue2 = 0;
var crystalValue3 = 0;
var crystalValue4 = 0;
var crystalValueTotal = 0;
var totalNeededToWin = 0;
getTotalNeededToWin(); 

function getRandomCrystalValue() {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	}
function assignCrystalValues(){
	if (clickCount === 0){
		crystalValue1 = getRandomCrystalValue();
		crystalValue2 = getRandomCrystalValue();
		crystalValue3 = getRandomCrystalValue();
		crystalValue4 = getRandomCrystalValue();
		console.log (crystalValue1);
		console.log (crystalValue2);
		console.log (crystalValue3);
		console.log (crystalValue4);
		clickCount++;
	}
}
function getTotalNeededToWin() {
	if (clickCount === 0){
  		min = Math.ceil(19);
  		max = Math.floor(120);
  		totalNeededToWin = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  		console.log(totalNeededToWin);
  		$("#numberToWin").html("Total to win is: " + totalNeededToWin);
	}
}
function addToCrystalTotal(num){
	if (num === 1){
		crystalValueTotal += crystalValue1;
		console.log(crystalValueTotal);
		result = compare(crystalValueTotal, totalNeededToWin);
		if (result !== undefined) alert (result);
	}
	if (num === 2){
		crystalValueTotal += crystalValue2;
		console.log(crystalValueTotal);
		result = compare(crystalValueTotal, totalNeededToWin);
		if (result !== undefined) alert (result);
	}
	if (num === 3){
		crystalValueTotal += crystalValue3;
		console.log(crystalValueTotal);
		result = compare(crystalValueTotal, totalNeededToWin);
		if (result !== undefined) alert (result);
	}
	if (num === 4){
		crystalValueTotal += crystalValue4;
		console.log(crystalValueTotal);
		result = compare(crystalValueTotal, totalNeededToWin);
		if (result !== undefined) alert (result);
	}
	$("#totalScore").html(crystalValueTotal);
}
 function compare (crystalValue, totalToWin){
 	if (crystalValue === totalToWin){
 			winCounter++;
 			$("#win-total").html(winCounter);
 			reset();
			return("You win!");
		}
		else if (crystalValue > totalToWin){
			lossCounter++;
			$("#loss-total").html(lossCounter);
			reset();
			return("You lost!");
		}
	}

function reset(){
	clickCount = 0;
	crystalValueTotal = 0;
	getTotalNeededToWin();
	getRandomCrystalValue();
	assignCrystalValues();
}