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
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById("app");
var renderCounterApp = function renderCounterApp() {
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
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(tamplateTwo, appRoot);
};
renderCounterApp();
