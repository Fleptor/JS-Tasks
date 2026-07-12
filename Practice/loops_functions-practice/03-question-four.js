// A loop outputting times table for specified number.

let number = prompt("Insert desired times table number: ");

for(let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ` + i*Number(number));
}
