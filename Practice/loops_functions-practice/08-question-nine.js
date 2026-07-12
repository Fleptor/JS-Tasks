// Prompt user for sequence of numbers from 1 to 10 in order.
let initial = 0;
let value = 0;
while(true) {
    value = Number(prompt("Insert number: "));
    if((value - 1) === initial) {
        if(value === 10) { break;}
        initial++;
    } 
}

alert(initial);
