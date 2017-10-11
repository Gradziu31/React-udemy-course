"use strict";

var square = function square(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(square(8));
console.log(squareArrow(8));

var squareArrowTwo = function squareArrowTwo(x) {
    return x * x;
};
console.log(squareArrowTwo(8));

//Challenge
var getFirstName = function getFirstName(firstName) {
    return firstName.split(' ')[0];
};
console.log(getFirstName("Adam Sandler"));

var pierwsze = function pierwsze(tylkoimie) {
    return tylkoimie.split(" ")[0];
};
console.log(pierwsze("Effy Stonem"));
