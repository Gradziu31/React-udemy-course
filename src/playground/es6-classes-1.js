class Person {
    //po = ustawiam domyslna wartosc czyli jesli brakuje np. age to wpisze tam 0
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        //ważne aby to zadzialalo musze tyldą zrobic znaki ``
        return `Hi. I am ${this.name}`;
        //oznacza to samo co 
        // return 'Hi. i am' + this.name + '!';
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old!`
    }
}

const me = new Person('Krystian Gradek', 24);
console.log(me.getGretting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGretting()); 
console.log(other.getDescription());