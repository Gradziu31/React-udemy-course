console.log("work");

// JSX - JavaScript XML, poniżej jest kod w JSX jest to na styl scss->css więc musi użyc babel do skompilowania
var book = {
    title: "I am legend",
    subtitle: "Jestem legendą"
};

var tamplate = (
<div>
<h1> {book.title} </h1>
<p> {book.subtitle} </p>
<ol>
    <li>Item one</li>
    <li>Item two</li>  
</ol> 
</div> 
); 

// course

var user = {
    name: "Krystian",
    age: 23,
    location: "Polska"
};
// funkcja poniżej sprawdza czy lokalizacja istnieje jeśli tak zwraca ją, jeśli nie wypisuje string "Nie podano"
function getLocation(location){
    if(location){ 
        return <p>Location: {location}</p>;
    }
};

//w tej zmiennej użyta jest wlasnie funkcja od lokalizacji przekazuje lokalizację do funkcji a funkcja zwraca warunek ktory chcielismy
var tamplateTwo = (
    <div>
        <h1>{user.name ? user.name : "Brak nazwy uzytkownika"}</h1>  
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
); 
var appRoot = document.getElementById("app");
 
ReactDOM.render(tamplateTwo, appRoot);