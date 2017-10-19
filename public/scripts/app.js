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
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        book.options.push(option);
        e.target.elements.option.value = "";
        render();
    };
};

var onRemoveAll = function onRemoveAll() {
    book.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * book.options.length);
    alert(book.options[randomNum]);
};

var appRoot = document.getElementById("app");

var render = function render() {
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
        React.createElement(
            "p",
            null,
            book.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "button",
            { disabled: book.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            book.options.map(function (e) {
                return React.createElement(
                    "li",
                    null,
                    e
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );
    ReactDOM.render(tamplate, appRoot);
};
render();
