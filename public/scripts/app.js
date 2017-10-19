"use strict";

var visibility = false;
var toggle = function toggle() {
    visibility = !visibility;
    render();
};

var app = document.getElementById("app");
var render = function render() {
    var jsx = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggle },
            visibility ? "Hide details" : "Show details"
        ),
        visibility && React.createElement(
            "p",
            null,
            "Praesent facilisis sem enim, eget vulputate leo mollis fringilla. Vestibulum commodo eleifend massa, et fermentum nunc pulvinar ut."
        )
    );
    ReactDOM.render(jsx, app);
};
render();
