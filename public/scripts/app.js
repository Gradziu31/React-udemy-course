"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML, poniżej jest kod w JSX jest to na styl scss->css więc musi użyc babel do skompilowania

// my own work

var book = {
    title: React.createElement(
        "p",
        null,
        "Some title from object."
    ),
    subtitle: "Some subtitle from object.",
    options: ['One', 'Two']
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
    book.subtitle && React.createElement(
        "p",
        null,
        book.subtitle
    ),
    book.options.length > 0 ? "Here are your options" : "No options",
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
var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var tamplateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: function onClick() {
                console.log('inHere');
            } },
        "+1"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(tamplateTwo, appRoot);
