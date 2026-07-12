// Creating a function that calculates area of rectangles.
let width = prompt("Insert rectangle width: ");
let height = prompt("Insert rectangle height: ");

function calculateArea(w,h) {
    let area = w * h;
    return area;
}

alert(calculateArea(width, height));
