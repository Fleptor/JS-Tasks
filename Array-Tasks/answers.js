//4

function firstOfArray(array) {
    return array[0];
}

//5
function lastOfArray(array) {
    return array[array.length - 1];
}

//6
let array = [0,5,7,9];
//[1,3,4,6,8,9,10]

console.log(array.pop());
console.log(array.pop());
console.log(array.pop());
console.log(array.push(6));
console.log(array.push(8));
console.log(array.push(9));
console.log(array.push(10));
console.log(array.shift());
console.log(array.unshift(4));
console.log(array.unshift(3));
console.log(array.unshift(1));

//7
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let array2 = [5,9,-7,3.5];

array2.push(5); //Adds 5 to the end of the array
array2.pop(); //Removes last element from array
array2.shift(); //Removes first element from array
array2.unshift(5) // Adds 5 to the beginning of the array

//8
function middleOfArray(array) {
   middle = (array.length/2) 
   return array[middle];
}

//9
let animals = ['cat', 'ele', 'bird'];
animals[0] = null;
animals[1] = "zebra";
animals[2] = "elephant";
console.log(animals);

var nums = [1,2,3,8,9];
//nums => [5,-22,3.5,44,98,44]
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44; // UNDEFINED

//10
function indexOfArray(array, i) {
   return array[i];
}

//11
function arrayExceptLast(array) {
    array.pop();
    return array;
}

//12
function addToEnd(array, value) {
    array.push(value);
    return array;
}

//13
function sumArray(array) {
   let sum = 0;
   for(let i = 0; i < array.length; i++) {
       sum += array[i];
   } 
   return sum;
}

function sumArray(array) {
    let sum = 0;
    let i = 0;
    while(i < array.length) {
        sum += array[i];
        i++;
    }
    return sum;
}


//14
function minInArray(array) {
    let minValue = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] < minValue) 
           minValue = array[i];
    }
    return minValue;
}

function minInArray(array) {
    let minValue = 0;
    let i = 0;
    while(i < array.length) {
        if(array[i] < minValue)
            minValue = array[i];
    }
    return minValue;
}

//15
function removeFromArray(array, value) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== value) {
            arr.push(array[i]);
        }
    }
    return arr;
}

function removeFromArray(array, value) {
    let i = 0;
    let arr = [];
    while(i < array.length) {
        if(array[i] !== value) {
            arr.push(array[i]);
        }
        i++;
    }
    return arr;
}

//16
function oddArray(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}

function oddArray(array) {
    let arr = [];
    let i = 0;
    while(i < array.length) {
        if(array[i] % 2 !== 0) {
            arr.push(array[i]);
        }
        i++;
    }
    return arr;
}

//17
function aveArray(array) {
    let average = 0;
    for(let i = 0; i < array.length; i++) {
       average += array[i]; 
    }

    average /= array.length;
    return average;
}

function aveArray(array) {
    let average = 0;
    let i = 0;
    while (i < array.length) {
       average += array[i]; 
       i++;
    }

    average /= array.length;
    return average;
}

//18
function shortestInArray(array) {
    let minChars = array[0].length;
    let shortestIndex = 0;
    for(let i = 1; i < array.length; i++) {
        if(array[i].length < minChars) {
            minChars = array[i].length;
            shortestIndex = i;
        }
    }
    return array[shortestIndex];
}

function shortestInArray(array) {
    let minChars = array[0].length;
    let shortestIndex = 0;
    let i = 0;
    while(i < array.length) {
        if(array[i].length < minChars) {
            minChars = array[i].length;
            shortestIndex = i;
        }
        i++;
    }
    return array[shortestIndex];
}

//19
function repeatCharTimes(string, character) {
    let repeatCount = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === character)
            repeatCount++;
    }
    return repeatCount;
}

function repeatCharTimes(string, character) {
    let repeatCount = 0;
    let i = 0;
    while(i < string.length) {
        if(string[i] === character) {
            repeatCount++;
        }
        i++;
    }
    return repeatCount;
}

//20
function evenIndexOddLength(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        if((i % 2 === 0) && (array[i].length % 2 !== 0)) {
            arr.push(array[i]); }
    }    

    return arr;
}

function evenIndexOddLength(array) {
    let arr = [];
    let i = 0;

    while(i < array.length) {
        if((i % 2 === 0) && (array[i].length % 2 !== 0)) {
            arr.push(array[i]);
        }
        i++;
    }    

    return arr;
}

//21
function powerElementIndex(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        arr.push(array[i] ** i);
    }
    return arr;
}

function powerElementIndex(array) {
    let arr = [];
    let i = 0;
    while(i < array.length) {
        arr.push(array[i] ** i);
        i++;
    }
    return arr;
}

//22
function evenNumberEvenIndex(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        if((i % 2 === 0) && (array[i] % 2 === 0)) {
            arr.push(array[i]); }
    }    

    return arr;
}

function evenNumberEvenIndex(array) {
    let arr = [];
    let i = 0;
    while(i < array.length) {
        if((i % 2 === 0) && (array[i] % 2 === 0)) {
            arr.push(array[i]); }
        i++;
    }    

    return arr;
}
