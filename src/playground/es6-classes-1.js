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
    constructor(name, age, major){
        //muszę tutaj skorzystac z super aby moc dopisac swoje wlasne 
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}


// Zadanie zlecone na lekcji
class Traveler extends Person {
    // przekazuję najpierw to co bylo w person przez super dopiero potem dopisuje wlanse z tej klasy
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }
    //w tej funckji tworze zmienna ktora przkazuje sobie oryginal z tej samej funkcji tylko ze z Person
    getGretting(){
        let Greeting = super.getGretting();
        // i jeśli istnieje lokalizacja wypisuje tresc z pierwszej funkcji czyli Witam jestem Krystian + dopisuje do tego lokalizacje
        if(this.location){
            Greeting += ` I'm visiting from ${this.location}`;
        }
        //oczywiście musi zwrocic calą tą funkcję
        return Greeting;
    }
}
 //sprawdzam tworzac nowego Traveler bo przez niego sprawdzam lokalizację w innym wypadku nie mial by jak sprawdzic lokalizacji bo w Person jej nie ma
const me = new Traveler('Krystian Gradek', 24, "London");
console.log(me.getGretting());
const other = new Traveler();
console.log(other.getGretting()); 