// A loop to count inserted values until user inserts 0.
let sum = 0;

while(true) {
    let value = Number(prompt("Insert a number: "));

    if(value != 0) {
        sum += value;
    } else {
        break; 
    }
}

alert(`The sum is: ${sum}`);
