// Creating a function to return with a function is true or false.

function isEven(n) {
    return (n % 2 === 0);
}

let num = Number(prompt("Insert a number: "));
alert(`Is Even? ${isEven(num)}`);

