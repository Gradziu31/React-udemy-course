var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

//let mogę napisac tylko raz jeśli zrobię 2x nameLet terminal wykrzaczy bledy że już takie cos istnieje 
let nameLet = "Jen";
// nie może tu byc let nameLet bo będzie blad
nameLet = "Brayan";
console.log("nameLet", nameLet);

//tak samo jak wyzej moze byc uzyty tylko raz
const nameConst = "Frank";
// nie może tu byc const nameConst bo będzie blad
// nie moze tu byc nameConst bo tez bedzie blad
console.log("nameConst", nameConst);

function getPenName(){
    const petName = "Hal";
    return petName;
}

const petName = getPenName()
console.log(petName);




// const nie da się nadpisac
// let podobnie przyklady powyzej

// w funkcji let i const uzyte dzialaja blokowo
// function funkcja(){
//     uzycie tutaj let lub const
// }
// nie zadziala tutaj.