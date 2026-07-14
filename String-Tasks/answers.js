//1
function concatenate(str1, str2) {
    console.log(str1 + " " + str2);
}

//2
function strLength(string) {
    console.log(string.length);
}

//3
function firstChar(string) {
    return str[0];
}

//4
//Coding is fun
function extractCodeStr(string) {
    return string.slice(0, 3) + "e";
}

//5
function vowelAtoE(string) {
    let str = "";
    for(let i = 0; i < string.length; i++) {
        if(string[i] === "a") {
            str += "e";
        } else {
            str += string[i];
        }
    }
    
    return str;
}

//6
function strUpperCase(string) {
    console.log(string.toUpperCase);
}

//7
function strSplit(string) {
    return string.split(",");
}

//8
function concatenateArray(array) {
   let str = ""; 
    for(let i = 0; i < array.length; i++) {
        if(i === array.length - 1) {
        str += array[i];
        } else {
        str += array[i] + " ";
        }
    } 

    return str;
}

//9
function trimStr(string) {
    console.log(string.trim());
}

//10
function includesInStr(string, value) {
    return string.includes(value);
}

//11
function reverseStr(string) {
    let str = "";
    for(let i = string.length - 1; i >= 0; i--) {
        str += string[i];
    }
    
    return str;
}

//12
function countLetterE(string) {
    let counter = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i].toLowerCase() === "e")
        counter++;
    }
    return `Letter 'E' counter: ${counter}`;
}

//13
function isPalindrome(string) {
    let b = string.length - 1;

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i].toLowerCase() !== string[b].toLowerCase()) {
            return false;
        }
        b--;
    }
    
    return true;
}

//14
function firstToUpperCase(string) {
    let str = "";
    string = string.trim();
    str += string[0].toUpperCase();
    
    for(let i = 1; i < string.length; i++) {
        if(string[i - 1] === " ") {
            str += string[i].toUpperCase();
        } else {
            str += string[i];
        }
    }
    
    return str;
}

//15
function approxStr(string) {
    let str = Number(string);
    return str.toFixed(2);
}

//16
function extractNumbers(string) {
    let arr = [];
    for(let i = 0; i < string.length; i++) {
        if((string[i] % 10) < 10) {
           arr += string[i]; 
        }
    }

    return arr;
}

//17
function validateEmail(string) {

}
