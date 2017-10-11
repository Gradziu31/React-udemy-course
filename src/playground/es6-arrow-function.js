const square = function(x){
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

console.log(square(8));
console.log(squareArrow(8));

const squareArrowTwo = x => x * x;
console.log(squareArrowTwo(8));

//Challenge
const getFirstName = firstName => firstName.split(' ')[0];
console.log(getFirstName("Adam Sandler"));

const pierwsze = tylkoimie => {
    return tylkoimie.split(" ")[0];
};
console.log(pierwsze("Effy Stonem"));