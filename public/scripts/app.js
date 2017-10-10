"use strict";

console.log("work");

// JSX - JavaScript XML, poniżej jest kod w JSX jest to na styl scss->css więc musi użyc babel do skompilowania
var book = {
    title: "I am legend",
    subtitle: "Jestem legendą"
};

var tamplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " ",
        book.title,
        " "
    ),
    React.createElement(
        "p",
        null,
        " ",
        book.subtitle,
        " "
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

// course

var user = {
    name: "Krystian",
    age: 23,
    location: "Polska"
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return "Nie podano";
    }
}

var tamplateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        getLocation(user.location)
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(tamplateTwo, appRoot);
