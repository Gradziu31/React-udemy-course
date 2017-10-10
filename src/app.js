console.log("App.js is running!");

// JSX - JavaScript XML, poniżej jest kod w JSX jest to na styl scss->css więc musi użyc babel do skompilowania

// my own work

const book = {
    title: <p>Some title from object.</p>, 
    subtitle: "Some subtitle from object.",
    options: ['One', 'Two']
};

const tamplate = ( 
<div>
<h1> {book.title} </h1>
{book.subtitle && <p>{book.subtitle}</p>}

{(book.options.length > 0) ? "Here are your options" : "No options"}
<ol>
    <li>Item one</li>
    <li>Item two</li>  
</ol> 
</div> 
); 

// course

const user = {
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
const tamplateTwo = (
    <div>
        <h1>{user.name ? user.name : "Brak nazwy uzytkownika"}</h1>  
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
        {getLocation(user.location)}
    </div>
); 
const appRoot = document.getElementById("app");
 
ReactDOM.render(tamplate, appRoot);