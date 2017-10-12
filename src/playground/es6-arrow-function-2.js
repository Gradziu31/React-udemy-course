//poniższy przyklad zadziala i wyświetli wszystkie argumenty z console.log 
const add = function(a, b){
    console.log(arguments);
    return a+b;
};

console.log(add(50, 5));


//ponizszy kod nie zadziala, w tym przypadku zeby wyswietlic argumenty trzeba uzyc funkcji z ES5
const addTwo = (a, b) => {
    // gdy uzyje console.log ponizesz dostane blad: Uncaught ReferenceError: arguments is not defined
    //console.log(arguments);
    return a+b;
};

console.log(addTwo(50, 5));
//-----------------------------------------------------------------
const user = {
    name: "Brayan",
    cities: ["Philadelphia", "New York", "Dublin",],
    printPlacesLived: function(){
        //zmienna ponizej musi byc zeby funkcja ponizej miala dostep do tych wszystkich rzeczy z this.name itd. teraz je przekazuje ponizej
        const that = this;
        this.cities.forEach(function(city){
            console.log(that.name + " has lived in " + city)
        });
    },
};
 
user.printPlacesLived(); 



//w ES6 jest dużo latwiej bo wystarczy zrobic to w ten sposob i nie ma zadnych bladow
const user2 = {
    name: "Brayan",
    cities: ["Philadelphia", "New York", "Dublin",],
    printPlacesLivedTwo(){
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city)
        });
    },
    //Map zwroci mi nowa tablice np. tutaj (3) ["Brayan has lived in Philadelphia", "Brayan has lived in New York", "Brayan has lived in Dublin"]
    uzycieMap(){
        const cityMessage = this.cities.map((city) => {
            return this.name + " has lived in " + city;
        });
        return cityMessage;
    }
};

user2.printPlacesLivedTwo(); 

//wypisanie w konsol logu nowej tablicy ktora utworzyla map 
console.log(user2.uzycieMap());



//zadanie wykonane dla kursu

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((nr) => nr*this.multiplyBy);
    }
};
console.log(multiplier.multiply());  