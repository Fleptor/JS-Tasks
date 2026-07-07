let operation = prompt("Select desired operation (+, -, *, /)");
let num1 = prompt("Insert first number: ");
let num2 = prompt("Insert second number: ");
let answer = 0;
switch(operation) {
	case "+":
	answer = Number(num1) + Number(num2);	
	break;

	case "-":
	answer = Number(num1) - Number(num2);	
	break;

	case "/":
	answer = Number(num1) / Number(num2);	
	break;

	case "*":
	answer = Number(num1) * Number(num2);	
	break;
	
	default: alert("Please select from the possible operations.");
}

document.write("Your answer is: " + answer);
