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

function getLocation(location){
    if(location){
        return location;
    } else {
        return "Nie podano";
    }
}

var tamplateTwo = (
    <div>
        <h1>{user.name}</h1> 
        <p>Age: {user.age}</p> 
        <p>Location: {getLocation(user.location)}</p>
    </div>
);
var appRoot = document.getElementById("app");
 
ReactDOM.render(tamplateTwo, appRoot);