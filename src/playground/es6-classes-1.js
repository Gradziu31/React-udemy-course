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
// extends pobiera wszystko co posiada inna klasa (tak jak by skopiowac wszystko z gory i wkleic tutaj do klasy Student)
class Student extends Person {

}

const me = new Student('Krystian Gradek', 24, );
console.log(`${me.getGretting()}, ${me.getDescription()}`);

const other = new Student();
console.log(`${other.getGretting()}, ${other.getDescription()}`);
