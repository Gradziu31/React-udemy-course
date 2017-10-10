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
var userName = 'Krystian';
var userAge = 23;
var userLocation = "Polska";

var tamplateTwo = (
    <div>
        <h1>{user.name}</h1> 
        <p>Age: {user.age}</p> 
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById("app");
 
ReactDOM.render(tamplateTwo, appRoot);