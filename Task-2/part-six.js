let pandigital = prompt("Insert a number: ");
let panstring = pandigital.toString();
let array = [];

for(let k = 0; k < panstring.length; k++) {
    if (array.length === 0) {
        array.push(panstring[k]);
        continue; 
    }

    if( panstring[k] != array[i]) {
        array.push(panstring[k]);
    }
}

alert(array.length);
